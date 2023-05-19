import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';
import OneDishCardView from './OneDishCardView';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { useGetRecipesQuery } from '../../store/apis/edamamApi';

import './sass/DishCardView.sass';

function DishCardView({
  dish,
  onSort,
  onRandomSort,
  onCardClick,
  onAddCardClick,
  onAddElement,
  onDeleteElement,
  onAddElementOnClick,
  activeCard,
  toggleActive,
  onDragStart,
  onDragOver,
  onDrop,
  onKeyDown,
  dragging,
}) {
  const { isLoading, isError, refetch } = useGetRecipesQuery();
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  const [prevDish, setPrevDish] = useState([]);
  useEffect(() => {
    if (!isLoading && !isError && prevDish.length > 0) {
      setPrevDish([]);
    }
  }, [isLoading, isError, prevDish]);

  const elements = (isLoading ? prevDish : dish).map((item) => (
    <div
      className={item.id === activeCard || dragging 
        ? `dish__card ${theme} active ShiftLeft-q-pressed` 
        : `dish__card ${theme} inactive`}
      onClick={() => toggleActive(item.id)}
      draggable
      onDragStart={(e) => onDragStart(e, item)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, item)}
      onKeyDown={(e) => onKeyDown(e)}
      tabIndex={0} 
      role="button"
      key={item.id}
    >
      <OneDishCardView
        showElement={item.showElement}
        id={item.id} 
        src={item.src}
        alt={item.alt}
        title={item.title}
        subtitle={item.subtitle}
        newSubtitle={item.newSubtitle}
        description={item.description}
        onCardClick={onCardClick} 
        onAddCardClick={onAddCardClick}
        onAddElement={onAddElement}
        onDeleteElement={onDeleteElement}
        onAddElementOnClick={onAddElementOnClick}
      />
    </div>
  ));
  
  return (
    <div className="container">

      {isLoading && prevDish.length === 0 ? <Spinner /> : null}
      {isError ? <Error /> : null}
      <div className="dish__cards" id="DISHES">
        {elements}
      </div>
      <div className="sortBtn">
        <button className={`action-btn button ${theme}`} type="submit" onClick={onRandomSort}>{t('dish.btnRandom')}</button>
        <button className={`action-btn button ${theme}`} type="submit" onClick={onSort}>{t('dish.btnSort')}</button>
        <button 
          className={`action-btn button ${theme}`} 
          type="submit" 
          onClick={() => {
            setPrevDish(dish);
            refetch();
          }}
          disabled={isLoading}
        >
          {isLoading ? t('dish.btnLoading') : t('dish.btnRefresh')}
        </button>
      </div>
    </div>
  );
}

DishCardView.propTypes = {
  onSort: PropTypes.func.isRequired, 
  onRandomSort: PropTypes.func.isRequired, 
  onCardClick: PropTypes.func.isRequired, 
  onAddCardClick: PropTypes.func.isRequired,
  onAddElement: PropTypes.func.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  onAddElementOnClick: PropTypes.func.isRequired,
  toggleActive: PropTypes.func.isRequired,
  activeCard: PropTypes.string.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  dragging: PropTypes.bool.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  dish: PropTypes.arrayOf(
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

export default DishCardView;
