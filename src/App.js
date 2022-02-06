import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

function App() {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "this is my first note",
            date: "06/02/22"
        },
        {
            id: nanoid(),
            text: "this is my second note",
            date: "06/02/22"
        },
        {
            id: nanoid(),
            text: "this is my third note",
            date: "06/02/22"
        },
        {
            id: nanoid(),
            text: "this is my fourth note",
            date: "06/02/22"
        },
    ]);

    const addNote = (text) => {
        //make into note object
        const newNote = {
            id: nanoid(),
            text: text,
            date: new Date().toLocaleDateString()
        }
        setNotes([...notes, newNote]);
        console.log(newNote);
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    return (
        <div className="container">
            <NotesList notes={notes} handleAddNote={addNote} deleteNote={deleteNote} />
        </div>
    );
}

export default App;
