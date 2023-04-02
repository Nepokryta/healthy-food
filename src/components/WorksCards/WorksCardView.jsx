import PropTypes from 'prop-types';
import ThemeContext from '../ThemeContext/ThemeContext';

import './sass/WorksCardView.sass';

function WorksCardView({ title, subtitle }) {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={`work__card ${theme}`}>
          <h2 className={`work__card-title ${theme}`}>{title}</h2>
          <span className="work__card-line" />
          <h3 className={`work__card-subtitle ${theme}`}>{subtitle}</h3>
        </div>
      )}
    </ThemeContext.Consumer>     
  );
}
  
WorksCardView.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default WorksCardView;
