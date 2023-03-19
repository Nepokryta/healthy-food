import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EdamamService from '../../services/EdamamService';

import DishCardView from './DishCardView';
import ErrorRobot from '../../assets/img/error_robot.png';

import './sass/DishCards.sass';

class DishCards extends Component {
  edamamService = new EdamamService();

  constructor(props) {
    super(props);
    this.state = {
      dish: [],
      sortOrder: true,
      activeCard: '',
      currentCard: '',
      dragging: false,
    };
  }

  componentDidMount() {
    this.edamamService.getDishs()
      .then(this.onCardListLoaded)
      .catch((error) => console.log('Error', error));
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  onCardListLoaded = (dish) => {
    const updatedDish = dish
      .filter((item) => item.title.length <= 26)
      .slice(0, 6)
      .map((item) => ({ 
        ...item, 
        key: item.id, 
        showElement: !item.showElement,
      }));
    this.setState({ 
      dish: updatedDish,
    });
  };

  handleSort = () => {
    this.setState(({ dish, sortOrder }) => ({
      sortOrder: !sortOrder,
      dish: dish.sort((a, b) => { 
        if (!sortOrder) {
          return a.title.localeCompare(b.title);
        } 
        return b.title.localeCompare(a.title);
      })
    }));
  };

  handleRandomSort = () => {
    this.setState(({ dish }) => {
      const arr = [...dish];
      for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
      return { dish: arr };
    });
  };

  handleCardClick = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.filter((item) => item.id !== id)
    }));
  };

  handleAddCardClick = (src, alt, title, subtitle, description, newSubtitle, showElement) => {
    const id = uuidv4();
    const newItem = {
      key: id,
      id,
      src, 
      alt, 
      title, 
      subtitle,
      description,
      newSubtitle,
      showElement: !showElement
    };
    this.setState(({ dish }) => ({
      dish: dish.concat(newItem),
    }));
  };
   
  handleAddElement = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
            prevTitle: item.title,
            title: item.isFavorite ? item.prevTitle : 'My favorite',
          };
        }
        return item;
      })
    }));
  };

  handleDeleteElement = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDelete: !item.isDelete,
            prevSubtitle: item.subtitle,
            subtitle: item.isDelete ? item.prevSubtitle : ' ',
          };
        }
        return item;
      }),
    }));
  };

  handleAddElementOnClick = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            showElement: !item.showElement
          };
        } 
        return item;
      })
    }));
  };

  toggleActive = (id) => {
    this.setState(({ activeCard }) => ({
      activeCard: activeCard === '' || activeCard !== id || activeCard === id ? id : '',
    }));
  };

  dragStartHandler = (e, card) => {
    this.setState(({ currentCard }) => ({
      currentCard: currentCard === '' ? card : '',
    }));
  };

  dragEndHandler = () => {
    this.setState({ dragging: false });
  };

  dragOverHandler = (e) => {
    e.preventDefault();
    this.setState({ dragging: true });
  };

  dropHandler = (e, card) => {
    e.preventDefault();
    const { dish, currentCard } = this.state;
    const dishCopy = dish.slice();
    const cardIndex = dishCopy.findIndex((item) => item.key === card.key);
    const currentCardIndex = dishCopy.findIndex((item) => item.key === currentCard.key);
    const cardCopy = { ...card };
    const currentCardCopy = { ...currentCard };
    dishCopy.splice(cardIndex, 1, currentCardCopy);
    dishCopy.splice(currentCardIndex, 1, cardCopy);
    this.setState({
      dish: dishCopy,
      currentCard: '',
      dragging: false,
    });
  };

  handleKeyDown = (e) => {
    e.stopPropagation();
    const { dish, activeCard } = this.state;
    let newActiveCard;
    if (e.code === 'KeyD' && e.shiftKey) {
      const activeCardIndex = dish.findIndex((item) => item.id === activeCard);
      const nextActiveCard = dish[activeCardIndex + 1];
      const newIndex = nextActiveCard ? activeCardIndex + 1 : 0;
      newActiveCard = dish[newIndex].id;

      this.setState(({ activeCard: newActiveCard })); 
    }
  };

  handCheckImage = (e) => {
    const img = e.target;
    if (img.complete && img.naturalHeight !== 0) {
      console.log(`Image uploaded! - "${img.alt}"`);
    } else {
      console.log(`Image loading error! - "${img.alt}"`);
      img.src = ErrorRobot;
    }  
  }; 
  
  render() {
    const { dish, activeCard, dragging } = this.state;

    let cardClass = 'dish__card';
    if (dragging) {
      cardClass += ' dragging' || '';
    } else if (activeCard) {
      cardClass += ' active ShiftLeft-q-pressed';
    } else {
      cardClass += ' inactive';
    }

    return (
      <DishCardView 
        dragging={dragging}
        dish={dish}
        cardClass={cardClass}
        activeCard={activeCard}
        onSort={this.handleSort}
        onRandomSort={this.handleRandomSort}
        onCardClick={this.handleCardClick} 
        onAddCardClick={this.handleAddCardClick}
        onAddElement={this.handleAddElement}
        onDeleteElement={this.handleDeleteElement}
        onAddElementOnClick={this.handleAddElementOnClick}
        toggleActive={this.toggleActive}
        onDragStart={this.dragStartHandler}
        onDragLeave={this.dragEndHandler}
        onDragEnd={this.dragEndHandler}
        onDragOver={this.dragOverHandler}
        onDrop={this.dropHandler}
        onKeyDown={this.handleKeyDown}
        chekImg={this.handCheckImage}
      /> 
    );
  }
}

export default DishCards;
