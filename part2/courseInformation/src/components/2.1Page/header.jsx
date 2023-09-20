const Header = (props) => {
    const {course} = props

    return (
        <h3>{course.name}</h3>
    )
}
export default Header