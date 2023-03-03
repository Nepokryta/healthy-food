import PropTypes from 'prop-types';

import './sass/SocialCardHeader.sass';

function SocialCardHeader({ src, alt, title }) {
  return (
    <>
      <div className="card__header">
        <div className="icon">
          <img src={src} alt={alt} />
        </div>
        <div className="subtitle">{title}</div>
        <button className="card__action-btn button" type="submit">follow us</button>
      </div>
      <hr />
    </>
  );
}

SocialCardHeader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialCardHeader;
