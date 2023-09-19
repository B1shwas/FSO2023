import React from "react";

const Total = ({parts}) => {
    const TotalExercise = parts.reduce((sum,part)=>sum + part.exercise,0);
    return (
        <>
        <p> Total numbers of exercise: {TotalExercise} </p> 
        </>
    )
}
export default Total