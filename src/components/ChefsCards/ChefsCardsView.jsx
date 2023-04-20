import React from 'react';
import PropTypes from 'prop-types';
import ChefCardView from './ChefCardView';

function ChefsCardsView({ chefs }) {
  const elements = chefs.map((item) => (
    <ChefCardView 
      key={item.id}
      avatar={item.avatar}
      avatarAlt={item.avatarAlt}
      name={item.name}
      title={item.title}
      bigImg={item.bigImg}
      bigImgAlt={item.bigImgAlt}
      smallImg1={item.smallImg1}
      smallImg1Alt={item.smallImg1Alt}
      smallImg2={item.smallImg2}
      smallImg2Alt={item.smallImg2Alt}
    />
  ));
  
  return (
    <div className="chefs__cards">
      {elements}
    </div>
  );
}

ChefsCardsView.propTypes = {
  chefs: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default ChefsCardsView;
