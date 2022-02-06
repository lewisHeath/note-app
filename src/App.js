import Search from './components/Search';
import NotesList from './components/NotesList';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
    const [notes, setNotes] = useState([]);

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        if(savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes)); 
    }, [notes])

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
                <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
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
