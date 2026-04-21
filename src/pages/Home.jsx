import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {

  // 🔹 STATE for sorting
  const [sortOrder, setSortOrder] = useState("");

  // 🔹 PROPERTIES DATA
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

  const stats = [
    { number: "1000+", label: "Happy Tenants" },
    { number: "500+", label: "Properties" },
    { number: "50+", label: "Cities" },
    { number: "4.9★", label: "Average Rating" }
  ];

  const steps = [
    {
      number: "01",
      title: "Search",
      description: "Browse through hundreds of verified boarding houses in your preferred location"
    },
    {
      number: "02",
      title: "Filter",
      description: "Use advanced filters to find properties matching your budget and preferences"
    },
    {
      number: "03",
      title: "Inquire",
      description: "Connect directly with property owners to ask questions and arrange viewings"
    },
    {
      number: "04",
      title: "Book",
      description: "Secure your booking with our safe and transparent booking system"
    }
  ];

  return (
      <div>
        <Hero />

        {/* STATS SECTION */}
        <div className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED SECTION */}
        <div className="container featured">
          <div className="section-header">
            <h2>Featured Boarding Houses</h2>
            <p>Discover the most popular and highly-rated properties</p>
          </div>

          {/* 🔹 PRICE FILTER */}
          <div style={{ marginBottom: "20px" }}>
            <label>Sort by Price: </label>
            <select onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">Default</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
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

          <div className="view-all-btn">
            <Link to="/search">View All Properties →</Link>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2>How VacanSee Works</h2>
              <p>Simple steps to find your perfect boarding house</p>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => (
                  <div key={index} className="step-card">
                    <div className="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="cta-section">
          <div className="container">
            <h2>Ready to Find Your Perfect Stay?</h2>
            <p>Join thousands of happy tenants who found their boarding houses on VacanSee</p>
            <div className="cta-buttons">
              <Link to="/search" className="cta-btn primary">Search Now</Link>
              <Link to="/contact" className="cta-btn secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;