import React from 'react'
import ReactDOM from 'react-dom'

const Head = () =>{
    const course = 'Half Stack application development'
    return(
        <div>
            <h1>{course}</h1>
        </div>
    )
}

const Content = (props) =>{
    const part1 = 'Fundamentals of React'
    const part2 = 'Using props to pass data'
    const part3 = 'State of a component'
    return(
        <div>
            <Part name={part1} number={props.exercises1}/>
            <Part name={part2} number={props.exercises2}/>
            <Part name={part3} number={props.exercises3}/>
        </div>
    )
}

const Part = (props) =>{
    return(
        <div>
            <p>{props.name} {props.number}</p>
        </div>
    )
}

const Footer = (props) =>{
    return(
        <div>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </div>
    )
}

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
        <Head />
        <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        <Footer exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))