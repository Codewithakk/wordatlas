import React from 'react';

export const Contact = () => {
    return (
        <div style={styles.contactPage}>
            <h1 style={styles.contactTitle}>Get in Touch</h1>
            <p style={styles.contactSubtitle}>
                We would love to hear from you. Please fill out the form below to reach out to us!
            </p>
            <form style={styles.contactForm}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        style={styles.contactInput}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        style={styles.contactInput}
                        required
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Message</label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        style={styles.contactTextarea}
                        required
                    />
                </div>
                <button type="submit" style={styles.contactButton}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

// Inline styles for Contact component
const styles = {
    contactPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1rem',
        backgroundColor: '#121212',
        minHeight: '100vh',
        color: 'white',
    },
    contactTitle: {
        fontSize: '3rem',
        color: 'white',
        marginBottom: '1rem',
        textAlign: 'center',
    },
    contactSubtitle: {
        fontSize: '1.2rem',
        color: '#d3d3d3',
        marginBottom: '2rem',
        maxWidth: '800px',
        textAlign: 'center',
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '600px',
    },
    inputGroup: {
        marginBottom: '1.5rem',
    },
    label: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
        display: 'block',
        color: 'white',
    },
    contactInput: {
        width: '100%',
        padding: '1rem',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#333',
        color: 'white',
        fontSize: '1.1rem',
        outline: 'none',
    },
    contactTextarea: {
        width: '100%',
        padding: '1rem',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#333',
        color: 'white',
        fontSize: '1.1rem',
        height: '150px',
        outline: 'none',
    },
    contactButton: {
        padding: '0.75rem 2rem',
        borderRadius: '50px',
        border: 'none',
        backgroundImage: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out',
    },
    contactButtonHover: {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(255, 255, 255, 0.2)',
    },
};
