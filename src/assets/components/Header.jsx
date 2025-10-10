import cv from '../Data/MAPHUTHA Current CV.pdf'
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClick = (section) => {
        setActiveSection(section);
        toggleMenu();
    };

    const handleDownloadClick = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const confirmDownload = () => {
        window.open(cv, '_blank');
        setShowPopup(false);
    };

    const cancelDownload = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="navbar">
                <nav>
                    <div>
                        <a href="https://maphuthaaggrey-prog.github.io/maphutha-aggrey/">
                            <p className="logo">aggrey</p>
                        </a>
                    </div>
                    <ul className={menuOpen ? "nav ul open" : ""}>
                        <li>
                            <button className="close-btn menu-close" onClick={toggleMenu}>
                                <svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"/></svg>
                            </button>
                        </li>
                        <li
                            onClick={() => handleClick("biography")}
                            className={activeSection === "biography" ? "active" : ""}
                        >
                            <a href="#biography">Biography</a>
                        </li>
                        <li
                            onClick={() => handleClick("featuredprojects")}
                            className={activeSection === "featuredprojects" ? "active" : ""}
                        >
                            <a href="#featuredprojects">Featured Projects</a>
                        </li>
                        <li
                            onClick={() => handleClick("technicalskills")}
                            className={activeSection === "technicalskills" ? "active" : ""}
                        >
                            <a href="#technicalskills">Technical Skills</a>
                        </li>
                        <li
                            onClick={() => handleClick("contact")}
                            className={activeSection === "contact" ? "active" : ""}
                        >
                            <a href="#contact">Contact</a>
                        </li>
                        <li onClick={toggleMenu}>
                            <a 
                                href={cv} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                download 
                                className='contact-list'
                                onClick={handleDownloadClick}
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className="menu-icon" onClick={toggleMenu}>
                    <svg width="44px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Menu / Menu_Alt_02">
                            <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </button>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h1>Confirmation</h1>
                        <p>Are you sure want to download Maphutha Aggrey's CV?</p>
                        <div className="popup-buttons">
                            <button onClick={confirmDownload} className="yes-btn">Yes</button>
                            <button onClick={cancelDownload} className="no-btn">No</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
