import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Header({ handleToggleDarkMode, darkMode }) {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <DarkModeSwitch
                onChange={handleToggleDarkMode}
                checked={darkMode}
            />
        </div>
    )
}

export default Header;
