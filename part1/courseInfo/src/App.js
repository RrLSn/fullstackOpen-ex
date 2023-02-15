import Total from "./Components/Total"
import Content from "./Components/Content"
import Header from "./Components/Header"

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  const exercises1 = 10
  // const part2 = 'Using props to pass data'
  const exercises2 = 7
  // const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course= {course}/>
      <Content />
      <Total numExercise= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App