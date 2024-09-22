import { useEffect, useState, useTransition } from "react";
import { getcountryData } from "../api/postapi";
import { Loader } from "../api/Loader";
import { CountryCard } from "../components/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");
  const [countriesPerPage, setCountriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    startTransition(async () => {
      const res = await getcountryData();
      setCountries(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "name") {
        return a.name.common.localeCompare(b.name.common);
      } else if (sortOrder === "population") {
        return b.population - a.population;
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <div className="search-sort-controls">
        <input
          type="text"
          placeholder="Search by country name..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <select value={sortOrder} onChange={handleSortChange} className="sort-dropdown">
          <option value="name">Sort by Name</option>
          <option value="population">Sort by Population</option>
        </select>
        <select
          value={countriesPerPage}
          onChange={(e) => setCountriesPerPage(Number(e.target.value))}
          className="page-size-dropdown"
        >
          <option value={12}>12 countries per page</option>
          <option value={24}>24 countries per page</option>
          <option value={36}>36countries per page</option>
        </select>
      </div>

      <ul className="grid grid-four-cols">
        {currentCountries.map((curcountry, index) => (
          <CountryCard country={curcountry} key={index} />
        ))}
      </ul>

      <div className="pagination-controls">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </section>
  );
};
