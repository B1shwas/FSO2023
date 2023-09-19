import React, {useState} from "react";

const StateC = () => {
    const [counter, setCounter ] = useState(0)
    const incrementByOne = () => setCounter(counter + 1)
    const setZero = () => setCounter(0)
    const decrementByOne = () => setCounter(counter - 1)


    //  setTimeout(() => {
    //     setCounter(counter + 2)
    //     console.log('rendering..',counter)
    // }, 1000);
    
    return (
        <>
        <Display counter = {counter}/>
        <Button handleClick={decrementByOne} text='-1'/>
        <Button handleClick={setZero} text='0'/>
        <Button handleClick={incrementByOne} text='+1'/>
        </>
    )


}
const Display = ({counter}) => {
    return (
        <p>{counter}</p>
    )
}

const Button = ({handleClick,text}) => {
    return(
       <button onClick={handleClick}>{text}</button>
    )
}

export default StateC
