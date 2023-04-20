import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

function ContactView({
  src,
  alt,
  href,
  title,
  subtitle,
  target,
  rel 
}) {
  const theme = useContext(ThemeContext);

  return (
    <li className="contact__info">
      <img src={src} alt={alt} />
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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
};
  
export default ContactView;
