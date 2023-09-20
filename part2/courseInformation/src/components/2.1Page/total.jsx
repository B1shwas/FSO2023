const Total = ({course}) => {

    const total = course.parts.reduce((total,newVal) =>  total + newVal.exercises,0)
    return (
        <>
         <p style={{fontWeight:'bold'}}>total of {total} exercises</p>
        </>
    )
}
export default Total