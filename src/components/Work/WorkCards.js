import React from 'react';
import PropTypes from 'prop-types';

function WorkCards({ works }) {
  const elements = works.map((item) => (
    <Card key={item.key} title={item.title} subtitle={item.subtitle} />
  ));

  return (
    <div className="work__cards">
      {elements}
    </div>
  );
}

WorkCards.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Card({ title, subtitle }) {
  return (
    <div className="work__card">
      <h2 className="work__card-title">{title}</h2>
      <span className="work__card-line" />
      <h3 className="work__card-subtitle">{subtitle}</h3>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default WorkCards;
