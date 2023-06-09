import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { THEME_DARK } from '../../constants/constants';
import ThemeContext from '../ThemeContext/ThemeContext';
import './sass/Headline.sass';

function Headline({
  nameId,
  title,
  svgComponent,
  greenLine 
}) {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="headline" id={nameId}>
        <h2 className={`headline__title ${theme}`}>{title}</h2>
        <div className={`headline__subtitle ${theme}`}>
          {svgComponent && svgComponent({ fill: theme === THEME_DARK ? '#303030' : '#d3d1d1' })}
        </div>
      </div>
      <span className={`green__line${greenLine}`} />
    </> 
  );
}

Headline.propTypes = {
  nameId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  svgComponent: PropTypes.func.isRequired,
  greenLine: PropTypes.string.isRequired,
};

export default Headline;
