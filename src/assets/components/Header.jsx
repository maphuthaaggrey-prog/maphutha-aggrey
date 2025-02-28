
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="navbar">
                
                <nav >
                <div>
                    <a href="https://maphuthaaggrey-prog.github.io/maphutha-aggrey/"><p className="logo">aggrey</p></a>
                </div>
                    <ul className={menuOpen ? "nav ul open" : ""}>
                        <li>
                            <button className="close-btn menu-close" onClick={toggleMenu}>
                                <svg width="26px" height="26px" viewBox="-0.5 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <g strokeWidth="0"/>
                                    <g strokeLinecap="round" strokeLinejoin="round"/>
                                    <g> 
                                        <path d="M3 21.32L21 3.32001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" /> 
                                        <path d="M3 3.32001L21 21.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" /> 
                                    </g>
                                </svg>
                            </button>
                        </li>
                        <li onClick={toggleMenu}><a href="#Hero">Home</a></li>
                        <li onClick={toggleMenu}><a href="#About">About</a></li>
                        <li onClick={toggleMenu}><a href="#Projects">Projects</a></li>
                        <li onClick={toggleMenu}><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
               
                    <button className="menu-icon" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" fill="currentColor" />
                        </svg>
                    </button>
                
            </div>
        </>
    );
};

export default Header;
