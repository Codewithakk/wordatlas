import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer-container">
            <p className="footer-text">© 2024 WordAtlas. All Rights Reserved.</p>
            <img src="/images/logo.png" height='20px' width='50px' alt="logo" />
            <div className="icon-container">
                <a href="https://github.com/Codewithakk" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/akshay-kumar-singh-bba370247/" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://leetcode.com/u/Akshay_2002/" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <img src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" alt="" height='25px' width='25px' />
                </a>
            </div>
        </footer>
    );
};
