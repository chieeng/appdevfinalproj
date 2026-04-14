import { Link } from "react-router-dom";

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <div className="container navbar-inner">

        <div className="logo">VacanSee</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* SHOW ONLY IF LOGGED IN */}
          {isLoggedIn && (
            <li><Link to="/dashboard">Dashboard</Link></li>
          )}
        </ul>

        <div className="auth-buttons">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;