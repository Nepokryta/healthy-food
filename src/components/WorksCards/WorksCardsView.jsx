import React from 'react';
import PropTypes from 'prop-types';
import WorksCardView from './WorksCardView';

function WorksCardsView({ works }) {
  const elements = works.map((item) => (
    <WorksCardView key={item.key} title={item.title} subtitle={item.subtitle} />
  ));

  return (
    <div className="work__cards">
      {elements}
    </div>
  );
}

WorksCardsView.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WorksCardsView;
