import React from 'react';


function Footer(){

    return(
        <footer className="footer">
            <a href="https://example.com">
            <p>&copy; {new Date().getFullYear()} happycoding! Be a force for good! &copy;</p>
            </a>
        </footer>
    );
}

export default Footer