import React, { useMemo } from 'react';
import { useGetRecipesQuery } from '../../store/apis/edamamApi';
import RecipeCardsView from './RecipeCardsView';

import './sass/RecipeCards.sass';

function RecipeCards() {
  const { data = [] } = useGetRecipesQuery();

  const updatedRecipes = useMemo(() => {
    const sortedData = [...data].sort(() => 0.5 - Math.random());
    return sortedData.slice(0, 4);
  }, [data]);

  return (
    <RecipeCardsView recipes={updatedRecipes} />
  );
}

export default RecipeCards;
