import React, { useState } from 'react';
import country from '../api/countryData.json';

export const About = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    // Filter countries based on the search term
    const filteredCountries = country.filter((data) =>
        data.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate total pages
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    // Get current countries for the page
    const currentCountries = filteredCountries.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const sectionStyle = {
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#202020',
        color: '#ffffff', // Light text for contrast
    };

    const titleStyle = {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#d3d3d3',
    };

    const searchInputStyle = {
        padding: '0.5rem',
        marginBottom: '1rem',
        width: '80%',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#333',
        color: '#ffffff',
    };

    const cardContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginBottom: '1rem',
    };

    const cardStyle = (isHovered) => ({
        backgroundColor: isHovered ? '#444' : '#333', // Darker background for cards
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '1rem',
        transition: 'transform 0.3s, background-color 0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        cursor: 'pointer',
        overflow: 'hidden',
    });

    const cardTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#ffffff',
    };

    const cardDescriptionStyle = {
        color: '#d3d3d3',
    };

    const paginationStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
    };

    const buttonStyle = {
        backgroundColor: '#ff7e5f',
        color: '#282c34',
        border: 'none',
        padding: '0.5rem 1rem',
        margin: '0 0.5rem',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const disabledButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#ccc',
        cursor: 'not-allowed',
    };

    const pageInfoStyle = {
        margin: '0 1rem',
        fontWeight: 'bold',
    };

    return (
        <section style={sectionStyle}>
            <h2 style={titleStyle}>
                Here are the Interesting Facts <br />
                we are proud of
            </h2>
            <input
                type="text"
                placeholder="Search for a country..."
                style={searchInputStyle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div style={cardContainerStyle}>
                {currentCountries.map((data) => (
                    <div
                        key={data.id}
                        style={cardStyle(hoveredCard === data.id)}
                        onMouseEnter={() => setHoveredCard(data.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <p style={cardTitleStyle}>{data.countryName}</p>
                        <p style={cardDescriptionStyle}>
                            <strong>Capital:</strong> {data.capital}
                        </p>
                        <p style={cardDescriptionStyle}>
                            <strong>Population:</strong> {data.population}
                        </p>
                        <p style={cardDescriptionStyle}>
                            <strong>Interesting Fact:</strong> {data.interestingFact}
                        </p>
                    </div>
                ))}
            </div>
            <div style={paginationStyle}>
                <button 
                    style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span style={pageInfoStyle}>Page {currentPage} of {totalPages}</span>
                <button 
                    style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </section>
    );
};
