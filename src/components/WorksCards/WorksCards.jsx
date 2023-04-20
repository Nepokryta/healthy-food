import React, { useState } from 'react';
import WorksCardsView from './WorksCardsView';
import './sass/WorksCards.sass';

function WorksCards() {
  const [works] = useState([
    {
      key: 1,
      title: 'Pick meals',
      subtitle: 'Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.'
    },
    {
      key: 2,
      title: 'Choose how often',
      subtitle: 'Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!'
    },
    {
      key: 3,
      title: 'fast deliveries',
      subtitle: 'Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.'
    },
    {
      key: 4,
      title: 'tasty meals',
      subtitle: 'Gobble makes cooking fast, so you have more time to unwind and be with family.'
    }
  ]);

  return (
    <WorksCardsView works={works} />
  );
}

export default WorksCards;
