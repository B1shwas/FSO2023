import React from 'react'

  const Index = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
   console.log("Hello from component")
  return (
    //This component will render the Hello World
    <>
    <p>Hello World, it is {now.toString()} <br/> {a} + {b} is {a + b}</p>
    </>
  )
}

 export const Hello = (props) => {
   console.log(props)
   const friends = [
    {
      name: 'Ram',
      age: 15       
    },
    {
      name: 'Hari',
      age: 16
    }
   ]
  return(
     <>
     <div>
       <p>Hello, {props.name}! You are {props.age} years old. </p>
       <p>{friends[1].name} is not {friends[0].age} years old.</p>
     </div>
    </>
   )
 }
 
  export default Index