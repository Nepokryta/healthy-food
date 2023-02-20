import React, { Component } from 'react';

import { ReactComponent as StarBorder } from './icons/ic_star_border.svg'
import { ReactComponent as StarHalf } from './icons/ic_star_half.svg'
import { ReactComponent as Star } from './icons/ic_star.svg'
import { ReactComponent as Share2 } from './icons/ic_share2.svg'

class DishCardList extends Component {
   
    renderItem(arr) {
        const items = arr.map(item => {

            return (
                <div key={item.key} className="dish__card">
                    <button className="arrow-card">
                        <Share2/>
                    </button>
                    <img src={item.src} alt={item.alt}/>
                    <h2 className="dish__card-title">Featured Meal</h2>
                    <h3 className="dish__card-subtitle">Served with french fries + drink</h3>
                    <h4 className="dish__card-description">
                        Choice of: Coke, Fanta, Sprite, Upgrade to large fries, 
                        Add whopper patty, Add Tender crisp patty and more...</h4>
                    <div className="dish__card-action">
                        <div className="dish__card-action-stars">
    
                            <input type="checkbox" id="st1" value="1" />
                            <label htmlFor="st1">
                                <Star/>
                            </label>
    
                            <input type="checkbox" id="st2" value="2" />
                            <label htmlFor="st2">
                                <Star/>
                            </label>
    
                            <input type="checkbox" id="st3" value="3" />
                            <label htmlFor="st3">
                                <Star/>
                            </label>
    
                            <input type="checkbox" id="st4" value="4" />
                            <label htmlFor="st4">
                                <StarHalf/>
                            </label>
    
                            <input type="checkbox" id="st5" value="5" />
                            <label htmlFor="st5">
                                <StarBorder/>
                            </label>
    
                            <div className="dish__card-action-value">12</div>
                        </div>
                        <button className="card__action-btn">ORDER</button>
                    </div>
                </div>
            )
        })

        return(
            <>
                <div className="dish__cards">
                    {items}
                </div>
            </>   
        )
    }

    render() {
        const {dish} = this.props;
        const items = this.renderItem(dish);

        return (
            <div className="dish__card-list">
                {items}
            </div>
        ) 
    }
}

export default DishCardList;