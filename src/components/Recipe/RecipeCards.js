import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as RemoveRedEye } from '../../assets/icons/ic_remove_red_eye.svg';
import { ReactComponent as QuestionAnswer } from '../../assets/icons/ic_question_answer.svg';

function RecipeCards({ recipes }) {
  const elements = recipes.map((item) => (
    <Card 
      key={item.key} 
      size={item.size} 
      background={item.background} 
      subtitle={item.subtitle} 
      title={item.title}
    />
  ));
    
  return (
    <div className="recipes__cards">
      {elements}
    </div> 
  );
}

RecipeCards.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      size: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Card({
  size, background, subtitle, title 
}) {
  return (
    <div className={size} style={{ background: `${background}` }}>
      <button className="arrow-card" type="submit">
        <Arrow className="arrow" />
      </button>
      <button className="subtitle" type="submit">{subtitle}</button>
      <h3 className="data">05 Jul 2016</h3>
      <h2 className="title">{title}</h2>
      <h3 className="name">Jason Keller</h3>
      <div className="action">
        <div className="views">
          <RemoveRedEye className="removeRedEye" />
          <div className="views-value">275</div>
        </div>
        <div className="comments">
          <QuestionAnswer className="questionAnswer" />
          <div className="comments-value">12</div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  size: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RecipeCards;
