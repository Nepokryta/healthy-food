import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
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
  const { loading, error } = useSelector((state) => state.data);

  if (loading) {
    return <Spinner />;
  } 
  if (error) {
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
