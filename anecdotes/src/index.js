import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const RandomQuote = () => {
        var randomNum = Math.floor(Math.random() * (anecdotes.length - 0));
        console.log(randomNum)
        setSelected(randomNum)
    }

    const Vote = () => {
        const newVotes = {...votes}
        newVotes[selected] += 1;
        setVotes(newVotes);
    }


    return (
        <div>
            <h3>Anecdote of the day</h3>
            <Button onClick={() => RandomQuote()} text="next anecdote"></Button>
            <p>{props.anecdotes[selected]}</p>
            <p>Votes: {votes[selected]}</p>
            <Button onClick={() => Vote()} text="Vote"></Button>
            <h3>Top voted anecdote</h3>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Array(anecdotes.length).fill(0);

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)