import React, { Component } from 'react';

import { ReactComponent as StarBorder } from './icons/ic_star_border.svg'
// import { ReactComponent as StarHalf } from './icons/ic_star_half.svg'
import { ReactComponent as Star } from './icons/ic_star.svg'
import { ReactComponent as Close } from './icons/close.svg'

class DishCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: props.dish
        };
        this.maxId = 7;
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

    handleCardClick = (id) => {
        const arr = [...this.state.dish].filter((item) => item.key !== id)
        this.setState({dish: arr})
    }

    handleAddCardClick = (src, alt, title, subtitle, description) => {
        const newItem = {
            key: this.maxId++,
            src, 
            alt, 
            title, 
            subtitle, 
            description,
        }

        const arr = [...this.state.dish]
        const newArr = [...arr, newItem];
        this.setState({dish: newArr})
    }
   
    handleAddElement = (id) => {
        const newItem = [...this.state.dish]
        newItem.find((item) => item.key === id).title = 'My favorite'
        this.setState({ dish: newItem});
    }

    handleDeleteElement = (id) => {
        const newItem = [...this.state.dish]
        newItem.find((item) => item.key === id).subtitle = ''
        this.setState({ dish: newItem});
    }

    render() {
        const elements = this.state.dish.map(item => {
            const {id, ...itemProps} = item;
            return (
                <Card 
                    key={id} 
                    id={itemProps.key} 
                    {...itemProps} 
                    onCardClick={this.handleCardClick} 
                    onAddElement={this.handleAddElement}
                    onDeleteElement={this.handleDeleteElement}
                    onAddCardClick={this.handleAddCardClick}/>
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

class Card extends Component {
    
    handleCardClick = () => {
        const {id, onCardClick} = this.props;
        onCardClick(id);
    }

    handleAddCardClick = () => {
        const {src, alt, title, subtitle, description, onAddCardClick} = this.props;
        onAddCardClick(src, alt, title, subtitle, description);
    }

    handleDeleteElement = () => {
        const {id, onDeleteElement} = this.props;
        onDeleteElement(id)
    }
    handleAddElement = () => {
        const {id, onAddElement} = this.props;
        onAddElement(id)
    }

    render() {

        const {src, alt, title, subtitle, description} = this.props;
        return (
            <div className="dish__card">
                <button className="arrow-card" onClick={this.handleCardClick}>
                    <Close/>
                </button>
                <img src={src} alt={alt}/>
                <h2 className="dish__card-title">{title}</h2>
                <h3 className="dish__card-subtitle">{subtitle}</h3>
                <h4 className="dish__card-description">
                    {description.length > 135 ? `${description.slice(0, 135)} ...` : description}</h4>
                <button className="card__action-btn" onClick={this.handleAddElement}>MY FAVORITE</button>
                <button className="card__action-btn" onClick={this.handleDeleteElement}>DELETE</button>
                <div className="dish__card-action">
                    <Rating/>
                    <button className="card__action-btn" onClick={this.handleAddCardClick}>ADD CARD</button>
                </div>
            </div>
        )
    }
}

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 4,
            starValue: 20,
        };
    }

    handleStarClick = (rating, starValue) => {
        this.setState({ rating });
        let newStarValue = 0;
        switch (rating) {
            case 1:
                newStarValue += 5;
                break
            case 2:
                newStarValue += 10;
                break
            case 3:
                newStarValue += 15;
                break
            case 4:
                newStarValue += 20;
                break
            case 5:
                newStarValue += 25;
                break
            default:
                newStarValue += 0;
        } 
        starValue = newStarValue
        this.setState({ starValue });
    }

    
    render() {
        const { rating, starValue } = this.state;
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <RatingStar 
                key={i} 
                filled={i <= rating}
                onClick={() => this.handleStarClick(i)}/>
                );
            }
        return (
            <div className="dish__card-action-stars">
                {stars}
                <div className="dish__card-action-value">{starValue}</div>
            </div>
        );
    }
}

const RatingStar = ({ filled, onClick }) => {
    return (
        <span className="Star" onClick={onClick}>
            {filled  ? <Star/> : <StarBorder/>}
        </span>
    );
};

export default DishCards;