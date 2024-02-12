import React from 'react';
import mlsaLogo from './assets/download.jpeg';
import cskLogo from './assets/cskLogo.jpg';

function Header(){


    return(
        <header>
            <h1 className='logo-title'>Microsoft Learn Student Ambassadors</h1>
            <img className = "logo-image" src={mlsaLogo} alt="mlsaLogo" />
            <img className = "logo-image" src={cskLogo} alt="cskLogo" />
        </header>
    );
}

export default Header