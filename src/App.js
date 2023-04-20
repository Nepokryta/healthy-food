import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
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
import ABOUT from './assets/icons/ABOUT.svg';
import CHEFS from './assets/icons/CHEFS.svg';
import DISHES from './assets/icons/DISHES.svg';
import RECIPES from './assets/icons/RECIPES.svg';
import SOCIAL from './assets/icons/SOCIAL.svg';
import WORK from './assets/icons/WORK.svg';

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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeContext.Provider value={theme}>
        <div className={`App ${theme}`}>
          <Header toggleTheme={toggleTheme} />
          <hr />          
          <main>
            <Main />
    
            <section className={`about ${theme}`}>
              <Headline
                title="The Basics Of Healthy Food"
                src={ABOUT}
                alt="ABOUT"
                greenLine="_inline"
              />
              <AboutSlider slider={slider} />
            </section>
    
            <Headline
              title="how it works"
              src={WORK}
              alt="WORK"
              greenLine=""
            />
            <WorksCards />
           
            <Headline
              title="Dish Of The Day"
              src={DISHES}
              alt="DISHES"
              greenLine=""
            />
            <DishCards />
            
            <Headline
              title="This month&apos;s chefs"
              src={CHEFS}
              alt="CHEFS"
              greenLine=""
            />
            <ChefsCards />
          
            <Headline
              title="Recipes From Our Chefs"
              src={RECIPES}
              alt="RECIPES"
              greenLine=""
            />
            <RecipeCards />
           
            <Headline
              title="We in Social"
              src={SOCIAL}
              alt="SOCIAL"
              greenLine=""
            />
            <SocialCards />
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
