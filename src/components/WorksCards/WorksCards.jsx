import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WorksCardsView from './WorksCardsView';
import './sass/WorksCards.sass';

const worksData = [
  {
    key: 1,
    title: 'works.title1',
    subtitle: 'works.subtitle1',
  },
  {
    key: 2,
    title: 'works.title2',
    subtitle: 'works.subtitle2',
  },
  {
    key: 3,
    title: 'works.title3',
    subtitle: 'works.subtitle3',
  },
  {
    key: 4,
    title: 'works.title4',
    subtitle: 'works.subtitle4',
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
