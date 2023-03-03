import PropTypes from 'prop-types';

function Headline({
  title, src, alt, greenLine 
}) {
  return (
    <>
      <div className="headline">
        <h2>{title}</h2>
        <div className="headline__subtitle">
          <img src={src} alt={alt} />
        </div>
      </div>
      <span className={`green__line${greenLine}`} />
    </>
  );
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  greenLine: PropTypes.string.isRequired,
};

export default Headline;
