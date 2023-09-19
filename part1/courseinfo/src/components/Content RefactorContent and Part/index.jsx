import React from "react";

const Content = ({part,exercise}) => {
    return(
        <>
        <p>{part} - {exercise}</p>
        
        </>
    )
}

const RefactoredContent = (props) => {
    return(
        <>
        {props.children}
        </>
    )

}

const Part = ({part, exercise}) => {
    return(
        <>
        <p>{part} - {exercise}</p>
        </>
    )
}

export  {Content, RefactoredContent, Part}

