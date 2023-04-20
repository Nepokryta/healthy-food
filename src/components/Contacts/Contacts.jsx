import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ContactsView from './ContactsView';

import IcWatchLater from '../../assets/icons/ic_watch_later.svg';
import IcNearMe from '../../assets/icons/ic_near_me.svg';
import IcCall from '../../assets/icons/ic_call.svg';

import './sass/Contact.sass';

const contactsData = [
  {
    id: 1,
    src: IcWatchLater,
    alt: 'ic_watch_later',
    href: '/',
    title: 'contacts.title1',
    subtitle: 'contacts.subtitle1',
    target: '_self',
    rel: '',
  },
  {
    id: 2,
    src: IcNearMe,
    alt: 'ic_near_me',
    href: 'https://goo.gl/maps/8VTd6biYdAWWSjAv5',
    title: 'contacts.title2',
    subtitle: 'contacts.subtitle2',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: 3,
    src: IcCall,
    alt: 'ic_call',
    href: 'tel:+80638332415',
    title: '+38 (063)833 24 15',
    subtitle: 'contacts.subtitle3',
    target: '_self',
    rel: '',
  },
];

function Contacts() {
  const { t, i18n } = useTranslation();
  const [contact, setContact] = useState(contactsData.map((c) => ({ 
    ...c, 
    title: t(c.title), 
    subtitle: t(c.subtitle) 
  })));

  useEffect(() => {
    setContact(contactsData.map((c) => ({ 
      ...c, 
      title: t(c.title), 
      subtitle: t(c.subtitle) 
    })));
  }, [i18n.language, t]);

  return (
    <ContactsView contact={contact} />
  );
}

export default Contacts;
