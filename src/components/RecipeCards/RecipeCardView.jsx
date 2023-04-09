import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';
import { RECIPE_CARD_BIG, RECIPE_CARD_SMALL } from '../../constants/constants';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as RemoveRedEye } from '../../assets/icons/ic_remove_red_eye.svg';
import { ReactComponent as QuestionAnswer } from '../../assets/icons/ic_question_answer.svg';

import './sass/RecipeCardView.sass';

function RecipeCardView(props) {
  const {
    src, alt, subtitle, title, newSubtitle, linkToRecipe, totalTime, totalWeight, size
  } = props; 

  const className = size === RECIPE_CARD_BIG 
    ? `recipes__card-${RECIPE_CARD_BIG}` : `recipes__card-${RECIPE_CARD_SMALL}`;

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={className}>
          <img src={src} alt={alt} className="recipe-img" />
          <div className={`recipe-info ${theme}`}>
            <button className="arrow-card" type="submit">
              <Arrow className={`arrow ${theme}`} />
            </button>
            <button className={`subtitle ${theme}`} type="submit">{newSubtitle}</button>
            <h3 className={`data ${theme}`}>{subtitle}</h3>
            <h2 className={`title ${theme}`}>{title}</h2>
            <h3 className={`name ${theme}`}>
              <a href={linkToRecipe}>View the recipe</a>
            </h3>
            <div className="action">
              <div className={`views ${theme}`}>
                <RemoveRedEye className="removeRedEye" />
                <div className="views-value">{totalWeight}</div>
              </div>
              <div className={`comments ${theme}`}>
                <QuestionAnswer className="questionAnswer" />
                <div className="comments-value">{totalTime}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer> 
  );
}

RecipeCardView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  newSubtitle: PropTypes.string.isRequired,
  linkToRecipe: PropTypes.string.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalWeight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default RecipeCardView;
