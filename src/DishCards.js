import React, { Component } from 'react';

import { ReactComponent as StarBorder } from './icons/ic_star_border.svg'
import { ReactComponent as StarHalf } from './icons/ic_star_half.svg'
import { ReactComponent as Star } from './icons/ic_star.svg'
import { ReactComponent as Share2 } from './icons/ic_share2.svg'

class DishCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: props.dish
        };
    }

    handleSort = () => {
        const arr = [...this.state.dish].sort((a, b) => b.key - a.key)

        this.setState({dish: arr})
    }

    handleRandomSort = () => {
        const arr = [...this.state.dish]
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = arr[i]
            arr[i] = arr[j]
            arr[j] = k
        }
        this.setState({dish: arr})

    }

    render() {
        const elements = this.state.dish.map(item => {
            const {id, ...itemProps} = item;
            
            return (
                <Card key={id} {...itemProps} onDelete={() => this.onDelete()}/>
                )
            })
            return (
                <>
                <div className="dish__cards">
                    {elements}
                </div>
                <div className="btn">
                    <button className="action-btn" onClick={this.handleRandomSort}>RANDOM</button>
                    <button className="action-btn" onClick={this.handleSort}>SORT</button>
                </div>
            </>
        )
    }
}

const Card = (props) => {

    const {src, alt, title, subtitle, description} = props;

    return (
        <div className="dish__card">
            <button className="arrow-card">
                <Share2/>
            </button>
            <img src={src} alt={alt}/>
            <h2 className="dish__card-title">{title}</h2>
            <h3 className="dish__card-subtitle">{subtitle}</h3>
            <h4 className="dish__card-description">{description.length > 135 ? `${description.slice(0, 135)} ...` : description}</h4>
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
}

export default DishCards;