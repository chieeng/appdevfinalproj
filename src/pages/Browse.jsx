import { useState } from "react";
import Card from "../components/Card";
import cover2 from "../images/cover-2.png";

function Browse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const allListings = [
    { id: 1, title: "Cozy Pines Boarding House", location: "Baguio City", price: 6500 },
    { id: 2, title: "City Comfort Residence", location: "Quezon City", price: 8000 },
    { id: 3, title: "Sampaguita Boarding Home", location: "Cebu City", price: 7000 },
    { id: 4, title: "UrbanNest Boarding House", location: "Davao City", price: 6800 },
    { id: 5, title: "Haven Home Residences", location: "Manila", price: 9000 },
    { id: 6, title: "Tranquil Stays Baguio", location: "Baguio City", price: 7500 },
    { id: 7, title: "Metro View Apartments", location: "Makati", price: 8500 },
    { id: 8, title: "Student Haven", location: "Diliman", price: 5500 },
    { id: 9, title: "Sunset Plaza", location: "Pasay", price: 7200 },
    { id: 10, title: "Garden House", location: "Antipolo", price: 6000 },
    { id: 11, title: "Sky Tower Dorm", location: "BGC", price: 9500 },
    { id: 12, title: "Riverside Lodge", location: "Cubao", price: 6800 },
    { id: 13, title: "Heritage Home", location: "Intramuros", price: 7800 },
    { id: 14, title: "Peace Villa", location: "Tagaytay", price: 6200 },
    { id: 15, title: "Golden Gate Rooms", location: "Paranaque", price: 8200 },
    { id: 16, title: "Sunrise Boarding", location: "Las Piñas", price: 5800 },
    { id: 17, title: "Modern Stay", location: "Taguig", price: 8800 },
    { id: 18, title: "Family Rooms", location: "Caloocan", price: 5900 },
    { id: 19, title: "Premium Lodge", location: "Mandaluyong", price: 9200 },
    { id: 20, title: "Comfort Inn", location: "Valenzuela", price: 6400 }
  ];

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