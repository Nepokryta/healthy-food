import Logo from '../Logo/Logo';

import './Header.sass';

function Header() {
  return (
    <header className="header">
      <Logo className="logo" />
      <nav className="nav">
        <a className="nav_link" href="#menu">Menu</a>
        <a className="nav_link" href="#recipes">Recipes</a>
        <a className="nav_link" href="#chefs">Chefs</a>
        <a className="nav_link" href="#contact">Contacts</a>
      </nav>
    </header>
        
  );
}

export default Header;
