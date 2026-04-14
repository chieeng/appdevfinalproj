import Hero from "../components/Hero";
import Card from "../components/Card";

function Home() {
  return (
    <div>

      <Hero />

      <div className="container featured">
        <h2>Featured Boarding Houses</h2>

        <div className="cards">
          <Card id={1} title="Cozy Pines Boarding House" location="Baguio City" price="6500" />
          <Card id={2} title="City Comfort Residence" location="Quezon City" price="8000" />
          <Card id={3} title="Sampaguita Boarding Home" location="Cebu City" price="7000" />
          <Card id={4} title="UrbanNest Boarding House" location="Davao City" price="6800" />
          <Card id={5} title="Haven Home Residences" location="Manila" price="9000" />
          <Card id={6} title="Tranquil Stays Baguio" location="Baguio City" price="7500" />
        </div>

      </div>

    </div>
  );
}

export default Home;