import React from 'react';
import WorksCardsView from './WorksCardsView';
import './sass/WorksCards.sass';

const worksData = [
  {
    key: 1,
    title: 'works.pickMealsTitle',
    subtitle: 'works.pickMealsSubtitle',
  },
  {
    key: 2,
    title: 'works.chooseHowOftenTitle',
    subtitle: 'works.chooseHowOftenSubtitle',
  },
  {
    key: 3,
    title: 'works.fastDeliveriesTitle',
    subtitle: 'works.fastDeliveriesSubtitle',
  },
  {
    key: 4,
    title: 'works.tastyMealsTitle',
    subtitle: 'works.tastyMealsSubtitle',
  }
];

function WorksCards() {
  return (
    <WorksCardsView works={worksData} />
  );
}

export default WorksCards;
