import React from 'react';

import arrow from './icons/arrow.svg'

const Card = (props) => {

    const {src, alt} = props;

    return (
        <img src={src} alt={alt}/>
    )
}

const SliderCards = ({slider}) => {

    const elements = slider.map(item => {
        const {id, ...itemProps} = item;

        return (
            <Card key={id} {...itemProps}/>
        )
    })

    return (
        <div className="about__slider">
            <div className="cards">
                {elements}
            </div>
            <button className="btn btn__left">
                <img src={arrow} alt="arrow"/>
            </button>
            <button className="btn btn__right">
                <img src={arrow} alt="arrow"/>
            </button>
        </div>

    )
}

export default SliderCards;