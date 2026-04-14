import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      {/* CENTER CARD */}
      <div className="auth-container">
        <div className="auth-card">

          <h3>Log in or create an account</h3>
          <p className="subtitle">
            Log in or sign up to access amazing features!
          </p>

          {/* SOCIAL BUTTONS */}
          <button className="social google">Log in with Google</button>
          <button className="social facebook">Log in with Facebook</button>
          <button className="social apple">Log in with Apple</button>

          <div className="divider">or</div>

          {/* INPUT */}
          <input type="email" placeholder="Email" />

          <button className="btn-continue" onClick={handleLogin}>
            Continue
          </button>

          <p className="other">Other ways to log in</p>

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