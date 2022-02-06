import React from 'react';
import { useState } from 'react';

function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = React.useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(event.target.value.length <= characterLimit) {
            setNoteText(event.target.value);
            console.log(event.target.value);
        }
    };

    const handleSaveClick = () => {
        console.log('save clicked');
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className="note new">
            <textarea 
                rows="8"
                cols="10" 
                placeholder='Type to add a note...' 
                onChange={handleChange} 
                value={noteText}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;
