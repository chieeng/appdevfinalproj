import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import Card from "../components/Card";
import cover3 from "../images/cover-3.png";

function Search() {

    // 🔹 STATE for sorting
    const [sortOrder, setSortOrder] = useState("");

    // 🔹 DATA
    const properties = [
        { id: 1, title: "Cozy Pines Boarding House", location: "Baguio City", price: 6500 },
        { id: 2, title: "City Comfort Residence", location: "Quezon City", price: 8000 },
        { id: 3, title: "Sampaguita Boarding Home", location: "Cebu City", price: 7000 },
        { id: 4, title: "UrbanNest Boarding House", location: "Davao City", price: 6800 },
        { id: 5, title: "Haven Home Residences", location: "Manila", price: 9000 },
        { id: 6, title: "Tranquil Stays Baguio", location: "Baguio City", price: 7500 }
    ];

    // 🔹 SORT LOGIC
    const sortedProperties = [...properties].sort((a, b) => {
        if (sortOrder === "low") return a.price - b.price;
        if (sortOrder === "high") return b.price - a.price;
        return 0;
    });

    return (
        <div className="search-page">

            {/* HEADER */}
            <div
                className="search-header"
                style={{ backgroundImage: `url(${cover3})` }}
            >
                <h1>Find Your Perfect Stay</h1>
                <p>Use filters to narrow down your search</p>
            </div>

            {/* SEARCH + FILTER */}
            <div className="search-controls">
                <SearchBar />
                <FilterPanel />
            </div>

            {/* RESULTS */}
            <div className="search-results">
                <h2>Search Results</h2>

                {/* 🔹 SORT DROPDOWN */}
                <div className="sort-price">
                <div style={{ marginBottom: "20px", marginRight: "20px" }}>
                    <label>Sort by Price: </label>
                    <select onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="">Default</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                </div>
                </div>

                {/* 🔹 DYNAMIC CARDS */}
                <div className="cards">
                    {sortedProperties.map((property) => (
                        <Card
                            key={property.id}
                            id={property.id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search;