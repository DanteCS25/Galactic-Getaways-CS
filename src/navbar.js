import React, { useState } from 'react';
import './navbar.css'; // Import CSS file for styling
import logo from './content/Logo.png'; // Import logo image

const Navbar = () => {
    const [selectedNavItem, setSelectedNavItem] = useState(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const handleNavItemClick = (index) => {
        setSelectedNavItem(index);
    };

    const handleMobileNavToggle = () => {
        setMobileNavOpen(!mobileNavOpen);
    }
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className={`nav-link ${selectedNavItem === 0 ? 'selected' : ''}`} onClick={() => handleNavItemClick(0)}>Home</a>
                </li>
                <li className="nav-item">
                    <a href="#Selector" className={`nav-link ${selectedNavItem === 1 ? 'selected' : ''}`} onClick={() => handleNavItemClick(1)}>About</a>
                </li>
            </ul>
            <button className='nav_button'><a href='#ComingSoon' style={{textDecoration: 'none', color: 'white'}}>Get the app</a></button>
        </nav>
    );
};

export default Navbar;
