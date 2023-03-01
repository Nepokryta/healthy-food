import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../assets/icons/arrow.svg';

function SliderCards({ slider }) {
  const elements = slider.map((item) => (
    <Card key={item.key} src={item.src} alt={item.alt} />
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

SliderCards.propTypes = {
  slider: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Card({ src, alt }) {
  return (
    <img src={src} alt={alt} />
  );
}
Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SliderCards;
