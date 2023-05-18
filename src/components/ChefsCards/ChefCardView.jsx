import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

import './sass/ChefCardView.sass';

function ChefCardView({
  avatar,
  avatarAlt,
  name,
  title,
  bigImg,
  bigImgAlt,
  smallImg1,
  smallImg1Alt,
  smallImg2,
  smallImg2Alt 
}) {
  const theme = useContext(ThemeContext);

  return (
    <div className="chefs" id="Thismonthschefs">
      <div className="chef">
        <img src={avatar} alt={avatarAlt} className="chef__photo" />
        <div className="chef__name">
          <h2 className={`chef__name_title ${theme}`}>{name}</h2>
          <h3 className={`chef__name_subtitle ${theme}`}>{title}</h3>
        </div>
      </div>
      <div className="chef__card-photo">
        <img className="chef__card-photo-big" src={bigImg} alt={bigImgAlt} />
        <img className="chef__card-photo-small" src={smallImg1} alt={smallImg1Alt} />
        <img className="chef__card-photo-small" src={smallImg2} alt={smallImg2Alt} />
      </div>
    </div> 
  );
}

ChefCardView.propTypes = {
  avatar: PropTypes.string.isRequired,
  avatarAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  bigImgAlt: PropTypes.string.isRequired,
  smallImg1: PropTypes.string.isRequired,
  smallImg1Alt: PropTypes.string.isRequired,
  smallImg2: PropTypes.string.isRequired,
  smallImg2Alt: PropTypes.string.isRequired,
};

export default ChefCardView;
