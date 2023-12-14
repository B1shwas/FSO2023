import {useState, useEffect} from "react"
import Note from "./note"
import axios from 'axios'
import noteService from '../services/notes'

const Page = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setshowAll] = useState(true)

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
          })
      }, [])

    const addNote = event => {
        event.preventDefault()
        const noteObject = {
          content: newNote,
          important: Math.random() < 0.5,
        }
      
      
        noteService
          .create(noteObject)
          .then(returnedNotes => {
            console.log(response.data)
            setNotes(notes.concat(returnedNotes))
            setNewNote('')
          })
      }

    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

    const handleChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }
      
        noteService
         .update(id, changedNote)
         .then(returnedNotes => {
           setNotes(notes.map(n => n.id !== id ? n : returnedNotes))
        })
        .catch(error => {
          alert(
            `The note '${note.content}' was already deleted from the server`
          )
          setNotes(notes.filter(n => n.id != id))
        })
      }
    return(
        <>
        <h1>Notes</h1>
        <div>
            <button onClick={() => setshowAll(!showAll)}>show {showAll ? 'important' : 'all' }</button>
        </div>
        <ul>
            {notesToShow.map(note => 
                <Note
                 key = {note.id}
                 note={note}
                 toggleImportance={() => toggleImportanceOf(note.id)}
                />
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