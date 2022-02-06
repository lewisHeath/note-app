import Search from './components/Search';
import NotesList from './components/NotesList';
import Header from './components/Header';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

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

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

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
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <NotesList 
                    notes={
                        notes.filter((note) => 
                            note.text.toLowerCase().includes(searchText.toLowerCase())
                        )}
                    handleAddNote={addNote} 
                    deleteNote={deleteNote} 
                />
            </div>
        </div>
    );
}

export default App;
