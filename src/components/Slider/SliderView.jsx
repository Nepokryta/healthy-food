import PropTypes from 'prop-types';
import './sass/SliderView.sass';

function SliderView({ src, alt }) {
  return (
    <img className="slider__card" src={src} alt={alt} />
  );
}

SliderView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SliderView;
