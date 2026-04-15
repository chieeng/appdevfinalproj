import cover2 from "../images/cover-2.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-header" style={{ backgroundImage: `url(${cover2})` }}>
        <h1>About VacanSee</h1>
        <p>Your trusted platform for finding and booking comfortable stays.</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          VacanSee aims to simplify the process of discovering and booking
          boarding houses and vacation stays. We provide a user-friendly
          platform where users can easily browse listings, check availability,
          and make reservations with confidence.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>✔ Easy browsing of available properties</li>
          <li>✔ Simple and intuitive booking system</li>
          <li>✔ Clean and responsive user interface</li>
          <li>✔ Dashboard for managing bookings</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Technology Used</h2>
        <p>
          This application is built using modern web technologies including
          React.js for the frontend, ensuring a fast and responsive user
          experience.
        </p>
      </div>

      <div className="about-footer">
        <p><strong>Developed by:</strong> Jian Brenz C. Becera</p>
        <p><strong>Course:</strong> BSIT-3</p>
      </div>
    </div>
  );
}

export default About;