import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DishCardsView from './DishCardsView';

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
      dish: dish.filter((item) => item.key !== id)
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
    const elements = dish.map((item) => (
      <DishCardsView 
        key={item.key} 
        id={item.key} 
        src={item.src}
        alt={item.alt}
        title={item.title}
        subtitle={item.subtitle}
        newSubtitle={item.newSubtitle}
        description={item.description}
        onCardClick={this.handleCardClick} 
        onAddElement={this.handleAddElement}
        onDeleteElement={this.handleDeleteElement}
        onAddElementOnClick={this.handleAddElementOnClick}
        onAddCardClick={this.handleAddCardClick}
      />
    ));

    return (
      <>
        <div className="dish__cards">
          {elements}
        </div>
        <div className="btn">
          <button className="action-btn" type="submit" onClick={this.handleRandomSort}>RANDOM</button>
          <button className="action-btn" type="submit" onClick={this.handleSort}>SORT</button>
        </div>
      </>
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
