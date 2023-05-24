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
    title: 'contacts.workingHoursTitle',
    subtitle: 'contacts.workingHoursSubtitle',
    target: '_self',
    rel: '',
  },
  {
    id: 2,
    svgComponent: IcNearMe,
    href: 'https://goo.gl/maps/8VTd6biYdAWWSjAv5',
    title: 'contacts.getDirectionsTitle',
    subtitle: 'contacts.getDirectionsSubtitle',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: 3,
    svgComponent: IcCall,
    href: 'tel:+80638332415',
    title: '+38 (063)833 24 15',
    subtitle: 'contacts.callOnlineSubtitle',
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
