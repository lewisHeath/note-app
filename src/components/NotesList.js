import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

function NotesList({ notes, handleAddNote, deleteNote }) {
  return (
        <div className='notes-list'>
            {notes.map(note => (
                <Note id={note.id} text={note.text} date={note.date} deleteNote={deleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
}

export default NotesList;