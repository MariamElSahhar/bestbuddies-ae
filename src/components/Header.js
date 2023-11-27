import React from 'react';
import '../styles/header.css';

function Header ({page}) {
    return (
        <header className='page-header'>
            <h1 className='header-text'>{page}</h1>
        </header>
    );
}

export default Header;