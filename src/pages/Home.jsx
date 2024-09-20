import { FaLongArrowAltRight } from 'react-icons/fa';

export const Home = () => {
    return (
        <main style={styles.heroSection}>
            <div style={styles.container}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heading}>Explore the World, one country at a time</h1>
                    <p style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem qui doloremque aliquam doloribus at dicta commodi ratione velit laudantium omnis, ad facere quibusdam praesentium quis est vel? Quam, velit amet?
                    </p>   
                    <button style={styles.button}>
                        Start Exploring <FaLongArrowAltRight style={styles.icon} />
                    </button>     
                </div>
                <div style={styles.heroImageContainer}>
                    <img 
                        src="https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856347-stock-photo-travel-the-world-monument-concept.jpg" 
                        alt="World is Beautiful" 
                        style={styles.bannerImage} 
                    />
                </div>
            </div>
        </main>
    );
};

// Inline styles for Home component
const styles = {
    heroSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: 'white',
        padding: '3rem 1rem',
        textAlign: 'center',
        overflow: 'hidden',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '2rem',
        maxWidth: '1200px',
        width: '100%',
    },
    heroContent: {
        maxWidth: '600px',
    },
    heading: {
        fontSize: '3.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: '#ff7e5f',
        animation: 'fadeIn 1.5s ease-in-out',
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#d3d3d3',
        marginBottom: '2rem',
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.75rem 2rem',
        fontSize: '1.2rem',
        backgroundColor: '#ff7e5f',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    icon: {
        marginLeft: '10px',
        transition: 'transform 0.2s ease-in-out',
    },
    buttonHover: {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(255, 126, 95, 0.5)',
    },
    heroImageContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    bannerImage: {
        width: '100%',
        maxHeight: '500px',
        borderRadius: '20px',
        objectFit: 'cover',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.5s ease-in-out',
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(-10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
};
