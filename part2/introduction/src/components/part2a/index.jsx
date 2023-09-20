import FunctionalProgram from "../fucntionalProgram"
const Example = () => {
    const lists = [
        {
            id: 1,
            content: 'I am learning React',
            important: true
        },
        {
            id: 2,
            content: 'React is not a library',
            important: false
        },
        {
            id: 3, 
            content: 'You cannot learn React through Full Stack Open',
            important: false
        }
    ]
    return (
        <>
        <FunctionalProgram lists={lists}/>
        
        </>
    )
}


export default Example