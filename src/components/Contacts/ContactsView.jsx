import React from 'react';
import PropTypes from 'prop-types';

function ContactsView(props) {
  const {
    src, alt, href, title, subtitle, target, rel 
  } = props;
  return (
    <li className="contact__info">
      <img src={src} alt={alt} />
      <a 
        className="contact__info-title"
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
