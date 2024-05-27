const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)
  return (
    <b>total of {totalExercises} exercises</b>
  )
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
  {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
   
  )
}

const Course = ({ course }) => {
  return <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
}

export default Course