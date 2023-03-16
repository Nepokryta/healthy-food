import React, { Component } from 'react';
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
      activeCard: 0,
      currentCard: 0,
      isShiftLeftAndDPresser: false,
    };
    this.myRef = React.createRef();
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

  handleCardClick = (id, cardKey) => {
    this.setState(({ dish }) => ({
      dish: dish.filter((item) => item.id !== id || item.key !== cardKey)
    }));
  };

  handleAddCardClick = (id, src, alt, title, subtitle, description, newSubtitle, showElement) => {
    const { maxId } = this.state;
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
   
  handleAddElement = (cardKey) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => {
        if (item.key === cardKey) {
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

  handleDeleteElement = (cardKey) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => {
        if (item.key === cardKey) {
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

  handleAddElementOnClick = (cardKey) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => {
        if (item.key === cardKey) {
          return {
            ...item,
            showElement: !item.showElement
          };
        } 
        return item;
      })
    }));
  };

  toggleActive = (key) => {
    this.setState(({ activeCard }) => ({
      activeCard: activeCard === 0 || activeCard !== key ? key : 0,
    }));
  };

  dragStartHandler = (e, card) => {
    this.setState(({ currentCard }) => ({
      currentCard: currentCard === 0 ? card : 0,
    }));
  };

  dragEndHandler = () => {
    this.myRef.current.style.opacity = '1';
  };

  dragOverHandler = (e) => {
    e.preventDefault();
    this.myRef.current.style.opacity = '0.5';
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
    }));
    this.myRef.current.style.opacity = '1';
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
    const { dish, activeCard } = this.state;

    const cardClass = activeCard ? 'dish__card active ShiftLeft-q-pressed' : 'dish__card inactive';

    return (
      <DishCardView 
        myRef={this.myRef}
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
