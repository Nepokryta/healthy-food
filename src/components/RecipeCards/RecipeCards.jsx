import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RecipeCardsView from './RecipeCardsView';

import './sass/RecipeCards.sass';

function RecipeCards() {
  const { data } = useSelector((state) => state.data);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const updatedDish = data
    // .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .map((item) => ({ 
        ...item, 
        key: item.id, 
      }));
    setRecipes(updatedDish);
  }, [data]);

  return (
    <RecipeCardsView recipes={recipes} />
  );
}

export default RecipeCards;
