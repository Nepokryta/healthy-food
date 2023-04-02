import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';
import Logo from '../Logo/Logo';

import './sass/Header.sass';

class Header extends Component {
  render() {
    const { toggleTheme } = this.props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <header className="header">
            <Logo className="logo" />
            <button type="button" onClick={toggleTheme}>Toggle Theme</button>
            <nav className="nav">
              <a className={`nav_link ${theme}`} href="#menu">Menu</a>
              <a className={`nav_link ${theme}`} href="#recipes">Recipes</a>
              <a className={`nav_link ${theme}`} href="#chefs">Chefs</a>
              <a className={`nav_link ${theme}`} href="#contact">Contacts</a>
            </nav>
          </header>
        )}
      </ThemeContext.Consumer>         
    );
  }
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired, 
};

export default Header;
