import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { fetchCards } from '../../store/slice';
// import Spinner from '../Spinner/Spinner';
import DishCardView from './DishCardView';

import './sass/DishCards.sass';

function DishCards({ handleRefreshClick }) {
  const [dish, setDish] = useState([]);
  const [sortOrder, setSortOrder] = useState(true);
  const [activeCard, setActiveCard] = useState('');
  const [currentCard, setCurrentCard] = useState('');
  const [dragging, setDragging] = useState(false);
  const { data } = useSelector((state) => state.data);

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
    setSortOrder((prevSortOrder) => !prevSortOrder);
    setDish((prevDish) => [...prevDish].sort((a, b) => (!sortOrder 
      ? a.title.localeCompare(b.title) 
      : b.title.localeCompare(a.title)
    )));
  };

  const handleRandomSort = () => {
    setDish((prevDish) => {
      const arr = [...prevDish];
      for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
      return arr;
    });
  };

  const handleCardClick = (id) => {
    setDish((prevDish) => prevDish.filter((item) => item.id !== id));
  };

  const handleAddCardClick = (src, alt, title, subtitle, description, newSubtitle, showElement) => {
    const id = uuidv4();
    const newItem = {
      key: id,
      id,
      src, 
      alt, 
      title: title === 'My favorite' ? alt : title, 
      subtitle,
      description,
      newSubtitle,
      showElement: !showElement,
    };
    setDish((prevDish) => prevDish.concat(newItem));
    console.log(newItem.key);
  };
   
  const handleAddElement = (id) => {
    setDish((prevDish) => prevDish.map((item) => {
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
    setDish((prevDish) => prevDish.map((item) => {
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
    setDish((prevDish) => prevDish.map((item) => {
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
    setCurrentCard((prevCard) => (prevCard === '' ? card : ''));
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const dropHandler = (e, card) => {
    e.preventDefault();
    setDish((prevDish) => {
      const dishCopy = prevDish.slice();
      const cardIndex = dishCopy.findIndex((item) => item.key === card.key);
      const currentCardIndex = dishCopy.findIndex((item) => item.key === currentCard.key);
      const cardCopy = { ...card };
      const currentCardCopy = { ...currentCard };
      dishCopy.splice(cardIndex, 1, currentCardCopy);
      dishCopy.splice(currentCardIndex, 1, cardCopy);
      return dishCopy;
    });
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
    //   loading={loading}
    //   error={error}
      handleRefreshClick={handleRefreshClick}
    /> 
  );
}

DishCards.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired, 
//       src: PropTypes.string.isRequired,
//       alt: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       subtitle: PropTypes.string.isRequired,
//       newSubtitle: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       showElement: PropTypes.bool
//     }).isRequired
//   ).isRequired,
  //   loading: PropTypes.bool.isRequired,
  //   error: PropTypes.bool.isRequired,
  handleRefreshClick: PropTypes.func.isRequired,
};

// export default withLoadingAndError(DishCards);
export default DishCards;
