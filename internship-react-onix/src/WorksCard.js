import React from 'react';

const WorksCard = ({title, subtitle}) => {
    
    return(
        <>
            <div className='works__card'>
                <h2 className='works__card-title'>{title}</h2>
                <span className='works__card-line'></span>
                <h3 className='works__card-subtitle'>{subtitle}</h3>
            </div>
        </>
    )
}

export default WorksCard;