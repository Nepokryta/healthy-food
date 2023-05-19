import React, { useState, useEffect } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import ThemeContext from './components/ThemeContext/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from './constants/constants';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutSlider from './components/Slider/AboutSlider';
import WorksCards from './components/WorksCards/WorksCards';
import RecipeCards from './components/RecipeCards/RecipeCards';
import DishCards from './components/DishCards/DishCards';
import ChefsCards from './components/ChefsCards/ChefsCards';
import Headline from './components/Headline/Headline';
import SocialCards from './components/SocialCards/SocialCards';
import Footer from './components/Footer/Footer';
import Fish from './assets/img/fish.png';
import SaladVegetables from './assets/img/salad-vegetables.png';

function App() {
  const [theme, setTheme] = useState(THEME_DARK);
  const [slider] = useState([
    {
      key: 1,
      src: Fish,
      alt: 'fish',
    },
    {
      key: 2,
      src: SaladVegetables,
      alt: 'salad_vegetables',
    },
  ]);
  
  useEffect(() => {
    const salectedThemeColor = localStorage.getItem('themeColor');
    if (salectedThemeColor) {
      setTheme(salectedThemeColor);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK));
    if (theme === THEME_DARK) {
      localStorage.setItem('themeColor', THEME_LIGHT);
    } else {
      localStorage.setItem('themeColor', THEME_DARK);
    }
  };
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.Provider value={theme}>
        <div className={`App ${theme}`}>
          <Header toggleTheme={toggleTheme} />
          <hr className={`${theme}`} />          
          <main>
            <Main />
    
            <section className={`about ${theme}`}>
              <Headline
                nameId="ABOUT"
                title={t('headline.titleABOUT')}
                svgComponent={t('headline.svgABOUT')}
                greenLine="_inline"
              />
              <AboutSlider slider={slider} />
            </section>
    
            <Headline
              nameId="WORK"
              title={t('headline.titleWORK')}
              svgComponent={t('headline.svgWORK')}
              greenLine=""
            />
            <WorksCards />
           
            <Headline
              nameId="DISHES"
              title={t('headline.titleDISHES')}
              svgComponent={t('headline.svgDISHES')}
              greenLine=""
            />
            <DishCards />
            
            <Headline
              nameId="CHEFS"
              title={t('headline.titleCHEFS')}
              svgComponent={t('headline.svgCHEFS')}
              greenLine=""
            />
            <ChefsCards />
          
            <Headline
              nameId="RECIPES"
              title={t('headline.titleRECIPES')}
              svgComponent={t('headline.svgRECIPES')}
              greenLine=""
            />
            <RecipeCards />
           
            <Headline
              nameId="SOCIAL"
              title={t('headline.titleSOCIAL')}
              svgComponent={t('headline.svgSOCIAL')}
              greenLine=""
            />
            <SocialCards />
          </main>
          <Footer nameId="contact" />
        </div>
      </ThemeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
