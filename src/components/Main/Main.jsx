import React from 'react';
import { useTranslation } from 'react-i18next';
import Contacts from '../Contacts/Contacts';

import './sass/Main.sass';

function Main() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1 className="main__title">
        <span>{t('main.title1')}</span>
        {' '}
        {t('main.title2')}
        <br />
        <span>{t('main.title3')}</span>
        {i18n.language === 'uk' || i18n.language === 'es' ? <br /> : ' '}
        {t('main.title4')}
      </h1>
      <h3 className="main__subtitle">
        {t('main.subtitle1')}
        <br />
        {t('main.subtitle2')}
      </h3>
      <button className="main__btn button" type="submit">{t('main.button')}</button>
      <Contacts />
    </>
        
  );
}

export default Main;
