import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';
import Logo from '../Logo/Logo';
import toggleOff from '../../assets/icons/toggle-off.svg';
import toggleOn from '../../assets/icons/toggle-on.svg';

import './sass/Header.sass';

function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <header className="header">
      <Logo className="logo" />
      <button type="button" onClick={toggleTheme} className={`header_button ${theme}`}>
        {theme === 'dark' ? <img src={toggleOff} alt="toggleOff" /> : <img src={toggleOn} alt="toggleOn" /> } 
      </button>
      <nav className="nav">
        <a className={`nav_link ${theme}`} href="#menu">Menu</a>
        <a className={`nav_link ${theme}`} href="#recipes">Recipes</a>
        <a className={`nav_link ${theme}`} href="#chefs">Chefs</a>
        <a className={`nav_link ${theme}`} href="#contact">Contacts</a>
      </nav>
    </header>     
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired, 
};

export default Header;
