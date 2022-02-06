import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Note({ id, text, date, deleteNote }) {

    const handleDeleteNote = () => {
        deleteNote(id);
    }

    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever 
                    className='delete-icon' 
                    size='1.3em' 
                    onClick={handleDeleteNote}
                />
            </div>
        </div>
    );
}

export default Note;
