import React from 'react';
import PropTypes from 'prop-types';

import WorksCardsView from './WorksCardView';
import './sass/WorksCards.sass';

function WorksCards({ works }) {
  const elements = works.map((item) => (
    <WorksCardsView key={item.key} title={item.title} subtitle={item.subtitle} />
  ));

  return (
    <div className="work__cards">
      {elements}
    </div>
  );
}

WorksCards.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WorksCards;
