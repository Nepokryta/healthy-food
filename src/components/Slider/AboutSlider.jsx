import React from 'react';
import PropTypes from 'prop-types';
import AboutSliderView from './AboutSliderView';

import './sass/Slider.sass';

function AboutSlider({ slider }) {
  return (
    <AboutSliderView slider={slider} />
  );
}

AboutSlider.propTypes = {
  slider: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
  
export default AboutSlider;
