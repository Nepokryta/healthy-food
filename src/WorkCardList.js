import React, { Component } from 'react';

class WorkCardList extends Component {
    
    renderItem(arr) {
        const items = arr.map(item => {

            return (
                <div key={item.key} className='work__card'>
                    <h2 className='work__card-title'>{item.title}</h2>
                    <span className='work__card-line'></span>
                    <h3 className='work__card-subtitle'>{item.subtitle}</h3>
                </div>
            )
        })

        return (
            <div className="work__cards">
                {items}
            </div>
        )
    }

    render() {

        const {works} = this.props;
        const items = this.renderItem(works);

        return (
            <div className="work__card-list">
                {items}
            </div>
        )
    }
}

export default WorkCardList;