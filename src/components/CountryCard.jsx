// CountryCard.js
export const CountryCard = ({ country }) => {
    return (
      <div className="country-card">
        <img src={country.flags.png} alt={country.name.common} className="country-flag" />
        <h3 className="country-name">{country.name.common}</h3>
        <p className="country-population">Population: {country.population}</p>
        <p className="country-region">Region: {country.region}</p>
        <p className="country-capital">Capital: {country.capital}</p>
      </div>
    );
  };
  