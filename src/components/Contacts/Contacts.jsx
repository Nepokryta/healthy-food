import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ContactsView from './ContactsView';
import { IcCall, IcNearMe, IcWatchLater } from '../../assets/icons/contactsSvg';

import './sass/Contact.sass';

const contactsData = [
  {
    id: 1,
    svgComponent: IcWatchLater,
    href: '/',
    title: 'contacts.title1',
    subtitle: 'contacts.subtitle1',
    target: '_self',
    rel: '',
  },
  {
    id: 2,
    svgComponent: IcNearMe,
    href: 'https://goo.gl/maps/8VTd6biYdAWWSjAv5',
    title: 'contacts.title2',
    subtitle: 'contacts.subtitle2',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: 3,
    svgComponent: IcCall,
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
