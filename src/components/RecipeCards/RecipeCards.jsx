import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import RecipeCardsView from './RecipeCardsView';

import './sass/RecipeCards.sass';

function RecipeCards() {
  const { data } = useSelector((state) => state.data);

  const updatedRecipes = useMemo(() => {
    const sortedData = [...data].sort(() => 0.5 - Math.random());
    return sortedData
      .slice(0, 4)
      .map((item) => ({ 
        ...item, 
        key: item.id, 
      }));
  }, [data]);

  return (
    <RecipeCardsView recipes={updatedRecipes} />
  );
}

export default RecipeCards;
