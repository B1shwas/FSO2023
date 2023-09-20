import Header from "./header"
import Content from "./content"

const Wrapper = ({ course }) => {
    const heading = 'Web development curriculum'
  return (
    <>
    <h1>{heading}</h1>
      {course.map((data) => (
        <div key={data.id}>
          <Header course={data} />
          <Content course={data} />
        </div>
      ))}
    </>
  )
}

export default Wrapper