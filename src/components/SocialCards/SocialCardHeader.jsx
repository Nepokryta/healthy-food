import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

import './sass/SocialCardHeader.sass';

function SocialCardHeader({ src, alt, title }) {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <>
          <div className="card__header">
            <div className={`icon ${theme}`}>
              <img src={src} alt={alt} />
            </div>
            <div className={`subtitle ${theme}`}>{title}</div>
            <button className={`card__action-btn button ${theme}`} type="submit">follow us</button>
          </div>
          <hr />
        </>
      )}
    </ThemeContext.Consumer> 
  );
}

SocialCardHeader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialCardHeader;
