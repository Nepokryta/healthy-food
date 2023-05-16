import React from 'react';
import PropTypes from 'prop-types';
import { useGetRecipesQuery } from '../../store/apis/edamamApi';
import RecipeCardView from './RecipeCardView';
import { RECIPE_CARD_BIG, RECIPE_CARD_SMALL } from '../../constants/constants';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

function RecipeCardsView({ recipes }) {
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
  const { isLoading, isError } = useGetRecipesQuery();

  if (isLoading) {
    return <Spinner />;
  } 
  if (isError) {
    return <Error />;
  }
    
  return (
    <div className="recipes__cards">
      {elements}
    </div> 
  );
}

RecipeCardsView.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RecipeCardsView;
