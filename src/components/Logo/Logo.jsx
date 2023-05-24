import PropTypes from 'prop-types';

import LogoTitle from '../../assets/icons/logo-title.svg';
import LogoIcon from '../../assets/icons/logo.svg';

function Logo({ className }) {
  return (
    <a className={className} href="/">
      <img src={LogoIcon} alt="logo" />
      <img src={LogoTitle} alt="logoTitle" />
    </a>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
