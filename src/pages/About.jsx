import React, { useState } from 'react';
import country from '../api/countryData.json';

export const About = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const sectionStyle = {
        padding: '4rem 0',
        textAlign: 'center',
        backgroundColor: 'black', // Matches the black background theme
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        background: 'linear-gradient(to right, #d3d3d3, #d3d3d3)', // Light grey gradient
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        animation: 'fadeIn 2s ease-in-out', // Adding fade-in effect for the title
    };

    const cardContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'fadeInUp 1s ease-in-out', // Smooth grid appearance animation
    };

    const cardStyle = (id) => ({
        backgroundColor: hoveredCard === id ? '5a5a5a' : '#3a3a3a', // Card color changes on hover to light grey
        borderRadius: '15px',
        boxShadow: hoveredCard === id
            ? '0 20px 30px rgba(211, 211, 211, 0.3)' // Light grey shadow
            : '0 10px 20px rgba(0, 0, 0, 0.3)', // Dynamic shadow
        transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, background-color 0.5s ease-in-out',
        padding: '2rem',
        color: 'white',
        textAlign: 'left',
        transform: hoveredCard === id ? 'scale(1.05)' : 'scale(1)', // Slight zoom effect on hover
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer', // Indicate card is interactive
    });

    const cardTitleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: hoveredCard ? '#000' : '#d3d3d3', // Light grey title color
    };

    const cardDescriptionStyle = {
        color: '#d3d3d3', // Light grey text for description
        fontWeight: 'bold',
    };

    const gradientStyle = {
        background: '#3a3a3a',
        padding: '1.5rem',
        borderRadius: '10px',
        zIndex: 2, // Ensures content remains above the overlay
        position: 'relative',
    };

    const cardAnimate = {
        animation: 'slideInUp 0.8s ease-in-out',
    };

    return (
        <section style={sectionStyle}>
            <h2 style={titleStyle}>
                Here are the Interesting Facts <br />
                we are proud of
            </h2>
            <div style={cardContainerStyle}>
                {country.map((data) => (
                    <div
                        key={data.id}
                        style={{ ...cardStyle(data.id), ...cardAnimate }}
                        onMouseEnter={() => setHoveredCard(data.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div style={gradientStyle}>
                            <p style={cardTitleStyle}>{data.countryName}</p>
                            <p>
                                <span style={cardDescriptionStyle}>Capital:</span> {data.capital}
                            </p>
                            <p>
                                <span style={cardDescriptionStyle}>Population:</span> {data.population}
                            </p>
                            <p>
                                <span style={cardDescriptionStyle}>Interesting Fact:</span> {data.interestingFact}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
