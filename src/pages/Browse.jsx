import { useState } from "react";
import Card from "../components/Card";
import cover2 from "../images/cover-2.png";
import { allListings } from "../data/listings";

function Browse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  // SEARCH FILTER
  let filteredListings = allListings.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // PRICE SORT
  if (sortPrice === "low-high") {
    filteredListings.sort((a, b) => a.price - b.price);
  }

  if (sortPrice === "high-low") {
    filteredListings.sort((a, b) => b.price - a.price);
  }

  return (
      <div className="browse-page">

        <div className="browse-header" style={{ backgroundImage: `url(${cover2})` }}>
          <h1>Browse Available Listings</h1>
          <p>Discover {filteredListings.length} board rooms across the Philippines</p>
        </div>

        <div className="container">

          {/* CONTROLS */}
          <div className="browse-controls">

            {/* SEARCH ONLY */}
            <input
                type="text"
                placeholder="Search by title or location..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* PRICE SORT ONLY */}
            <select
                className="search-input"
                value={sortPrice}
                onChange={(e) => setSortPrice(e.target.value)}
            >
              <option value="">Sort by Price</option>
              <option value="low-high">Low → High</option>
              <option value="high-low">High → Low</option>
            </select>

          </div>

          {/* CARDS */}
          <div className="cards">
            {filteredListings.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    location={item.location}
                    price={item.price}
                />
            ))}
          </div>

          {/* NO RESULTS */}
          {filteredListings.length === 0 && (
              <div className="no-results">
                <p>No properties found matching your search.</p>
              </div>
          )}

        </div>
      </div>
  );
}

export default Browse;