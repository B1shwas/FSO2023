import Part from "./part"
import Total from "./total"

const Content = ({course}) => {
    return (
        <>
        {course.parts.map((data) => 
        <Part key={data.id} data={data}/>
        )}
        <Total course={course}/>

        </>
    )
}
export default Content