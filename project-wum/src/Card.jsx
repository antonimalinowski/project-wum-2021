import React from 'react';
import Data from './Data/set1';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="question">{props.question}</div>
                <img src={props.frontimage} />
            </div>
            <div className="back">
                <div className="answer">{props.answer}</div>
                <img src={props.backimage} />
            </div>
        </div>
    </div>
)

export default Card;