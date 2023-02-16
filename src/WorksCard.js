import React, { Component } from 'react';

class WorksCard extends Component {
    
    render() {
        return(
            <>
                {this.props.works.map(el => (
                    <div key={el.key} className='works__card'>
                        <h2 className='works__card-title'>{el.title}</h2>
                        <span className='works__card-line'></span>
                        <h3 className='works__card-subtitle'>{el.subtitle}</h3>
                    </div>
                ))}
            </>
        )
    }
}

export default WorksCard;