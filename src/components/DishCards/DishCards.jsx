import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import withLoadingAndError from '../../hoc/withLoadingAndError';
import DishCardView from './DishCardView';

import './sass/DishCards.sass';

function DishCards({ data }) {
  const [dish, setDish] = useState([]);
  const [sortOrder, setSortOrder] = useState(true);
  const [activeCard, setActiveCard] = useState('');
  const [currentCard, setCurrentCard] = useState('');
  const [dragging, setDragging] = useState(false);
  
  const handleKeyDown = useCallback((e) => {
    e.stopPropagation();
    let newActiveCard;
    if (e.code === 'KeyD' && e.shiftKey) {
      const activeCardIndex = dish.findIndex((item) => item.id === activeCard);
      newActiveCard = activeCardIndex === dish.length - 1 ? dish[0].id : dish[activeCardIndex + 1].id;
      setActiveCard(newActiveCard);
    }
  }, [dish, activeCard]);

  useEffect(() => {
    const updatedDish = data
      .filter((item) => item.title.length <= 26)
      .slice(0, 6)
      .map((item) => ({ 
        ...item, 
        key: item.id, 
        showElement: !item.showElement,
      }));
    setDish(updatedDish);

    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); };
  }, [data]);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); };
  }, [handleKeyDown]);

  const handleSort = () => {
    setSortOrder(!sortOrder);
    setDish([...dish].sort((a, b) => (!sortOrder ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))));
  };

  const handleRandomSort = () => {
    const arr = [...dish];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * i);
      const k = arr[i];
      arr[i] = arr[j];
      arr[j] = k;
    }
    setDish(arr);
  };

  const handleCardClick = (id) => {
    setDish(dish.filter((item) => item.id !== id));
  };

  const handleAddCardClick = (src, alt, title, subtitle, description, newSubtitle, showElement, prevTitle) => {
    const id = uuidv4();
    const newItem = {
      key: id,
      id,
      src, 
      alt, 
      title: title === 'My favorite' ? prevTitle : title, 
      subtitle,
      description,
      newSubtitle,
      showElement: !showElement,
      prevTitle,
    };
    setDish(dish.concat(newItem));
    console.log(newItem.key);
  };
   
  const handleAddElement = (id) => {
    setDish(dish.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isFavorite: !item.isFavorite,
          prevTitle: item.title,
          title: item.isFavorite ? item.prevTitle : 'My favorite',
        };
      }
      return item;
    }));
  };

  const handleDeleteElement = (id) => {
    setDish(dish.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDelete: !item.isDelete,
          prevSubtitle: item.subtitle,
          subtitle: item.isDelete ? item.prevSubtitle : ' ',
        };
      }
      return item;
    }));
  };

  const handleAddElementOnClick = (id) => {
    setDish(dish.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          showElement: !item.showElement
        };
      } 
      return item;
    }));
  };

  const toggleActive = (id) => {
    setActiveCard(id);
  };

  const dragStartHandler = (e, card) => {
    setCurrentCard(currentCard === '' ? card : '');
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const dropHandler = (e, card) => {
    e.preventDefault();
    const dishCopy = dish.slice();
    const cardIndex = dishCopy.findIndex((item) => item.key === card.key);
    const currentCardIndex = dishCopy.findIndex((item) => item.key === currentCard.key);
    const cardCopy = { ...card };
    const currentCardCopy = { ...currentCard };
    dishCopy.splice(cardIndex, 1, currentCardCopy);
    dishCopy.splice(currentCardIndex, 1, cardCopy);

    setDish(dishCopy);
    setCurrentCard('');
    setDragging(false);
  };

  return (
    <DishCardView 
      dragging={dragging}
      dish={dish}
      activeCard={activeCard}
      onSort={handleSort}
      onRandomSort={handleRandomSort}
      onCardClick={handleCardClick} 
      onAddCardClick={handleAddCardClick}
      onAddElement={handleAddElement}
      onDeleteElement={handleDeleteElement}
      onAddElementOnClick={handleAddElementOnClick}
      toggleActive={toggleActive}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      onKeyDown={handleKeyDown}
    /> 
  );
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
