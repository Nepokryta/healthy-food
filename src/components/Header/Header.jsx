import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../ThemeContext/ThemeContext';
import Logo from '../Logo/Logo';
import toggleOff from '../../assets/icons/toggle-off.svg';
import toggleOn from '../../assets/icons/toggle-on.svg';

import './sass/Header.sass';

function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <Logo className="logo" />
      <button type="button" onClick={toggleTheme} className={`header_button ${theme}`}>
        {theme === 'dark' ? <img src={toggleOff} alt="toggleOff" /> : <img src={toggleOn} alt="toggleOn" /> } 
      </button>
      <ul className={`leng_button ${theme}`}>
        <button
          type="button" 
          className={`leng_button ${theme} ${i18n.language === 'en' ? 'leng_active' : ''}`} 
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          type="button" 
          className={`leng_button ${theme} ${i18n.language === 'uk' ? 'leng_active' : ''}`} 
          onClick={() => changeLanguage('uk')}
        >
          UK
        </button>
        <button
          type="button" 
          className={`leng_button ${theme} ${i18n.language === 'es' ? 'leng_active' : ''}`} 
          onClick={() => changeLanguage('es')}
        >
          ES
        </button>
      </ul>
      <nav className="nav">
        <a className={`nav_link ${theme}`} href="#DishOfTheDay">{t('header.menu')}</a>
        <a className={`nav_link ${theme}`} href="#RecipesFromOurChefs">{t('header.recipes')}</a>
        <a className={`nav_link ${theme}`} href="#Thismonthschefs">{t('header.chefs')}</a>
        <a className={`nav_link ${theme}`} href="#contact">{t('header.contact')}</a>
      </nav>
    </header>     
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired, 
};

export default Header;
