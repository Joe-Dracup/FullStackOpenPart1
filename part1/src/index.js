import React from 'react'
import ReactDOM from 'react-dom'

const Head = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.course.parts[0].name} number={props.course.parts[0].exercises} />
            <Part name={props.course.parts[1].name} number={props.course.parts[1].exercises} />
            <Part name={props.course.parts[2].name} number={props.course.parts[2].exercises} />
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
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

    return (
        <div>
            <Head course={course}/>
            <Content course={course} />
            <Footer course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))