import React from 'react';
import PropTypes from 'prop-types';

import SliderView from './SliderView';
import Arrow from '../../assets/icons/arrow.svg';

function Slider({ slider }) {
  const elements = slider.map((item) => (
    <SliderView key={item.key} src={item.src} alt={item.alt} />
  ));

  return (
    <div className="about__slider">
      <div className="cards">
        {elements}
      </div>
      <button className="btn btn__left" type="submit">
        <img src={Arrow} alt="arrow" />
      </button>
      <button className="btn btn__right" type="submit">
        <img src={Arrow} alt="arrow" />
      </button>
    </div>
  );
}

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
