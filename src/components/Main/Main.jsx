import Contacts from '../Contacts/Contacts';

import './sass/Main.sass';

function Main() {
  return (
    <>
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
      <button className="main__btn button" type="submit">Order Now</button>
      <Contacts />
    </>
        
  );
}

export default Main;
