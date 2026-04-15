import { useState } from "react";
import Card from "../components/Card";
import FilterPanel from "../components/FilterPanel";

function Browse() {
  const [searchTerm, setSearchTerm] = useState("");

  // Generate 20 boarding houses
  const allListings = [
    { id: 1, title: "Cozy Pines Boarding House", location: "Baguio City", price: "6500" },
    { id: 2, title: "City Comfort Residence", location: "Quezon City", price: "8000" },
    { id: 3, title: "Sampaguita Boarding Home", location: "Cebu City", price: "7000" },
    { id: 4, title: "UrbanNest Boarding House", location: "Davao City", price: "6800" },
    { id: 5, title: "Haven Home Residences", location: "Manila", price: "9000" },
    { id: 6, title: "Tranquil Stays Baguio", location: "Baguio City", price: "7500" },
    { id: 7, title: "Metro View Apartments", location: "Makati", price: "8500" },
    { id: 8, title: "Student Haven", location: "Diliman", price: "5500" },
    { id: 9, title: "Sunset Plaza", location: "Pasay", price: "7200" },
    { id: 10, title: "Garden House", location: "Antipolo", price: "6000" },
    { id: 11, title: "Sky Tower Dorm", location: "BGC", price: "9500" },
    { id: 12, title: "Riverside Lodge", location: "Cubao", price: "6800" },
    { id: 13, title: "Heritage Home", location: "Intramuros", price: "7800" },
    { id: 14, title: "Peace Villa", location: "Tagaytay", price: "6200" },
    { id: 15, title: "Golden Gate Rooms", location: "Paranaque", price: "8200" },
    { id: 16, title: "Sunrise Boarding", location: "Las Piñas", price: "5800" },
    { id: 17, title: "Modern Stay", location: "Taguig", price: "8800" },
    { id: 18, title: "Family Rooms", location: "Caloocan", price: "5900" },
    { id: 19, title: "Premium Lodge", location: "Mandaluyong", price: "9200" },
    { id: 20, title: "Comfort Inn", location: "Valenzuela", price: "6400" }
  ];

  const filteredListings = allListings.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-page">
      <div className="browse-header">
        <h1>Browse Available Listings</h1>
        <p>Discover {filteredListings.length} board rooms across the Philippines</p>
      </div>

      <div className="container">
        <div className="browse-controls">
          <input 
            type="text" 
            placeholder="Search by title or location..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FilterPanel />
        </div>

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
