import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar({ isLoggedIn }) {
  return (
    <div className="navbar">
      <div className="container navbar-inner">

        <div className="logo">
          <img src={logo} alt="VacanSee Logo" className="logo-img" />
          <span>VacanSee</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
        </ul>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <button className="logout-btn">Logout</button>
          ) : (
            <>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/register"><button>Register</button></Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default Navbar;