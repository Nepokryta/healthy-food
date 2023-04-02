import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

function ContactsView(props) {
  const {
    src, alt, href, title, subtitle, target, rel 
  } = props;
  return (
    <ThemeContext.Consumer>
      {(theme) => (
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
      )}
    </ThemeContext.Consumer>   
  );
}

ContactsView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
};
  
export default ContactsView;
