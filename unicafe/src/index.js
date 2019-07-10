import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

const Statistics = ({good, bad, neutral}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [Feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 })

    const handleGoodFeedback = () => {
        const feedback = {
            ...Feedback,
            good: Feedback.good + 1,
        }
        setFeedback(feedback)
    }
    const handleBadFeedback = () => {
        const feedback = {
            ...Feedback,
            bad: Feedback.bad + 1,
        }
        setFeedback(feedback)
    }
    const handleNeutralFeedback = () => {
        const feedback = {
            ...Feedback,
            neutral: Feedback.neutral + 1,
        }
        setFeedback(feedback)
    }

    return (
        <div>
            <h2>Give Feedback</h2>
            <Button onClick={handleGoodFeedback} text="Good"></Button>
            <Button onClick={handleNeutralFeedback} text="Neutral"></Button>
            <Button onClick={handleBadFeedback} text="Bad"></Button>
            <Statistics good={Feedback.good} neutral={Feedback.neutral} bad={Feedback.bad}></Statistics>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)