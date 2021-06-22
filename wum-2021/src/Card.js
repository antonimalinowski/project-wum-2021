import React from 'react'
import App from './App';

export default function Flashcard({ flashcard }) {
    return (
        <div>
            {flashcard.question}<br></br>
            {flashcard.answer}
        </div>
    )
}
