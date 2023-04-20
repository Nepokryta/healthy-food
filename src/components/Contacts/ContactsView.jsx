import React from 'react';
import PropTypes from 'prop-types';
import ContactView from './ContactView';

function ContactsView({ contact }) {
  const elements = contact.map((item) => (
    <ContactView
      key={item.id}
      src={item.src} 
      alt={item.alt} 
      href={item.href}
      title={item.title}
      subtitle={item.subtitle}
      target={item.target}
      rel={item.rel}
    />
  ));

  return (
    <ul className="contact">
      {elements}
    </ul>
  );
}

ContactsView.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default ContactsView;
