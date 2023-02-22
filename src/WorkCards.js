import React from 'react';

const WorkCards = ({works}) => {
    
    const elements = works.map(item => {
        const {id, ...itemProps} = item;

        return (
            <Card key={id} {...itemProps}/>
        )
    })

    return (
        <div className='work__cards'>
            {elements}
        </div>
    )
}

const Card = (props) => {

    const {title, subtitle} = props;

    return (
        <div className='work__card'>
            <h2 className='work__card-title'>{title}</h2>
            <span className='work__card-line'></span>
            <h3 className='work__card-subtitle'>{subtitle}</h3>
        </div>
    )
}

export default WorkCards;