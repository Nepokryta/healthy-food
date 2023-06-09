import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { THEME_DARK } from '../../constants/constants';
import ThemeContext from '../ThemeContext/ThemeContext';

function ContactView({
  svgComponent,
  href,
  title,
  subtitle,
  target,
  rel 
}) {
  const theme = useContext(ThemeContext);

  return (
    <li className="contact__info">
      {svgComponent && svgComponent({ fill: theme === THEME_DARK ? '#d3d1d1' : '#414141' })}
      <a 
        className={`contact__info-title ${theme}`}
        href={href}
        target={target}
        rel={rel}
      >
        {title}
      </a>
      <h4 className="contact__info-subtitle">{subtitle}</h4>
    </li> 
  );
}

ContactView.propTypes = {
  svgComponent: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
};
  
export default ContactView;
