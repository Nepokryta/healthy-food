import React from 'react';
import PropTypes from 'prop-types';
import RecipeCardView from './RecipeCardView';

function RecipeCards({ recipes }) {
  const elements = recipes.map((item) => (
    <RecipeCardView 
      key={item.key} 
      size={item.size} 
      background={item.background} 
      subtitle={item.subtitle} 
      title={item.title}
    />
  ));
    
  return (
    <div className="recipes__cards">
      {elements}
    </div> 
  );
}

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecipeCards;
