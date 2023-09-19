import React from "react"
import Header from "./components/Header"
import { Content, RefactoredContent, Part } from "./components/Content RefactorContent and Part"
import Total from "./components/Total"
import Example from "./components/part1 c"
import StateC from "./components/statefulComponent"
import ComplexState from "./components/ComplexState"
const App = () => {
  const datas = {
       course : 'Half Stack development application',
    parts:[
      {
        part: 'Fundamentals of React',
        exercise: 10
      },
      {
        part: 'Using Props to pass data',
        exercise: 7
      },
      {
        part: 'State of a components',
        exercise: 14
      }
    ]
  }
  
  return(
    <>
    <Header course={datas.course}/>
    {datas.parts.map(data => (
        <Content part={data.part} exercise={data.exercise} key={Math.random()} />
    ))}
    <Total parts={datas.parts}/>
    <br />
    <br />
    <br />
    <h2>EXERCISE 1.2</h2>
    {/* This is for the Exercise 1.2 */}
    <RefactoredContent>
     {datas.parts.map(data => (
      <Part part={data.part} exercise={data.exercise} key={Math.random()}/>

     ))}
    </RefactoredContent>
    <Example/>
    <StateC/>
    <br/>
    <ComplexState/>
    </>

  )
}

export default App

