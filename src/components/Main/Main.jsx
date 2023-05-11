import React from 'react';
import { useTranslation } from 'react-i18next';
import Contacts from '../Contacts/Contacts';

import './sass/Main.sass';

function Main() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1 className="main__title">
        <span>{t('main.yourTitle')}</span>
        {' '}
        {t('main.favoriteFoodTitle')}
        <br />
        <span>{t('main.deliveredTitle')}</span>
        {i18n.language === 'uk' || i18n.language === 'es' ? <br /> : ' '}
        {t('main.hotFreshTitle')}
      </h1>
      <h3 className="main__subtitle">
        {t('main.healthySwitcherSubtitle')}
        <br />
        {t('main.marinatingSubtitle')}
      </h3>
      <button className="main__btn button" type="submit">{t('main.orderNowButton')}</button>
      <Contacts />
    </>
        
  );
}

export default Main;
