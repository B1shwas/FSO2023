import React from "react"
import Index from "./components/helloWorld"
import {Hello} from "./components/helloWorld"
function App() {
  const name = 'Peter'
  const age = 10
  const friends = [ 'Peter', 'Maya']

  return (
    <>
    <Index/>
    <Hello name='George' age={10+2}/>
    <Hello name={name} age={age}/>
    <p>{friends}</p>
    </>
  )
}

export default App
