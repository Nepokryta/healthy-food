import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../ThemeContext/ThemeContext';

import './sass/WorksCardView.sass';

function WorksCardView({ title, subtitle }) {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={`work__card ${theme}`}>
      <h2 className={`work__card-title ${theme}`}>{t(title)}</h2>
      <span className="work__card-line" />
      <h3 className={`work__card-subtitle ${theme}`}>{t(subtitle)}</h3>
    </div>
  );
}
  
WorksCardView.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default WorksCardView;
