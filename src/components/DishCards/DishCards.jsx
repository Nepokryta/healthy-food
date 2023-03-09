import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DishCardView from './DishCardView';

import './sass/DishCards.sass';

class DishCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: props.dish,
      activeCard: 0,
      currentCard: 0,
    };
    this.maxId = 6;
  }

  handleSort = () => {
    this.setState(({ dish }) => ({
      dish: dish.sort((a, b) => b.key - a.key)
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
      dish: dish.filter((item) => item.id !== undefined && item.key !== id)
    }));
  };

  handleAddCardClick = (src, alt, title, subtitle, description, newSubtitle) => {
    const newItem = {
      key: this.maxId + 1,
      src, 
      alt, 
      title, 
      subtitle,
      description,
      newSubtitle,
    };
    this.maxId += 1;
    this.setState(({ dish }) => ({
      dish: dish.concat(newItem)
    }));
  };
   
  handleAddElement = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => (item.key === id
        ? {
          ...item,
          isFavorite: !item.isFavorite,
          title: item.isFavorite ? item.prevTitle : 'My favorite',
          prevTitle: item.title,
        }
        : item)),
    }));
  };

  handleDeleteElement = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => (item.key === id 
        ? {
          ...item,
          isDelete: !item.isDelete,
          subtitle: item.isDelete ? item.prevSubtitle : ' ',
          prevSubtitle: item.subtitle,
        }
        : item)),
    }));
  };

  handleAddElementOnClick = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => (item.key === id 
        ? { 
          ...item,
          isAdd: !item.isAdd,
          newSubtitle: item.isAdd ? item.prevNewSubtitle : 'Great choice!',
          prevNewSubtitle: ' ',
        } 
        : item))
    }));
  };

  toggleActive = (id) => {
    this.setState(({ activeCard }) => ({
      activeCard: activeCard === 0 || activeCard !== id ? id : 0,
    }));
  };

  dragStarHandler = (e, card) => {
    this.setState(({ currentCard }) => ({
      currentCard: currentCard === 0 ? card : 0,
    }));
  };

  dragEndHandler = (e) => {
    const { target } = e;
    target.style.opacity = '1'; 
  };

  dragOverHandler = (e) => {
    e.preventDefault();
    const { target } = e;
    target.style.opacity = '0.5';
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
      }),
      currentCard: currentCard === 0 ? card : 0,
    }));
    const { target } = e;
    target.style.opacity = '1';
  };

  sortCards = (a, b) => {
    return (a.key > b.key) ? 1 : -1;
  };

  render() {
    const { dish, activeCard } = this.state;
    dish[0].id = 0;
    return (
      <DishCardView 
        dish={dish} 
        activeCard={activeCard}
        onSort={this.handleSort}
        onRandomSort={this.handleRandomSort}
        onCardClick={this.handleCardClick} 
        onAddElement={this.handleAddElement}
        onDeleteElement={this.handleDeleteElement}
        onAddElementOnClick={this.handleAddElementOnClick}
        onAddCardClick={this.handleAddCardClick}
        toggleActive={this.toggleActive}
        onDragStart={this.dragStarHandler}
        onDragLeave={this.dragEndHandler}
        onDragEnd={this.dragEndHandler}
        onDragOver={this.dragOverHandler}
        onDrop={this.dropHandler}
        sortCards={this.sortCards}
      /> 
    );
  }
}

DishCards.propTypes = {
  dish: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired, 
      id: PropTypes.number, 
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      newSubtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      onCardClick: PropTypes.func, 
      onAddElement: PropTypes.func,
      onDeleteElement: PropTypes.func,
      onAddElementOnClick: PropTypes.func,
      onAddCardClick: PropTypes.func,
      toggleActive: PropTypes.func,
      onDragStart: PropTypes.func,
      onDragLeave: PropTypes.func,
      onDragEnd: PropTypes.func,
      onDragOver: PropTypes.func,
      onDrop: PropTypes.func,
    })
  ).isRequired,
};

export default DishCards;
