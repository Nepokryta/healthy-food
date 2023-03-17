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
      maxId: 0,
      sortOrder: true,
      activeCard: '',
      currentCard: 0,
      isShiftLeftAndDPresser: false,
      dragging: false,
    };
  }

  componentDidMount() {
    this.edamamService.getDishs()
      .then(this.onCardListLoaded)
      .catch((error) => console.log('Error', error));
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  onCardListLoaded = (dish) => {
    const updatedDish = dish
      .filter((item) => item.title.length <= 26)
      .slice(0, 6)
      .map((item, i) => ({ 
        ...item, 
        key: i + 1, 
        showElement: !item.showElement,
      }));
    this.setState({ 
      dish: updatedDish,
      maxId: (updatedDish.length - 1) + 1 
    });
  };

  handleSort = () => {
    this.setState(({ dish, sortOrder }) => ({
      sortOrder: !sortOrder,
      dish: dish.sort((a, b) => { 
        if (!sortOrder) {
          return a.key - b.key;
        } 
        return b.key - a.key;
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
    const { maxId } = this.state;
    const id = uuidv4();
    const newItem = {
      key: maxId + 1,
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
      maxId: maxId + 1
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
      activeCard: activeCard === '' || activeCard !== id ? id : '',
    }));
  };

  dragStartHandler = (e, card) => {
    this.setState(({ currentCard }) => ({
      currentCard: currentCard === 0 ? card : 0,
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
    this.setState(({ dish, currentCard }) => ({
      dish: dish.map((item) => {
        if (item.key === card.key) {
          return { ...item, key: currentCard.key };
        } if (item.key === currentCard.key) {
          return { ...item, key: card.key };
        }
        
        return item;
      }).sort((a, b) => (a.key > b.key ? 1 : -1)),
      currentCard: currentCard === 0 ? card : 0,
      dragging: false
    }));
  };

  handleKeyDown = (e) => {
    const { isShiftLeftAndDPresser, activeCard } = this.state;
    if (e.code === 'KeyD') {
      this.keyDPressed = true;
    }
    if (e.code === 'ShiftLeft') {
      this.keyShiftLeftPressed = true;
    }
    if (this.keyDPressed && this.keyShiftLeftPressed && !isShiftLeftAndDPresser) {
      this.setState({ isShiftLeftAndDPresser: true, activeCard: activeCard + 1 });
    }
  };

  handleKeyUp = (e) => {
    const { activeCard, dish } = this.state;
    if (e.code === 'KeyD') {
      this.keyDPressed = false;
    }
    if (e.code === 'ShiftLeft') {
      this.keyShiftLeftPressed = false;
    }
    if (!this.keyDPressed || !this.keyShiftLeftPressed) {
      this.setState({ isShiftLeftAndDPresser: false, activeCard: activeCard > dish.length ? 1 : activeCard });
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

    // const cardClass = activeCard ? 'dish__card active ShiftLeft-q-pressed' : 
    //     dragging ? 'dish__card active ShiftLeft-q-pressed dragging' : 'dish__card inactive';
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
        onKeyUp={this.handleKeyUp}
        chekImg={this.handCheckImage}
      /> 
    );
  }
}

export default DishCards;
