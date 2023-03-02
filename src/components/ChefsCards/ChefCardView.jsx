import PropTypes from 'prop-types';

function ChefCardView({
  avatar, avatarAlt, name, title, bigImg, bigImgAlt, smallImg1, smallImg1Alt, smallImg2, smallImg2Alt 
}) {
  return (
    <div className="chefs__card">
      <div className="card__info">
        <img src={avatar} alt={avatarAlt} />
        <div className="card__info__name">
          <h2 className="card__info__name-title">{name}</h2>
          <h3 className="card__info__name-subtitle">{title}</h3>
        </div>
      </div>
      <div className="card__photo">
        <img src={bigImg} alt={bigImgAlt} className="card__photo-big" />
        <img src={smallImg1} alt={smallImg1Alt} className="card__photo-small" />
        <img src={smallImg2} alt={smallImg2Alt} className="card__photo-small" />
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
