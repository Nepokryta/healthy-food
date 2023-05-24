import PropTypes from 'prop-types';

import { ReactComponent as StarBorder } from '../../../assets/icons/ic_star_border.svg';
import { ReactComponent as Star } from '../../../assets/icons/ic_star.svg';

import '../sass/RatingStarView.sass';

function RatingStarView({ filled, onClick }) {
  return (
    <button
      className="star"
      onClick={() => onClick()}
      type="submit"
    >
      { filled ? <Star /> : <StarBorder />}
    </button>
  );
}
RatingStarView.propTypes = {
  filled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
  
export default RatingStarView;
