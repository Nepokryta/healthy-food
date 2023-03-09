import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OneDishCardView from './OneDishCardView';

import './sass/DishCardView.sass';

class DishCardView extends Component {
  render() {
    const {
      dish, onSort, onRandomSort, onCardClick, onAddElement, 
      onDeleteElement, onAddElementOnClick, onAddCardClick, activeCard,
      onDragStart, onDragOver, onDrop, onDragLeave, onDragEnd, sortCards, toggleActive, 
    } = this.props;
    const elements = dish.sort(sortCards).map((item) => (
      <div
        className={activeCard === item.key ? 'dish__card active' : 'dish__card inactive'}
        draggable
        onDragStart={(e) => onDragStart(e, item)}
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, item)}
        onKeyDown={() => console.log('DishCardView')} 
        tabIndex={0} 
        role="button"
        key={item.key}
      >
        <OneDishCardView
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
          activeCard={activeCard}
        />
      </div>
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

DishCardView.propTypes = {
  onSort: PropTypes.func.isRequired, 
  onRandomSort: PropTypes.func.isRequired, 
  onCardClick: PropTypes.func.isRequired, 
  onAddElement: PropTypes.func.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  onAddElementOnClick: PropTypes.func.isRequired,
  onAddCardClick: PropTypes.func.isRequired,
  toggleActive: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  sortCards: PropTypes.func.isRequired,
  dish: PropTypes.arrayOf(
    PropTypes.shape({
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
      activeCard: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default DishCardView;
