import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import withLoadingAndError from '../../hoc/withLoadingAndError';
import RecipeCardsView from './RecipeCardsView';

import './sass/RecipeCards.sass';

function RecipeCards({ data }) {
  const [recipes, setRecipes] = useState([]);

  const updatedRecipes = useMemo(() => {
    return data
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .map((item) => ({ 
        ...item, 
        key: item.id, 
      }));
  }, [data]);
  useEffect(() => {
    setRecipes(updatedRecipes);
  }, []);

  return (
    <RecipeCardsView recipes={recipes} />
  );
}

RecipeCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default withLoadingAndError(RecipeCards);
