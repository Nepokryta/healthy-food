import PropTypes from 'prop-types';

import './sass/WorksCardView.sass';

function WorksCardView({ title, subtitle }) {
  return (
    <div className="work__card">
      <h2 className="work__card-title">{title}</h2>
      <span className="work__card-line" />
      <h3 className="work__card-subtitle">{subtitle}</h3>
    </div>
  );
}
  
WorksCardView.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default WorksCardView;
