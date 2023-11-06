import {useState} from "react"
import Note from "./note"

const Page = () => {

    const [notes, setNotes] = useState([
        {
        id:1,
        content:'HTML is easy'
        },
        {
        id:2,
        content:'Browser can execute only JavaScript'
        },
        {
        id:3,
        content:'GET and POST are the most import methods of HTTP protocol'
        }
    ])

    const [newNote, setNewNote] = useState('a new note...')

    const [showAll, setshowAll] = useState(true)



    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random()< 0.5,
            id: notes.length + 1,
        }
        setNotes(notes.concat(noteObject))
        setNewNote('')

        //  This below code also add the newNote 

        // const newNote = [...notes]
        // newNote.push({
        //     id:Date.now(),
        //     content:event.target.note.value
        // })
        // setNotes(newNote)
        event.target.note.value = ''
        console.log('button clicked', event.target.note.value)
    }

    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

    const handleChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    return(
        <>
        <h1>Notes</h1>
        <div>
            <button onClick={() => setshowAll(!showAll)}>show {showAll ? 'important' : 'all' }</button>
        </div>
        <ul>
            {notesToShow.map(note => 
                <Note key = {note.id} note={note.content}/>
                )}
        </ul>
        <form onSubmit={addNote}>
            <input name="note" value={newNote}
            onChange={handleChange} />
            <button type="submit">Save</button>
        </form>
        </>
    )
}
export default Page