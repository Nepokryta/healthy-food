import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OneDishCardView from './OneDishCardView';

import './sass/DishCardView.sass';

class DishCardView extends Component {
  render() {
    const {
      dish, onSort, onRandomSort, onCardClick, onAddCardClick, onAddElement, onDeleteElement, onAddElementOnClick, 
      activeCard, toggleActive, onDragStart, onDragOver, onDrop, onDragLeave, onDragEnd, 
      onKeyDown, chekImg, dragging
    } = this.props;

    let cardClass = 'dish__card';
    if (dragging) {
      cardClass += ' dragging' || '';
    } else if (activeCard) {
      cardClass += ' active ShiftLeft-q-pressed';
    } else {
      cardClass += ' inactive';
    }

    const elements = dish.map((item) => (
      <div
        className={item.id === activeCard || dragging ? cardClass : 'dish__card inactive'}
        onClick={() => toggleActive(item.id)}
        draggable
        onDragStart={(e) => onDragStart(e, item)}
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, item)}
        onKeyDown={(e) => onKeyDown(e)}
        tabIndex={0} 
        role="button"
        key={item.key}
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
          chekImg={chekImg}
        />
      </div>
    ));
      
    return (
      <div className="container">
        <div className="dish__cards">
          {elements}
        </div>
        <div className="sortBtn">
          <button className="action-btn button" type="submit" onClick={onRandomSort}>RANDOM</button>
          <button className="action-btn button" type="submit" onClick={onSort}>SORT</button>
        </div>
      </div>
    );
  }
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
  onDragLeave: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  dragging: PropTypes.bool.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  chekImg: PropTypes.func.isRequired,
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
