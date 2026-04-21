import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useTheme } from '../contexts/ThemeContext';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false, null);
    navigate("/");
  };

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
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
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