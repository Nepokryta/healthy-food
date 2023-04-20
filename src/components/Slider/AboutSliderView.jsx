import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';
import SliderView from './SliderView';
import Arrow from '../../assets/icons/arrow.svg';

function AboutSliderView({ slider }) {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  const elements = slider.map((item) => (
    <SliderView key={item.key} src={item.src} alt={item.alt} />
  ));
      
  return (
    <div className="about__slider">
      <h3 className={`about__subtitle ${theme}`}>
        {t('slider.subtitle1')}
        <br />
        {t('slider.subtitle2')}
      </h3>
      <div className="cards">
        {elements}
      </div>
      <button className={`arrow_btn ${theme} arrow_btn-left`} type="submit">
        <img src={Arrow} alt="arrow" />
      </button>
      <button className={`arrow_btn ${theme} arrow_btn-right`} type="submit">
        <img src={Arrow} alt="arrow" />
      </button>
    </div>
  );
}

AboutSliderView.propTypes = {
  slider: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutSliderView;
