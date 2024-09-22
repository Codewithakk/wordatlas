import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <NavLink to='/'>
                            <img src="/images/logo.png" height='60' width='180' alt="WorldAtlas" />
                        </NavLink>
                    </div>
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                        ☰
                    </button>
                    <nav className={`nav ${isOpen ? 'open' : ''}`}>
                        <ul className="nav-links">
                            <li><NavLink to='/' className="nav-item">Home</NavLink></li>
                            <li><NavLink to='/about' className="nav-item">About</NavLink></li>
                            <li><NavLink to='/country' className="nav-item">Country</NavLink></li>
                            <li><NavLink to='/contact' className="nav-item">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
