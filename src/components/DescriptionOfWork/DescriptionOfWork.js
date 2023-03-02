import React from 'react';
import PropTypes from 'prop-types';

import DescriptionOfWorkView from './DescriptionOfWorkView';

function DescriptionOfWork({ works }) {
  const elements = works.map((item) => (
    <DescriptionOfWorkView key={item.key} title={item.title} subtitle={item.subtitle} />
  ));

  return (
    <div className="work__cards">
      {elements}
    </div>
  );
}

DescriptionOfWork.propTypes = {
  works: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DescriptionOfWork;
