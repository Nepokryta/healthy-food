import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Figma } from '../../assets/icons/figma.svg';

import './sass/Footer.sass';

function Footer() {
  return ( 
    <footer className="footer">
      <div className="container">
        <Contacts />
      </div>
      <hr />
      <Logo className="footer__logo" />
      <h4 className="footer__title">© Designed by Yellow Snow. All Rights Reserved.</h4>
      <div className="footer__description">
        <h2>Olena Nepokryta</h2>
        <a 
          href="https://github.com/Nepokryta" 
          target="_blank" 
          rel="noopener noreferrer"
          className="my_link"
        > 
          <Github />
          Github
        </a>
        <a 
          href="https://www.figma.com/file/DmIkAGpRNjIg7EqJRXQV4I/Healthy-food?node-id=0%3A1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="my_link"
        >
          <Figma /> 
          Figma
        </a>
      </div> 
    </footer>
  );
}

export default Footer;
