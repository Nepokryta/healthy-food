import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as RemoveRedEye } from '../../assets/icons/ic_remove_red_eye.svg';
import { ReactComponent as QuestionAnswer } from '../../assets/icons/ic_question_answer.svg';

import './sass/RecipeCardView.sass';

function RecipeCardView(props) {
  const {
    src, subtitle, title, newSubtitle, linkToRecipe, totalTime, totalWeight, size
  } = props; 

  const className = size === 'big' ? 'recipes__card-big' : 'recipes__card-small';
  const backgroundSize = size === 'big' ? { backgroundSize: 'cover' } : { backgroundSize: 'cover', backgroundPosition: 'center' };

  return (
    <div 
      className={className} 
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src})`, 
        ...backgroundSize  
      }}
    >
      <button className="arrow-card" type="submit">
        <Arrow className="arrow" />
      </button>
      <button className="subtitle" type="submit">{newSubtitle}</button>
      <h3 className="data">{subtitle}</h3>
      <h2 className="title">{title}</h2>
      <h3 className="name">
        <a href={linkToRecipe}>View the recipe</a>
      </h3>
      <div className="action">
        <div className="views">
          <RemoveRedEye className="removeRedEye" />
          <div className="views-value">{totalWeight}</div>
        </div>
        <div className="comments">
          <QuestionAnswer className="questionAnswer" />
          <div className="comments-value">{totalTime}</div>
        </div>
      </div>
    </div>
  );
}

RecipeCardView.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  newSubtitle: PropTypes.string.isRequired,
  linkToRecipe: PropTypes.string.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalWeight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default RecipeCardView;
