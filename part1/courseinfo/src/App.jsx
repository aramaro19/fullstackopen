const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} excercises={exercises1} />
      <Content part={part2} excercises={exercises2} />
      <Content part={part3} excercises={exercises3} />
      <Total totalExcercises= {exercises1+exercises2+exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.part} {props.excercises}
    </p>
  )
}
const Total = (props) => {
  return (
    <p>
      Number of excercises {props.totalExcercises}
    </p>
  )
}

export default App