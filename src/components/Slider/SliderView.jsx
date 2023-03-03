import PropTypes from 'prop-types';

function SliderView({ src, alt }) {
  return (
    <img src={src} alt={alt} />
  );
}

SliderView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SliderView;
