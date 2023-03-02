import PropTypes from 'prop-types';

import { ReactComponent as StarBorder } from '../../../assets/icons/ic_star_border.svg';
// import { ReactComponent as StarHalf } from '../../assets/icons/ic_star_half.svg'
import { ReactComponent as Star } from '../../../assets/icons/ic_star.svg';

function RatingStarsView({ filled, onClick }) {
  return (
    <button
      className="Star"
      onClick={() => onClick()}
      type="submit" 
      style={{ backgroundColor: 'transparent', padding: '0', border: '0' }}
    >
      { filled ? <Star /> : <StarBorder />}
    </button>
  );
}
RatingStarsView.propTypes = {
  filled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
  
export default RatingStarsView;
