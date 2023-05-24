import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const [works, setWorks] = useState(worksData.map((c) => ({
    ...c, 
    title: t(c.title), 
    subtitle: t(c.subtitle) 
  })));

  useEffect(() => {
    setWorks(worksData.map((c) => ({ 
      ...c, 
      title: t(c.title), 
      subtitle: t(c.subtitle) 
    })));
  }, [i18n.language, t]);

  return (
    <WorksCardsView works={works} />
  );
}

export default WorksCards;
