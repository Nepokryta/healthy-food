import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';
import './sass/Headline.sass';

function Headline({
  title,
  svgComponent,
  greenLine 
}) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="headline">
        <h2 className={`headline__title ${theme}`}>{title}</h2>
        <div className={`headline__subtitle ${theme}`}>
          {svgComponent && svgComponent({ fill: theme === 'dark' ? '#303030' : '#d3d1d1' })}
        </div>
      </div>
      <span className={`green__line${greenLine}`} />
    </> 
  );
}

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  svgComponent: PropTypes.func.isRequired,
  greenLine: PropTypes.string.isRequired,
};

export default Headline;
