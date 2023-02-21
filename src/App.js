import React, { Component } from 'react';
import './css/style.min.css'

import Contacts from './Contacts';
import SliderCards from './SliderCards';
import WorkCardList from './WorkCardList'
import RecipeCardList from './RecipeCardList'
import DishCardList from './DishCardList'

import { ReactComponent as Github } from './icons/github.svg';
import { ReactComponent as Figma } from './icons/figma.svg';

import avatar1 from './img/avatar1.png'
import avatar2 from './img/avatar2.png'
import avatar3 from './img/avatar3.png'
import beans_and_peppers from './img/beans-and-peppers.png'
import big_img1 from './img/big-img1.png'
import big_img2 from './img/big-img2.png'
import big_img3 from './img/big-img3.png'
import eggs from './img/eggs.png'
import fish from './img/fish.png'
import green_salad from './img/green-salad.png'
import img1_2 from './img/img1-2.png'
import img1_3 from './img/img1-3.png'
import img2_2 from './img/img2-2.png'
import img2_3 from './img/img2-3.png'
import img3_2 from './img/img3-2.png'
import img3_3 from './img/img3-3.png'
import placehholder1 from './img/placehholder1.png'
import placehholder2 from './img/placehholder2.png'
import placehholder3 from './img/placehholder3.png'
import placehholder4 from './img/placehholder4.png'
import placehholder5 from './img/placehholder5.png'
import placehholder6 from './img/placehholder6.png'
import salad_vegetables from './img/salad-vegetables.png'
import salad from './img/salad.png'
import three_salads from './img/three-salads.png'
import vegetables from './img/vegetables.png'
import yellow_soup from './img/yellow-soup.png'

import ABOUT from './icons/ABOUT.svg'
import arrow from './icons/arrow.svg'
import CHEFS from './icons/CHEFS.svg'
import DISHES from './icons/DISHES.svg'
import ic_facebook from './icons/ic_facebook.svg'
import ic_instagram from './icons/ic_instagram.svg'
import ic_twitter from './icons/ic_twitter.svg'
import logoTitle from './icons/logo-title.svg'
import logo from './icons/logo.svg'
import RECIPES from './icons/RECIPES.svg'
import SOCIAL from './icons/SOCIAL.svg'
import WORK from './icons/WORK.svg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: [
                {
                    key: 1,
                    src: fish,
                    alt: "fish",
                },
                {
                    key: 2,
                    src: salad_vegetables,
                    alt: "salad-vegetables",
                },
            ],
            works: [
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
            ],
            dish: [
                {
                    key: 1,
                    src: yellow_soup,
                    alt: 'yellow-soup'
                },
                {
                    key: 2,
                    src: beans_and_peppers,
                    alt: 'beans-and-peppers'
                },
                {
                    key: 3,
                    src: eggs,
                    alt: 'eggs'
                },
                {
                    key: 4,
                    src: fish,
                    alt: 'fish'
                },
                {
                    key: 5,
                    src: salad,
                    alt: 'salad'
                },
                {
                    key: 6,
                    src: three_salads,
                    alt: 'three-salads'
                },
            ],
            recipes: [
                {
                    key: 1,
                    size: 'recipes__card-big', 
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${vegetables})`,
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
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${green_salad})`,
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
            twitter: [
                {
                    key: 1,
                    data: '24 Jun at 16:20 pm',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing',
                    name: '@DennisFerguson',
                }
            ],
            instagram: [
                {
                    key: 1,
                    src: placehholder1,
                    alt: "placehholder1",
                },
                {
                    key: 2,
                    src: placehholder2,
                    alt: "placehholder2",
                },
                {
                    key: 3,
                    src: placehholder3,
                    alt: "placehholder3",
                },
                {
                    key: 4,
                    src: placehholder4,
                    alt: "placehholder4",
                },
                {
                    key: 5,
                    src: placehholder5,
                    alt: "placehholder5",
                },
                {
                    key: 6,
                    src: placehholder6,
                    alt: "placehholder6",
                },
            ],
            facebook: [
                {
                    key: 1,
                    data: '26 Jun at 16:20 pm',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing',
                },
            ],


        }
    }

    render() {

        const { slider, works, dish, recipes, facebook, twitter, instagram } = this.state;


        return (
            <>
                <header className="header">
                    <div className="container">
                        <a className="logo" href="/">
                            <img src={logo} alt="logo"/>
                            <img src={logoTitle} alt="logo-title"/>
                        </a>
                        <nav className="nav">
                            <a href="#menu">Menu</a>
                            <a href="#recipes">Recipes</a>
                            <a href="#chefs">Chefs</a>
                            <a href="#contact">Contacts</a>
                        </nav>
                    </div>
                    <hr/>
                </header>
    
                <main>
                    <section className="main">
                        <div className="container">
                            <h1 className="main__title">
                                <span>Your</span> favourite food <br/>
                                <span>delivered</span> hot & fresh
                            </h1>
                            <h3 className="main__subtitle">
                                HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & 
                                marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                            </h3>
                            <button className="main__btn">Order Now</button>
                            <Contacts/>
                        </div>
                    </section>
    
                    <section className="about">
                        <div className="container">
                            <div className="about__title">
                                <div className="headline">
                                    <h2>"The Basics Of Healthy Food"</h2>
                                    <div className="headline__subtitle">
                                        <img src={ABOUT} alt="ABOUT"/>
                                    </div>
                                </div>
                            </div>
                            <h3 className="about__subtitle">
                                In aliqua ea ullamco ad est ex non deserunt nulla. 
                                Consectetur sint ea aliquip aliquip consectetur 
                                voluptate est. Eu minim dolore laboris enim mollit 
                                voluptate irure esse aliquip.</h3>
                            <SliderCards slider={slider}/>
                        </div>
                    </section>
    
                    <section className="works">
                        <div className="container">
                            <div className="works__title">
                                <div className="headline">
                                    <h2>how it works</h2>
                                    <div className="headline__subtitle">
                                        <img src={WORK} alt="WORK"/>
                                    </div>
                                </div>
                                <span className="green__line"></span>
                            </div>
                            <WorkCardList works={works}/>
                        </div>
                    </section>
    
                    <section className="dish" id="menu">
                        <div className="container">
                            <div className="dish__title">
                                <div className="headline">
                                    <h2>Dish Of The Day</h2>
                                    <div className="headline__subtitle">
                                        <img src={DISHES} alt="DISHES"/>
                                    </div>
                                </div>
                                <span className="green__line"></span>
                            </div>
                            <DishCardList dish={dish}/>
                        </div>
                    </section>
    
                    <section className="chefs" id="chefs">
                        <div className="container">
                            <div className="chefs__title">
                                <div className="headline">
                                    <h2>This month's chefs</h2>
                                    <div className="headline__subtitle">
                                        <img src={CHEFS} alt= "CHEFS"/>
                                    </div>
                                </div>
                                <span className="green__line"></span>
                            </div>
    
                            <div className="chefs__cards">
    
                                <div className="chefs__card">
                                    <div className="card__info">
                                        <img src={avatar1} alt="avatar1"/>
                                        <div className="card__info__name">
                                            <h2 className="card__info__name-title">Gregory Flores</h2>
                                            <h3 className="card__info__name-subtitle">Chef of the cold</h3>
                                        </div>
                                    </div>
                                    <div className="card__photo">
                                        <img src={big_img1} alt="big-img1" className="card__photo-big"/>
                                        <img src={img1_2} alt="img1-2" className="card__photo-small"/>
                                        <img src={img1_3} alt="img1-3" className="card__photo-small"/>
                                    </div>
                                </div>
    
                                <div className="chefs__card">
                                    <div className="card__info">
                                        <img src={avatar2} alt="avatar2"/>
                                        <div className="card__info__name">
                                            <h2 className="card__info__name-title">Annette Cooper</h2>
                                            <h3 className="card__info__name-subtitle">Chef of the hot</h3>
                                        </div>
                                    </div>
                                    <div className="card__photo">
                                        <img src={big_img2} alt="big-img2" className="card__photo-big"/>
                                        <img src={img2_2} alt="img2-2" className="card__photo-small"/>
                                        <img src={img2_3} alt="img2-3" className="card__photo-small"/>
                                    </div>
                                </div>
    
                                <div className="chefs__card">
                                    <div className="card__info">
                                        <img src={avatar3} alt="avatar3"/>
                                        <div className="card__info__name">
                                            <h2 className="card__info__name-title">Greg Fox</h2>
                                            <h3 className="card__info__name-subtitle">Сhef macro kitchen</h3>
                                        </div>
                                    </div>
                                    <div className="card__photo">
                                        <img src={big_img3} alt="big-img3" className="card__photo-big"/>
                                        <img src={img3_2} alt="img3-2" className="card__photo-small"/>
                                        <img src={img3_3} alt="img3-3" className="card__photo-small"/>
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
                                        <img src={RECIPES} alt="RECIPES"/>
                                    </div>
                                </div>
                                <span className="green__line"></span>
                            </div>
                            <RecipeCardList recipes={recipes}/>
                        </div>
                    </section>
    
                    <section className="social">
                        <div className="container">
                            <div className="social__title">
                                <div className="headline">
                                    <h2>We in Social</h2>
                                    <div className="headline__subtitle">
                                        <img src={SOCIAL} alt="SOCIAL"/>
                                    </div>
                                </div>
                                <span className="green__line"></span>
                            </div>
                            <div className="social__cards">
    
                                <div className="card">
                                    <div className="card__header">
                                        <div className="icon">
                                            <img src={ic_twitter} alt="ic_twitter"/>
                                        </div>
                                        <div className="subtitle">Twitter</div>
                                        <button className="btn">follow us</button>
                                    </div>
                                    <hr/>
                                    {twitter.map(el => (
                                        <div key={el.key} className="card__main">
                                            <span></span>
                                                <h4 className="data">{el.data}</h4>
                                                <h4 className="title">{el.title}</h4>
                                                <h4 className="name">{el.name}</h4>
                                        </div>
                                    ))}
                                </div>
                                <div className="card">
                                    <div className="card__header">
                                        <div className="icon">
                                            <img src={ic_instagram} alt="ic_instagram"/>
                                        </div>
                                        <div className="subtitle">Instagram</div>
                                        <button className="btn">follow us</button>
                                    </div>
                                    <hr/>
                                    <div className="card__main">
                                        <span className="span__img"></span>
                                        <button className="arrow-card">
                                            <img src={arrow} alt="arrow"/>
                                        </button>
                                        <div className="card__main-img">
                                            {instagram.map(el => (
                                                <img key={el.key} src={el.src} alt={el.alt}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card__header">
                                        <div className="icon">
                                            <img src={ic_facebook} alt="ic_facebook"/>
                                        </div>
                                        <div className="subtitle">Facebook</div>
                                        <button className="btn">follow us</button>
                                    </div>
                                    <hr/>
                                    {facebook.map(el => (
                                        <div key={el.key} className="card__main">
                                            <span></span>
                                            <h4 className="data">{el.data}</h4>
                                            <h4 className="title">{el.title}</h4>
                                        </div>
                                    ))}
                                </div>
    
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    <div className="container">
                        <Contacts/>
                    </div>
                    <hr/>
                    <a className="footer__logo" href="/">
                        <img src={logo} alt="logo"/>
                        <img src={logoTitle} alt="logo-title"/>
                    </a>
                    <h4 className="footer__title">© Designed by Yellow Snow. All Rights Reserved.</h4>
                    <div className="description">
                        <h2>Olena Nepokryta</h2>
                        <a 
                            href="https://github.com/Nepokryta" 
                            target="_blank" 
                            rel="noopener noreferrer"> 
                            <Github/>
                            Github
                        </a>
                        <a 
                            href="https://www.figma.com/file/DmIkAGpRNjIg7EqJRXQV4I/Healthy-food?node-id=0%3A1" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <Figma/> 
                            Figma
                        </a>
                    </div>
                </footer>
            </>
        )
    }
}

export default App;