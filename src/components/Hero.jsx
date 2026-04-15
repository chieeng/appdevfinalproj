import SearchBar from "./SearchBar";
import cover1 from "../images/cover-1.png";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${cover1})` }}>
      <div className="hero-overlay">
        <h1>Find Your Perfect Boarding House</h1>
        <p>Search by location and price to discover great places to stay.</p>
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;