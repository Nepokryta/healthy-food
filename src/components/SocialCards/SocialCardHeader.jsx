import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext/ThemeContext';

import './sass/SocialCardHeader.sass';

function SocialCardHeader({ src, alt, title }) {
  const theme = useContext(ThemeContext);

  return (
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
  );
}

SocialCardHeader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialCardHeader;
