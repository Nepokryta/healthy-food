import React, { Component } from 'react';
import ContactsView from './ContactsView';

import IcWatchLater from '../../assets/icons/ic_watch_later.svg';
import IcNearMe from '../../assets/icons/ic_near_me.svg';
import IcCall from '../../assets/icons/ic_call.svg';

import './sass/Contact.sass';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {
          src: IcWatchLater,
          alt: 'ic_watch_later',
          href: '/',
          title: 'Today 10:00 am - 7:00 pm',
          subtitle: 'Working hours'
        },
        {
          src: IcNearMe,
          alt: 'ic_near_me',
          href: 'https://goo.gl/maps/8VTd6biYdAWWSjAv5',
          title: 'Velyka Vasylkivska 100',
          subtitle: 'Get Directions',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        {
          src: IcCall,
          alt: 'ic_call',
          href: 'tel:+80638332415',
          title: '+38 (063)833 24 15',
          subtitle: 'Call Online'
        },

      ],
    };
  }

  render() {
    const { contact } = this.state;

    const elements = contact.map((item) => (
      <ContactsView
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
}

export default Contacts;
