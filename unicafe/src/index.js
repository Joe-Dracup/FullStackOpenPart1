import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

const Statistic = ({text, value}) =>{
    return(
        <>
            <p>{text}: {value}</p>
        </>
    )
}

const Statistics = ({ good, bad, neutral }) => {
    const all = good + bad + neutral
    if (all > 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <Statistic text="Good"value={good}></Statistic>
                <Statistic text="Neutral"value={neutral}></Statistic>
                <Statistic text="Bad"value={bad}></Statistic>
                <Statistic text="All"value={all}></Statistic>
                <Statistic text="Average"value={(good - bad) / (all)}></Statistic>
                <Statistic text="Positive%"value={good / all}></Statistic>
            </div>
        )
    }
    else{
        return(
            <div>
                <p>No Feedback Given</p>
            </div>
        )
    }
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