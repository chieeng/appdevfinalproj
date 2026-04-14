import SearchBar from "./SearchBar";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>Find Your Perfect Boarding House</h1>
        <p>Search by location and price to discover great places to stay.</p>

        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;