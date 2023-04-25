import Header from "./Header"
import Part from "./Part"


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    {part: part1, exercise: exercises1},
    {part: part2, exercise: exercises2},
    {part: part3, exercise: exercises3}
    
  ]

  return (
    <>
     <Header course={course} />
     <Part content={content[0].part} exercise={content[0].exercise}/>
     <Part content={content[1].part} exercise={content[1].exercise}/>
     <Part content={content[2].part} exercise={content[2].exercise}/>
     
    
    </>
  )
}

export default App