import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DishCardView from './DishCardView';

import './sass/DishCards.sass';

class DishCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: props.dish
    };
    this.maxId = 7;
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
    //   dish: dish.filter((item) => item.key !== id)
      dish: dish.filter((item) => item.id !== undefined && item.key !== id)
    }));
  };

  handleAddCardClick = (src, alt, title, subtitle, description) => {
    const newItem = {
      key: this.maxId + 1,
      src, 
      alt, 
      title, 
      subtitle,
      description,
    };
    this.maxId += 1;
    this.setState(({ dish }) => ({
      dish: dish.concat(newItem)
    }));
  };
   
  handleAddElement = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => (item.key === id ? { ...item, title: 'My favorite' } : item))
    }));
  };

  handleDeleteElement = (key) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => (item.key === key ? { ...item, subtitle: '' } : item))
    }));
  };

  handleAddElementOnClick = (id) => {
    this.setState(({ dish }) => ({
      dish: dish.map((item) => (item.key === id ? { ...item, newSubtitle: 'Great choice!' } : item))
    }));
  };

  render() {
    const { dish } = this.state;
    return (
      <DishCardView 
        dish={dish} 
        onSort={this.handleSort}
        onRandomSort={this.handleRandomSort}
        onCardClick={this.handleCardClick} 
        onAddElement={this.handleAddElement}
        onDeleteElement={this.handleDeleteElement}
        onAddElementOnClick={this.handleAddElementOnClick}
        onAddCardClick={this.handleAddCardClick}
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
    })
  ).isRequired,
};

export default DishCards;
