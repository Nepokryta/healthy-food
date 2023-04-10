import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipeCardView from './RecipeCardView';
import withLoadingAndError from '../../hoc/withLoadingAndError';
import { RECIPE_CARD_BIG, RECIPE_CARD_SMALL } from '../../constants/constants';

import './sass/RecipeCards.sass';

function RecipeCards({ data }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const updatedRecipes = data
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .map((item) => ({ 
        ...item, 
        key: item.id, 
      }));
    setRecipes(updatedRecipes);
  }, [data]);

  const elements = recipes.map((item, index) => (
    <RecipeCardView 
      key={item.key} 
      src={item.src}
      alt={item.alt}
      size={index === 0 ? RECIPE_CARD_BIG : RECIPE_CARD_SMALL}
      subtitle={item.subtitle} 
      title={item.title}
      newSubtitle={item.newSubtitle}
      linkToRecipe={item.linkToRecipe}
      totalTime={item.totalTime}
      totalWeight={item.totalWeight}
    />
  ));
    
  return (
    <div className="recipes__cards">
      {elements}
    </div> 
  );
}

RecipeCards.propTypes = {
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

export default withLoadingAndError(RecipeCards);
