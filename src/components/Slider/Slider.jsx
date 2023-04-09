import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

import SliderView from './SliderView';
import Arrow from '../../assets/icons/arrow.svg';

import './sass/Slider.sass';

function Slider(props) {
  const { slider } = props;
  const elements = slider.map((item) => (
    <SliderView key={item.key} src={item.src} alt={item.alt} />
  ));
      
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className="about__slider">
          <h3 className={`about__subtitle ${theme}`}>
            In aliqua ea ullamco ad est ex non deserunt nulla. 
            Consectetur sint ea aliquip aliquip consectetur 
            voluptate est. Eu minim dolore laboris enim mollit 
            voluptate irure esse aliquip.
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
      )}
    </ThemeContext.Consumer> 
  );
}
Slider.contextType = ThemeContext;

Slider.propTypes = {
  slider: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
