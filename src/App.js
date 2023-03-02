import React, { Component } from 'react';

import './css/style.min.css';

import Contacts from './components/Contacts/Contacts';
import Slider from './components/Slider/Slider';
import DescriptionOfWork from './components/DescriptionOfWork/DescriptionOfWork';
import RecipeCards from './components/Recipe/RecipeCards';
import DishCards from './components/Dish/DishCards';

import { ReactComponent as Github } from './assets/icons/github.svg';
import { ReactComponent as Figma } from './assets/icons/figma.svg';

import Avatar1 from './assets/img/avatar1.png';
import Avatar2 from './assets/img/avatar2.png';
import Avatar3 from './assets/img/avatar3.png';
import BeansAndPeppers from './assets/img/beans-and-peppers.png';
import BigImg1 from './assets/img/big-img1.png';
import BigImg2 from './assets/img/big-img2.png';
import BigImg3 from './assets/img/big-img3.png';
import Eggs from './assets/img/eggs.png';
import Fish from './assets/img/fish.png';
import GreenSalad from './assets/img/green-salad.png';
import Img1 from './assets/img/img1-2.png';
import Img2 from './assets/img/img1-3.png';
import Img3 from './assets/img/img2-2.png';
import Img4 from './assets/img/img2-3.png';
import Img5 from './assets/img/img3-2.png';
import Img6 from './assets/img/img3-3.png';
import Placehholder1 from './assets/img/placehholder1.png';
import Placehholder2 from './assets/img/placehholder2.png';
import Placehholder3 from './assets/img/placehholder3.png';
import Placehholder4 from './assets/img/placehholder4.png';
import Placehholder5 from './assets/img/placehholder5.png';
import Placehholder6 from './assets/img/placehholder6.png';
import SaladVegetables from './assets/img/salad-vegetables.png';
import Salad from './assets/img/salad.png';
import ThreeSalads from './assets/img/three-salads.png';
import Vegetables from './assets/img/vegetables.png';
import YellowSoup from './assets/img/yellow-soup.png';

import ABOUT from './assets/icons/ABOUT.svg';
import arrow from './assets/icons/arrow.svg';
import CHEFS from './assets/icons/CHEFS.svg';
import DISHES from './assets/icons/DISHES.svg';
import IcFacebook from './assets/icons/ic_facebook.svg';
import IcInstagram from './assets/icons/ic_instagram.svg';
import IcTwitter from './assets/icons/ic_twitter.svg';
import LogoTitle from './assets/icons/logo-title.svg';
import Logo from './assets/icons/logo.svg';
import RECIPES from './assets/icons/RECIPES.svg';
import SOCIAL from './assets/icons/SOCIAL.svg';
import WORK from './assets/icons/WORK.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [
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
      ],
      works: [
        {
          key: 1,
          title: 'Pick meals',
          subtitle: `Choose your meals from our diverse weekly menu. Find gluten or dairy free, 
            low carb & veggie options.`
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
      ],
      dish: [
        {
          key: 1,
          src: YellowSoup,
          alt: 'yellow_soup',
          title: 'Pumpkin soup',
          subtitle: 'Served with sour cream and chopped herbs.',
          description: 'Pumpkin cream soup can be served hot or cold, depending on personal preference. This soup is perfect for chilly autumn evenings, and its rich and creamy texture makes it a comforting and satisfying meal.',
        },
        {
          key: 2,
          src: BeansAndPeppers,
          alt: 'beans_and_peppers',
          title: 'Three Bean Salad',
          subtitle: 'Served with vinaigrette sauce and chopped parsley.',
          description: 'A refreshing salad made with mixed beans, diced vegetables, and a simple vinaigrette dressing.',
        },
        {
          key: 3,
          src: Eggs,
          alt: 'eggs',
          title: 'Egg toast',
          subtitle: 'Served with a cup of coffee or tea.',
          description: 'A delicious breakfast or brunch option featuring a slice of toast topped with a perfectly cooked egg.',
        },
        {
          key: 4,
          src: Fish,
          alt: 'fish',
          title: 'Red fish',
          subtitle: 'Served with fried or grilled vegetables.',
          description: 'A flavorful and nutritious fish that is often grilled or baked and served with a variety of side dishes.',
        },
        {
          key: 5,
          src: Salad,
          alt: 'salad',
          title: 'Egg bowl',
          subtitle: 'Served with a cup of coffee or orange juice.',
          description: 'A breakfast or brunch dish that typically consists of scrambled eggs served with a variety of toppings, such as diced vegetables, cheese, and avocado.',
        },
        {
          key: 6,
          src: ThreeSalads,
          alt: 'three_salads',
          title: 'Veggie bowl',
          subtitle: 'Served with a little tahini sauce.',
          description: 'A healthy and colorful bowl filled with a variety of fresh, raw or roasted vegetables, often served over a bed of grains or greens.',
        },
      ],
      recipes: [
        {
          key: 1,
          size: 'recipes__card-big', 
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${Vegetables})`,
          subtitle: 'breakfast',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          key: 2,
          size: 'recipes__card-small',
          background: '#252525',
          subtitle: 'lunch',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        },
        {
          key: 3,
          size: 'recipes__card-small',
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${GreenSalad})`,
          subtitle: 'dinner',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        },
        {
          key: 4,
          size: 'recipes__card-small',
          background: '#252525',
          subtitle: 'sweets',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        },
      ],
    };
  }

  render() {
    const {
      slider, works, dish, recipes 
    } = this.state;

    return (
      <>
        <header className="header">
          <div className="container">
            <a className="logo" href="/">
              <img src={Logo} alt="logo" />
              <img src={LogoTitle} alt="logoTitle" />
            </a>
            <nav className="nav">
              <a href="#menu">Menu</a>
              <a href="#recipes">Recipes</a>
              <a href="#chefs">Chefs</a>
              <a href="#contact">Contacts</a>
            </nav>
          </div>
          <hr />
        </header>
    
        <main>
          <section className="main">
            <div className="container">
              <h1 className="main__title">
                <span>Your</span>
                {' '}
                favourite food
                <br />
                <span>delivered</span>
                {' '}
                hot & fresh
              </h1>
              <h3 className="main__subtitle">
                HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & 
                marinating, so you can cook a fresh homemade dinner in just 15 minutes.
              </h3>
              <button className="main__btn" type="submit">Order Now</button>
              <Contacts />
            </div>
          </section>
    
          <section className="about">
            <div className="container">
              <div className="about__title">
                <div className="headline">
                  <h2>`&quot;`The Basics Of Healthy Food`&quot;`</h2>
                  <div className="headline__subtitle">
                    <img src={ABOUT} alt="ABOUT" />
                  </div>
                </div>
              </div>
              <h3 className="about__subtitle">
                In aliqua ea ullamco ad est ex non deserunt nulla. 
                Consectetur sint ea aliquip aliquip consectetur 
                voluptate est. Eu minim dolore laboris enim mollit 
                voluptate irure esse aliquip.
              </h3>
              <Slider slider={slider} />
            </div>
          </section>
    
          <section className="works">
            <div className="container">
              <div className="works__title">
                <div className="headline">
                  <h2>how it works</h2>
                  <div className="headline__subtitle">
                    <img src={WORK} alt="WORK" />
                  </div>
                </div>
                <span className="green__line" />
              </div>
              <DescriptionOfWork works={works} />
            </div>
          </section>
    
          <section className="dish" id="menu">
            <div className="container">
              <div className="dish__title">
                <div className="headline">
                  <h2>Dish Of The Day</h2>
                  <div className="headline__subtitle">
                    <img src={DISHES} alt="DISHES" />
                  </div>
                </div>
                <span className="green__line" />
              </div>
              <DishCards dish={dish} />
            </div>
          </section>
    
          <section className="chefs" id="chefs">
            <div className="container">
              <div className="chefs__title">
                <div className="headline">
                  <h2>This month`&apos;`s chefs</h2>
                  <div className="headline__subtitle">
                    <img src={CHEFS} alt="CHEFS" />
                  </div>
                </div>
                <span className="green__line" />
              </div>
    
              <div className="chefs__cards">
    
                <div className="chefs__card">
                  <div className="card__info">
                    <img src={Avatar1} alt="avatar1" />
                    <div className="card__info__name">
                      <h2 className="card__info__name-title">Gregory Flores</h2>
                      <h3 className="card__info__name-subtitle">Chef of the cold</h3>
                    </div>
                  </div>
                  <div className="card__photo">
                    <img src={BigImg1} alt="big_img1" className="card__photo-big" />
                    <img src={Img1} alt="img1_2" className="card__photo-small" />
                    <img src={Img2} alt="img1_3" className="card__photo-small" />
                  </div>
                </div>
    
                <div className="chefs__card">
                  <div className="card__info">
                    <img src={Avatar2} alt="avatar2" />
                    <div className="card__info__name">
                      <h2 className="card__info__name-title">Annette Cooper</h2>
                      <h3 className="card__info__name-subtitle">Chef of the hot</h3>
                    </div>
                  </div>
                  <div className="card__photo">
                    <img src={BigImg2} alt="big_img2" className="card__photo-big" />
                    <img src={Img3} alt="img2_2" className="card__photo-small" />
                    <img src={Img4} alt="img2_3" className="card__photo-small" />
                  </div>
                </div>
    
                <div className="chefs__card">
                  <div className="card__info">
                    <img src={Avatar3} alt="avatar3" />
                    <div className="card__info__name">
                      <h2 className="card__info__name-title">Greg Fox</h2>
                      <h3 className="card__info__name-subtitle">Сhef macro kitchen</h3>
                    </div>
                  </div>
                  <div className="card__photo">
                    <img src={BigImg3} alt="big_img3" className="card__photo-big" />
                    <img src={Img5} alt="img3_2" className="card__photo-small" />
                    <img src={Img6} alt="img3_3" className="card__photo-small" />
                  </div>
                </div>
    
              </div>
            </div>
          </section>
    
          <section className="recipes" id="recipes">
            <div className="container">
              <div className="recipes__title">
                <div className="headline">
                  <h2>Recipes From Our Chefs</h2>
                  <div className="headline__subtitle">
                    <img src={RECIPES} alt="RECIPES" />
                  </div>
                </div>
                <span className="green__line" />
              </div>
              <RecipeCards recipes={recipes} />
            </div>
          </section>
    
          <section className="social">
            <div className="container">
              <div className="social__title">
                <div className="headline">
                  <h2>We in Social</h2>
                  <div className="headline__subtitle">
                    <img src={SOCIAL} alt="SOCIAL" />
                  </div>
                </div>
                <span className="green__line" />
              </div>
              <div className="social__cards">
    
                <div className="card">
                  <div className="card__header">
                    <div className="icon">
                      <img src={IcTwitter} alt="ic_twitter" />
                    </div>
                    <div className="subtitle">Twitter</div>
                    <button className="btn" type="submit">follow us</button>
                  </div>
                  <hr />
                  <div className="card__main">
                    <span />
                    <h4 className="data">24 Jun at 16:20 pm</h4>
                    <h4 className="title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, 
                      consectetur adipiscing
                    </h4>
                    <h4 className="name">@DennisFerguson</h4>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <div className="icon">
                      <img src={IcInstagram} alt="ic_instagram" />
                    </div>
                    <div className="subtitle">Instagram</div>
                    <button className="btn" type="submit">follow us</button>
                  </div>
                  <hr />
                  <div className="card__main">
                    <span className="span__img" />
                    <button className="arrow-card" type="submit">
                      <img src={arrow} alt="arrow" />
                    </button>
                    <div className="card__main-img">
                      <img src={Placehholder1} alt="placehholder1" />
                      <img src={Placehholder2} alt="placehholder2" />
                      <img src={Placehholder3} alt="placehholder3" />
                      <img src={Placehholder4} alt="placehholder4" />
                      <img src={Placehholder5} alt="placehholder5" />
                      <img src={Placehholder6} alt="placehholder6" />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card__header">
                    <div className="icon">
                      <img src={IcFacebook} alt="ic_facebook" />
                    </div>
                    <div className="subtitle">Facebook</div>
                    <button type="submit" className="btn">follow us</button>
                  </div>
                  <hr />
                  <div className="card__main">
                    <span />
                    <h4 className="data">26 Jun at 16:20 pm</h4>
                    <h4 className="title">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur 
                      adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                    </h4>
                  </div>
                </div>
    
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <Contacts />
          </div>
          <hr />
          <a className="footer__logo" href="/">
            <img src={Logo} alt="logo" />
            <img src={LogoTitle} alt="logoTitle" />
          </a>
          <h4 className="footer__title">© Designed by Yellow Snow. All Rights Reserved.</h4>
          <div className="description">
            <h2>Olena Nepokryta</h2>
            <a 
              href="https://github.com/Nepokryta" 
              target="_blank" 
              rel="noopener noreferrer"
            > 
              <Github />
              Github
            </a>
            <a 
              href="https://www.figma.com/file/DmIkAGpRNjIg7EqJRXQV4I/Healthy-food?node-id=0%3A1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Figma /> 
              Figma
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
