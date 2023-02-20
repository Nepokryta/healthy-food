import React, { Component } from 'react';

import { ReactComponent as Arrow } from './icons/arrow.svg';
import { ReactComponent as RemoveRedEye } from './icons/ic_remove_red_eye.svg';
import { ReactComponent as QuestionAnswer } from './icons/ic_question_answer.svg';

class RecipeCardList extends Component {

    renderItem(arr) {
        const items = arr.map(item => {

            return (
                <div key={item.key} className={item.size} style={{background: `${item.background}`}}>
                    <button className="arrow-card">
                        <Arrow className="arrow"/>
                    </button>
                    <button className="subtitle">{item.subtitle}</button>
                    <h3 className="data">05 Jul 2016</h3>
                    <h2 className="title">{item.title}</h2>
                    <h3 className="name">Jason Keller</h3>
                    <div className="action">
                        <div className="views">
                            <RemoveRedEye className="removeRedEye"/>
                            <div className="views-value">275</div>
                        </div>
                        <div className="comments">
                            <QuestionAnswer className="questionAnswer"/>
                            <div className="comments-value">12</div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="recipes__cards">
                {items}
            </div> 
        )
    }

    render() {
        const {recipes} = this.props;
        const items = this.renderItem(recipes);

        return (
            <div className="recipe__card-list">
                {items}
            </div>
        )  
    }
}

export default RecipeCardList;