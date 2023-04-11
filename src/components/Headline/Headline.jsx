import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

import './sass/Headline.sass';

function Headline(props) {
  const {
    title, src, alt, greenLine 
  } = props;
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="headline">
        <h2 className={`headline__title ${theme}`}>{title}</h2>
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
