import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeCardView from './RecipeCardView';
import withLoadingAndError from '../../hoc/withLoadingAndError';

import './sass/RecipeCards.sass';

class RecipeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const updatedRecipes = data
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .map((item) => ({ 
        ...item, 
        key: item.id, 
      }));
    this.setState({ 
      recipes: updatedRecipes,
    });
  }

  render() {
    const { recipes } = this.state;
    
    const elements = recipes.map((item, index) => (
      <RecipeCardView 
        key={item.key} 
        src={item.src}
        alt={item.alt}
        size={index === 0 ? 'big' : 'small'}
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
