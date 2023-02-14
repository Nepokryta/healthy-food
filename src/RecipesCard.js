import React from 'react';

import { ReactComponent as Arrow} from './icons/arrow.svg';
import { ReactComponent as RemoveRedEye} from './icons/ic_remove_red_eye.svg';
import { ReactComponent as QuestionAnswer} from './icons/ic_question_answer.svg';

const RecipesCard = ({size, background, subtitle, title}) => {

    return(
        <>
            <div className={size} style={{background: `${background}`}}>
                <button className="arrow-card">
                    <Arrow className="arrow"/>
                </button>
                <button className="subtitle">{subtitle}</button>
                <h3 className="data">05 Jul 2016</h3>
                <h2 className="title">{title}</h2>
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
        </>
    )
}

export default RecipesCard;