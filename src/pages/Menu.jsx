import { Link } from "react-router-dom";
import cover1 from "../images/cover-1.png";

function Menu() {
  const menuItems = [
    {
      id: 1,
      title: "Browse Listings",
      description: "Explore all available boarding houses across the Philippines",
      icon: "🏠",
      link: "/browse",
      color: "#14b8a6"
    },
    {
      id: 2,
      title: "Conversations",
      description: "View your message history with property owners",
      icon: "💬",
      link: "/conversations",
      color: "#3b82f6"
    },
    {
      id: 3,
      title: "About",
      description: "Learn more about VacanSee and our mission",
      icon: "ℹ️",
      link: "/about",
      color: "#06b6d4"
    },
    {
      id: 4,
      title: "Dashboard",
      description: "View your bookings and account statistics",
      icon: "📊",
      link: "/dashboard",
      color: "#0891b2"
    }
  ];

  return (
    <div className="menu-page" style={{ backgroundImage: `url(${cover1})` }}>
      <div className="menu-hero">
        <p>Manage your boarding house search with ease</p>
      </div>

      <div className="container">
        <div className="menu-grid">
          {menuItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.link} 
              className="menu-card"
              style={{ borderTopColor: item.color }}
            >
              <div className="menu-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="menu-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;