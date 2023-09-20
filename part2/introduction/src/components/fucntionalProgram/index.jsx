import Note from "../notes"
const FunctionalProgram = (props) => {
    const {lists} = props
    const mapMethod = (data) => {
        console.log(data)
        console.log(data.id)
        return(
        <Note key={data.id} data={data}/>
        )
    }
    return(
        <>
        <h1>Notes</h1>
        <ul>
            {lists.map(mapMethod)} 
            {/* Can be Written like {lists.map(data => <li key={data.id}>{data.content}</li>)} */}
        </ul>
        
        </>
    )

}
export default FunctionalProgram