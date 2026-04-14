import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const VALID_EMAIL = "eragritchiegg@gmail.com";

  const handleLogin = () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    
    if (email.toLowerCase() === VALID_EMAIL.toLowerCase()) {
      setIsLoggedIn(true);
      setError("");
      navigate("/menu");
    } else {
      setError("Invalid email. Please use: eragritchiegg@gmail.com");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="auth-page">

      {/* CENTER CARD */}
      <div className="auth-container">
        <div className="auth-card">

          <h3>Welcome Back</h3>
          <p className="subtitle">
            Log in to access your bookings and manage properties
          </p>

          {/* SOCIAL BUTTONS */}
          <button className="social google">Log in with Google</button>
          <button className="social facebook">Log in with Facebook</button>
          <button className="social apple">Log in with Apple</button>

          <div className="divider">or</div>

          {/* INPUT */}
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          {error && <p className="error-message">{error}</p>}

          <button className="btn-continue" onClick={handleLogin}>
            Continue
          </button>

          <p className="other">
            Don't have an account? <Link to="/register" className="link">Sign up</Link>
          </p>

          {/* DEMO HINT */}
          <p className="demo-hint">Demo: eragritchiegg@gmail.com</p>

        </div>
      </div>

      {/* FOOTER */}
      <div className="auth-footer">
        <div>
          <h4>CUSTOMER SERVICE</h4>
          <p>Help Center</p>
          <p>Booking Guide</p>
          <p>Payment Methods</p>
        </div>

        <div>
          <h4>ABOUT VACANSEE</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Policies</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>
      </div>

    </div>
  );
}

export default Login;