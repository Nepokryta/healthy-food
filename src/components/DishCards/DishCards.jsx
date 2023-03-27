import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import withLoadingAndError from '../../hoc/withLoadingAndError';
import DishCardView from './DishCardView';

import './sass/DishCards.sass';

class DishCards extends Component {
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
    const { data } = this.props;
    const updatedDish = data
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
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleSort = () => {
    this.setState(({ dish, sortOrder }) => ({
      sortOrder: !sortOrder,
      dish: [...dish].sort((a, b) => (!sortOrder ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)))
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
    this.setState(({ activeCard: id }));
  };

  dragStartHandler = (e, card) => {
    this.setState(({ currentCard }) => ({
      currentCard: currentCard === '' ? card : '',
    }));
  };

  dragEndHandler = () => {
    // this.setState({ dragging: false });
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
      newActiveCard = activeCardIndex === dish.length - 1 ? dish[0].id : dish[activeCardIndex + 1].id;
      this.setState(({ activeCard: newActiveCard })); 
    }
  };

  render() {
    const { dish, activeCard, dragging } = this.state;

    return (
      <DishCardView 
        dragging={dragging}
        dish={dish}
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
      /> 
    );
  }
}

DishCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      newSubtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      showElement: PropTypes.bool
    }).isRequired
  ).isRequired,
};

export default withLoadingAndError(DishCards);
