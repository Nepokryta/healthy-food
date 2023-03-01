import React, { Component } from 'react';

import IcWatchLater from '../../assets/icons/ic_watch_later.svg';
import IcNearMe from '../../assets/icons/ic_near_me.svg';
import IcCall from '../../assets/icons/ic_call.svg';

class Contacts extends Component {
  render() {
    return (
      <ul className="contact">
        <li className="contact__info">
          <img src={IcWatchLater} alt="ic_watch_later" />
          <a 
            className="contact__info-title"
            href="/"
          >
            Today 10:00 am - 7:00 pm
          </a>
          <h4 className="contact__info-subtitle">Working hours</h4>
        </li>
        <li className="contact__info">
          <img src={IcNearMe} alt="ic_near_me" />
          <a 
            className="contact__info-title" 
            href="https://goo.gl/maps/8VTd6biYdAWWSjAv5" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Velyka Vasylkivska 100
          </a>
          <h4 className="contact__info-subtitle">Get Directions</h4>
        </li>
        <li className="contact__info">
          <img src={IcCall} alt="ic_call" />
          <a 
            className="contact__info-title"
            href="tel:+80638332415"
          >
            +38 (063)833 24 15
          </a>
          <h4 className="contact__info-subtitle">Call Online</h4>
        </li>
      </ul>
    );
  }
}

export default Contacts;
