import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withLoadingAndError from '../../hoc/withLoadingAndError';
import RecipeCardsView from './RecipeCardsView';

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

  return (
    <RecipeCardsView recipes={recipes} />
  );
}

RecipeCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default withLoadingAndError(RecipeCards);
