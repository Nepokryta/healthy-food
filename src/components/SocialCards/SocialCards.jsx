import SocialCardHeader from './SocialCardHeader';

import Placehholder1 from '../../assets/img/placehholder1.png';
import Placehholder2 from '../../assets/img/placehholder2.png';
import Placehholder3 from '../../assets/img/placehholder3.png';
import Placehholder4 from '../../assets/img/placehholder4.png';
import Placehholder5 from '../../assets/img/placehholder5.png';
import Placehholder6 from '../../assets/img/placehholder6.png';
import IcFacebook from '../../assets/icons/ic_facebook.svg';
import IcInstagram from '../../assets/icons/ic_instagram.svg';
import IcTwitter from '../../assets/icons/ic_twitter.svg';
import arrow from '../../assets/icons/arrow.svg';

import './sass/SocialCards.sass';

function SocialCards() {
  return (
    <div className="social__cards">
      <div className="card">
        <SocialCardHeader
          src={IcTwitter}
          alt="ic_twitter"
          title="Twitter"
        />
        <div className="card__main">
          <span className="span__right" />
          <h4 className="data">24 Jun at 16:20 pm</h4>
          <h4 className="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, 
            consectetur adipiscing
          </h4>
          <h4 className="name">@DennisFerguson</h4>
        </div>
      </div>
      <div className="card">
        <SocialCardHeader
          src={IcInstagram}
          alt="ic_instagram"
          title="Instagram"
        />
        <div className="card__main">
          <span className="span__img" />
          <button className="arrow-card" type="submit">
            <img src={arrow} alt="arrow" />
          </button>
          <div className="card__main-img">
            <img src={Placehholder1} alt="placehholder1" />
            <img src={Placehholder2} alt="placehholder2" />
            <img src={Placehholder3} alt="placehholder3" />
            <img src={Placehholder4} alt="placehholder4" />
            <img src={Placehholder5} alt="placehholder5" />
            <img src={Placehholder6} alt="placehholder6" />
          </div>
        </div>
      </div>
      <div className="card">
        <SocialCardHeader
          src={IcFacebook}
          alt="ic_facebook"
          title="Facebook"
        />
        <div className="card__main">
          <span className="span__right" />
          <h4 className="data">26 Jun at 16:20 pm</h4>
          <h4 className="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur 
            adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SocialCards;