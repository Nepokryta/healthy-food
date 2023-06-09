import React from 'react';
import ChefsCardsView from './ChefsCardsView';

import Avatar1 from '../../assets/img/avatar1.png';
import Avatar2 from '../../assets/img/avatar2.png';
import Avatar3 from '../../assets/img/avatar3.png';
import BigImg1 from '../../assets/img/big-img1.png';
import BigImg2 from '../../assets/img/big-img2.png';
import BigImg3 from '../../assets/img/big-img3.png';
import Img1 from '../../assets/img/img1-2.png';
import Img2 from '../../assets/img/img1-3.png';
import Img3 from '../../assets/img/img2-2.png';
import Img4 from '../../assets/img/img2-3.png';
import Img5 from '../../assets/img/img3-2.png';
import Img6 from '../../assets/img/img3-3.png';

import './sass/ChefsCards.sass';

const chefsData = [
  {
    id: 1,
    avatar: Avatar1,
    avatarAlt: 'avatar1',
    name: 'chefs.chefOfTheColdName',
    title: 'chefs.chefOfTheColdTitle',
    bigImg: BigImg1,
    bigImgAlt: 'big_img1',
    smallImg1: Img1,
    smallImg1Alt: 'img1_2',
    smallImg2: Img2,
    smallImg2Alt: 'img1_3',
  },
  {
    id: 2,
    avatar: Avatar2,
    avatarAlt: 'avatar2',
    name: 'chefs.chefOfTheHotName',
    title: 'chefs.chefOfTheHotTitle',
    bigImg: BigImg2,
    bigImgAlt: 'big_img2',
    smallImg1: Img3,
    smallImg1Alt: 'img2_2',
    smallImg2: Img4,
    smallImg2Alt: 'img2_3',
  },
  {
    id: 3,
    avatar: Avatar3,
    avatarAlt: 'avatar3',
    name: 'chefs.chefMacroKitchenName',
    title: 'chefs.chefMacroKitchenTitle',
    bigImg: BigImg3,
    bigImgAlt: 'big_img3',
    smallImg1: Img5,
    smallImg1Alt: 'img3_2',
    smallImg2: Img6,
    smallImg2Alt: 'img3_3',
  },
];
function ChefsCards() {
  return (
    <ChefsCardsView chefs={chefsData} />
  );
}

export default ChefsCards;
