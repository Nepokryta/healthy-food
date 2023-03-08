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
    const { dish } = this.state;
    const newId = id;
    const newItem = dish.map((item) => (item.key === id ? item.key : item));
 
    this.setState(({ activeCard }) => ({
      activeCard: activeCard === 0 || activeCard !== newId ? newItem[id - 1] : 0
    }));
  };

  toggleActiveCard = () => {
    const { activeCard, dish } = this.state;
    return dish.map((item) => (item.key === activeCard 
      ? 'dish__card active' : 'dish__card inactive'));
  };

  render() {
    const { dish, activeCard } = this.state;
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
        toggleActiveCard={this.toggleActiveCard}
      /> 
    );
  }
}

DishCards.propTypes = {
  dish: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired, 
      id: PropTypes.number.isRequired, 
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      newSubtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      onCardClick: PropTypes.func.isRequired, 
      onAddElement: PropTypes.func.isRequired,
      onDeleteElement: PropTypes.func.isRequired,
      onAddElementOnClick: PropTypes.func.isRequired,
      onAddCardClick: PropTypes.func.isRequired,
      toggleActive: PropTypes.func.isRequired,
      toggleActiveCard: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default DishCards;
