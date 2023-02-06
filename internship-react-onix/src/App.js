import React from 'react';
import './style.min.css'



import WorksCard from './WorksCard'
import RecipesCard from './RecipesCard'
import DishCard from './DishCard'

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
import ic_call from './icons/ic_call.svg'
import ic_facebook from './icons/ic_facebook.svg'
import ic_instagram from './icons/ic_instagram.svg'
import ic_near_me from './icons/ic_near_me.svg'
import ic_twitter from './icons/ic_twitter.svg'
import ic_watch_later from './icons/ic_watch_later.svg'
import logoTitle from './icons/logo-title.svg'
import logo from './icons/logo.svg'
import RECIPES from './icons/RECIPES.svg'
import SOCIAL from './icons/SOCIAL.svg'
import WORK from './icons/WORK.svg'


const App = () => {
    return (
        <>
        <header className="header">
            <div className="container">
                <a className="logo" href="#">
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
                    <h1 className="main__title">This project is a Food Delivery website
                        {/* <span>Your</span> favourite food <br/>
                        <span>delivered</span> hot & fresh */}
                    </h1>
                    <h3 className="main__subtitle">
                        HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & 
                        marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                    </h3>
                    <button className="main__btn">Order Now</button>
                    <ul className="contact">
                        <li className="contact__info">
                            <img src={ic_watch_later} alt="ic_watch_later"/>
                            <a href="#" target="_self" className="contact__info-title">Today 10:00 am - 7:00 pm</a>
                            <h4 className="contact__info-subtitle">Working hours</h4>
                        </li>
                        <li className="contact__info">
                            <img src={ic_near_me} alt="ic_near_me"/>
                            <a href="https://goo.gl/maps/8VTd6biYdAWWSjAv5" target="_blank" className="contact__info-title">Velyka Vasylkivska 100</a>
                            <h4 className="contact__info-subtitle">Get Directions</h4>
                        </li>
                        <li className="contact__info">
                            <img src={ic_call} alt="ic_call"/>
                            <a href="tel:+80638332415" target="_self" className="contact__info-title">+38 (063)833 24 15</a>
                            <h4 className="contact__info-subtitle">Call Online</h4>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="about__title">
                        <div className="headline">
                            <h2>"The Basics Of Healthy Food"</h2>
                            <div className="headline__subtitle"><img src={ABOUT} alt="ABOUT"/></div>
                        </div>
                    </div>
                    <h3 className="about__subtitle">In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.</h3>
                    <div className="about__slider">
                        <div className="cards">
                            <img src={fish} alt="fish"/>
                            <img src={salad_vegetables} alt="salad-vegetables"/>
                        </div>
                        <button className="btn btn__left"><img src={arrow} alt="arrow"/></button>
                        <button className="btn btn__right"><img src={arrow} alt="arrow"/></button>
                    </div>
                </div>
            </section>

            <section className="works">
                <div className="container">
                    <div className="works__title">
                        <div className="headline">
                            <h2>how it works</h2>
                            <div className="headline__subtitle"><img src={WORK} alt="WORK"/></div>
                        </div>
                        <span className="green__line"></span>
                    </div>
                    <div className="works__cards">
                        <WorksCard title='Pick meals' subtitle='Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.'/>
                        <WorksCard title='Choose how often' subtitle='Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!'/>
                        <WorksCard title='fast deliveries' subtitle='Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.'/>
                        <WorksCard title='tasty meals' subtitle='Gobble makes cooking fast, so you have more time to unwind and be with family.'/>
                    </div>
                </div>
            </section>

            <section className="dish" id="menu">
                <div className="container">
                    <div className="dish__title">
                        <div className="headline">
                            <h2>Dish Of The Day</h2>
                            <div className="headline__subtitle"><img src={DISHES} alt="DISHES"/></div>
                        </div>
                        <span className="green__line"></span>
                    </div>
                    <div className="dish__cards">
                        <DishCard 
                            src={yellow_soup} 
                            alt='yellow-soup'/>
                        <DishCard 
                            src={beans_and_peppers} 
                            alt='beans-and-peppers'/>
                        <DishCard 
                            src={eggs} 
                            alt='eggs'/>
                        <DishCard 
                            src={fish} 
                            alt='fish'/>
                        <DishCard 
                            src={salad} 
                            alt='salad'/>
                        <DishCard 
                            src={three_salads}
                            alt='three-salads'/>
                    </div>
                </div>
            </section>

            <section className="chefs" id="chefs">
                <div className="container">
                    <div className="chefs__title">
                        <div className="headline">
                            <h2>This month's chefs</h2>
                            <div className="headline__subtitle"><img src={CHEFS} alt= "CHEFS"/></div>
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
                            <div className="headline__subtitle"><img src={RECIPES} alt="RECIPES"/></div>
                        </div>
                        <span className="green__line"></span>
                    </div>
                    <div className="recipes__cards">
                        <RecipesCard 
                            size='recipes__card-big' 
                            background={`linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${vegetables})`}
                            subtitle='breakfast' 
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                        <RecipesCard 
                            size='recipes__card-small' 
                            background='#252525'
                            subtitle='lunch' 
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'/>
                        <RecipesCard 
                            size='recipes__card-small' 
                            background={`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${green_salad})`}
                            subtitle='dinner' 
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'/>
                        <RecipesCard 
                            size='recipes__card-small' 
                            background='#252525' 
                            subtitle='sweets' 
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'/>
                    </div>
                </div>
            </section>

            <section className="social">
                <div className="container">
                    <div className="social__title">
                        <div className="headline">
                            <h2>We in Social</h2>
                            <div className="headline__subtitle"><img src={SOCIAL} alt="SOCIAL"/></div>
                        </div>
                        <span className="green__line"></span>
                    </div>
                    <div className="social__cards">

                        <div className="card">
                            <div className="card__header">
                                <div className="icon"><img src={ic_twitter} alt="ic_twitter"/></div>
                                <div className="subtitle">Twitter</div>
                                <button className="btn">follow us</button>
                            </div>
                            <hr/>
                            <div className="card__main">
                                <span></span>
                                <h4 className="data">24 Jun at 16:20 pm</h4>
                                <h4 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
                                <h4 className="name">@DennisFerguson</h4>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__header">
                                <div className="icon"><img src={ic_instagram} alt="ic_instagram"/></div>
                                <div className="subtitle">Instagram</div>
                                <button className="btn">follow us</button>
                            </div>
                            <hr/>
                            <div className="card__main">
                                <span className="span__img"></span>
                                <button className="arrow-card"><img src={arrow} alt="arrow"/></button>
                                <div className="card__main-img">
                                    <img src={placehholder6} alt="placehholder6"/>
                                    <img src={placehholder5} alt="placehholder5"/>
                                    <img src={placehholder4} alt="placehholder4"/>
                                    <img src={placehholder3} alt="placehholder3"/>
                                    <img src={placehholder2} alt="placehholder2"/>
                                    <img src={placehholder1} alt="placehholder1"/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__header">
                                <div className="icon"><img src={ic_facebook} alt="ic_facebook"/></div>
                                <div className="subtitle">Facebook</div>
                                <button className="btn">follow us</button>
                            </div>
                            <hr/>
                            <div className="card__main">
                                <span></span>
                                <h4 className="data">26 Jun at 16:20 pm</h4>
                                <h4 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
        <footer className="footer">
            <div className="container">
                <ul className="contact" id="contact">
                    <li className="contact__info">
                        <img src={ic_watch_later} alt="ic_watch_later"/>
                        <a href="#" target="_self" className="contact__info-title">Today 10:00 am - 7:00 pm</a>
                        <h4 className="contact__info-subtitle">Working hours</h4>
                    </li>
                    <li className="contact__info">
                        <img src={ic_near_me} alt="ic_near_me"/>
                        <a href="https://goo.gl/maps/8VTd6biYdAWWSjAv5" target="_blank" className="contact__info-title">Velyka Vasylkivska 100</a>
                        <h4 className="contact__info-subtitle">Get Directions</h4>
                    </li>
                    <li className="contact__info">
                        <img src={ic_call} alt="ic_call"/>
                        <a href="tel:+80638332415" target="_self" className="contact__info-title">+38 (063)833 24 15</a>
                        <h4 className="contact__info-subtitle">Call Online</h4>
                    </li>
                </ul>
            </div>
            <hr/>
            <a className="footer__logo" href="#">
                <img src={logo} alt="logo"/>
                <img src={logoTitle} alt="logo-title"/>
            </a>
            <h4 className="footer__title">© Designed by Yellow Snow. All Rights Reserved.</h4>
            <div className="description">
                <h2>Olena Nepokryta</h2>
                <a href="https://github.com/Nepokryta" target="_blank"  aria-label="Homepage" className="footer-octicon" title="GitHub"> 
                    <svg aria-hidden="true" className="octicon octicon-mark-github" height="30" version="1.1" viewBox="0 0 16 16" width="30"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> 
                Github</a>
            <a href="https://www.figma.com/file/DmIkAGpRNjIg7EqJRXQV4I/Healthy-food?node-id=0%3A1" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path d="M336,176a80,80,0,0,0,0-160H176a80,80,0,0,0,0,160,80,80,0,0,0,0,160,80,80,0,1,0,80,80V176Z"/><circle cx="336" cy="256" r="80"/></svg>
            Figma</a>
            </div>
        </footer>
    </>
    )
}

export default App;