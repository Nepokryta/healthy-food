import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RatingStars from './RatingStars/RatingStars';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

import './sass/DishCardView.sass';

class DishCardView extends Component {
  render() {
    const {
      dish, onSort, onRandomSort, onCardClick, onAddElement, 
      onDeleteElement, onAddElementOnClick, onAddCardClick, toggleActive, toggleActiveCard
    } = this.props;
    const elements = dish.map((item) => (
      <DishCard
        key={item.key} 
        id={item.key} 
        src={item.src}
        alt={item.alt}
        title={item.title}
        subtitle={item.subtitle}
        newSubtitle={item.newSubtitle}
        description={item.description}
        onSort={onSort}
        onRandomSort={onRandomSort}
        onCardClick={onCardClick} 
        onAddElement={onAddElement}
        onDeleteElement={onDeleteElement}
        onAddElementOnClick={onAddElementOnClick}
        onAddCardClick={onAddCardClick}
        toggleActive={toggleActive}
        toggleActiveCard={toggleActiveCard}
      />
    ));
      
    return (
      <div className="container">
        <div className="dish__cards">
          {elements}
        </div>
        <div className="sortBtn">
          <button className="action-btn button" type="submit" onClick={this.onRandomSort}>RANDOM</button>
          <button className="action-btn button" type="submit" onClick={this.onSort}>SORT</button>
        </div>
      </div>
    );
  }
}

function DishCard(props) {                  
  const {
    id, src, alt, title, subtitle, newSubtitle, description, 
    onCardClick, onAddElement, onDeleteElement, onAddElementOnClick, onAddCardClick, toggleActive, toggleActiveCard
  } = props;

  return (
    <div 
      className={toggleActiveCard()}
      onClick={() => toggleActive(id)} 
      onKeyDown={() => console.log('bbb')} 
      tabIndex={0} 
      role="button"
    >
      <button className="arrow-card" type="submit" onClick={() => onCardClick(id)}>
        <Close />
      </button>
      <img src={src} alt={alt} />
      <div className="dish__card-details">
        <h2 className="dish__card-title">{title}</h2>
        <h3 className="dish__card-subtitle">{subtitle}</h3>
        <h3 className="dish__card-newsubtitle">{newSubtitle}</h3>
        <h4 className="dish__card-description">{description}</h4>
        <button className="activityBTN button" type="submit" onClick={() => onAddElement(id)}>MY FAVORITE</button>
        <div className="botton_block">
          <button className="activityBTN button" type="submit" onClick={() => onDeleteElement(id)}>DELETE</button>
          <button className="activityBTN button" type="submit" onClick={() => onAddElementOnClick(id)}>ADD</button>
        </div>
      </div>
      <div className="dish__card-action">
        <RatingStars />
        <button 
          className="activityBTN button" 
          type="submit"
          onClick={() => onAddCardClick(src, alt, title, subtitle, description)}
        >
          ADD CARD
        </button>
      </div>
    </div>
  );
}

DishCardView.propTypes = {
  onSort: PropTypes.func.isRequired, 
  onRandomSort: PropTypes.func.isRequired, 
  onCardClick: PropTypes.func.isRequired, 
  onAddElement: PropTypes.func.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  onAddElementOnClick: PropTypes.func.isRequired,
  onAddCardClick: PropTypes.func.isRequired,
  toggleActive: PropTypes.func.isRequired,
  toggleActiveCard: PropTypes.func.isRequired,
  dish: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
};

DishCard.propTypes = {
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
};

export default DishCardView;
