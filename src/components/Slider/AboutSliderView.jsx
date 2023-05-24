import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetRecipesQuery } from '../../store/apis/edamamApi';
import ThemeContext from '../ThemeContext/ThemeContext';
import SliderView from './SliderView';
import Arrow from '../../assets/icons/arrow.svg';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

function AboutSliderView() {
  const { data = [], isLoading, isError } = useGetRecipesQuery();
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(3);

  const uniqueData = data.filter((item, index, self) => self.findIndex((i) => i.src === item.src) === index);
  const elementsToShow = uniqueData.slice(startIndex, startIndex + 2).map((item) => (
    <SliderView key={item.id} src={item.src} alt={item.alt} />
  ));

  const handlePrevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : uniqueData.length - 2));
  };
        
  const handleNextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex < uniqueData.length - 2 ? prevIndex + 1 : 0));
  };

  return (
    <div className="about__slider">
      <h3 className={`about__subtitle ${theme}`}>
        {t('slider.DeliciousAndHealthyFoodSubtitle')}
        <br />
        {t('slider.anIdealPlaceForSubtitle')}
      </h3>
      <div className="cards">
        {isLoading ? <Spinner /> : null} 
        {isError ? <Error /> : null}
        {elementsToShow} 
      </div>
      <button className={`arrow_btn ${theme} arrow_btn-left`} type="submit" onClick={handlePrevSlide}>
        <img src={Arrow} alt="arrow" />
      </button>
      <button className={`arrow_btn ${theme} arrow_btn-right`} type="submit" onClick={handleNextSlide}>
        <img src={Arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default AboutSliderView;
