import React from 'react'
import ReactDOM from 'react-dom'

const Head = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.exercises1.name} number={props.exercises1.exercises} />
            <Part name={props.exercises2.name} number={props.exercises2.exercises} />
            <Part name={props.exercises3.name} number={props.exercises3.exercises} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.name} {props.number}</p>
        </div>
    )
}

const Footer = (props) => {
    return (
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Head course={course}/>
            <Content exercises1={part1} exercises2={part2} exercises3={part3} />
            <Footer exercises1={part1.exercises} exercises2={part1.exercises} exercises3={part1.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))