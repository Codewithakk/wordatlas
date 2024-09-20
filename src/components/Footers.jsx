export const Footer = () => {
    return (
        <footer style={darkFooterStyles.footerContainer}>
            <p style={darkFooterStyles.footerText}>© 2024 Your Company. All Rights Reserved.</p>
            <img src="./public/images/logo.png" height='20px' width='50px' alt="logo" />
        </footer>
    );
};

const darkFooterStyles = {
    footerContainer: {
        background: '#333333',  // Dark grey background for footer
        padding: '0.5rem',
        textAlign: 'center',
        color: '#ffffff',  // White text for footer
        animation: 'fadeInUp 1.5s ease-in-out',
    },
    footerText: {
        fontSize: '1rem',
        margin: 0,
        padding:'0 0 0.5rem 0'
        
    },
};
