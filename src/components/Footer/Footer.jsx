import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts';
import ThemeContext from '../ThemeContext/ThemeContext';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Figma } from '../../assets/icons/figma.svg';

import './sass/Footer.sass';

function Footer() {
  return ( 
    <ThemeContext.Consumer>
      {(theme) => (
        <footer className={`footer ${theme}`}>
          <div className="container">
            <Contacts />
          </div>
          <hr />
          <Logo className="footer__logo" />
          <h4 className="footer__title">© Designed by Yellow Snow. All Rights Reserved.</h4>
          <div className={`footer__description ${theme}`}>
            <h2>Olena Nepokryta</h2>
            <a 
              href="https://github.com/Nepokryta" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`my_link ${theme}`}
            > 
              <Github />
              Github
            </a>
            <a 
              href="https://www.figma.com/file/DmIkAGpRNjIg7EqJRXQV4I/Healthy-food?node-id=0%3A1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`my_link ${theme}`}
            >
              <Figma /> 
              Figma
            </a>
          </div> 
        </footer>
      )}
    </ThemeContext.Consumer> 
  );
}

export default Footer;
