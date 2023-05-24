import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../ThemeContext/ThemeContext';
import { RECIPE_CARD_BIG, RECIPE_CARD_SMALL } from '../../constants/constants';

import './sass/RecipeCardView.sass';

function RecipeCardView({
  src,
  alt,
  subtitle,
  title,
  newSubtitle,
  linkToRecipe,
  size
}) {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  const className = `recipes__card-${size}`;

  return (
    <div className={className}>
      <img src={src} alt={alt} className="recipe-img" />
      <div className={`recipe-info ${theme}`}>
        <button className={`subtitle ${theme}`} type="submit">{newSubtitle}</button>
        <h3 className={`data ${theme}`}>{subtitle}</h3>
        <h2 className={`title ${theme}`}>{title}</h2>
        <h3 className={`name ${theme}`}>
          <a href={linkToRecipe} target="_blank" rel="noreferrer">{t('recipe.btnView')}</a>
        </h3>
      </div>
    </div>
  );
}

RecipeCardView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  newSubtitle: PropTypes.string.isRequired,
  linkToRecipe: PropTypes.string.isRequired,
  size: PropTypes.oneOf([RECIPE_CARD_BIG, RECIPE_CARD_SMALL]).isRequired,
};

export default RecipeCardView;
