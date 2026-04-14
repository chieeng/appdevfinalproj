import { Link } from "react-router-dom";

function Menu() {
  const menuItems = [
    {
      id: 1,
      title: "Browse Listings",
      description: "Explore all available boarding houses across the Philippines",
      icon: "🏠",
      link: "/browse",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Conversations",
      description: "View your message history with property owners",
      icon: "💬",
      link: "/conversations",
      color: "#764ba2"
    },
    {
      id: 3,
      title: "About",
      description: "Learn more about VacanSee and our mission",
      icon: "ℹ️",
      link: "/about",
      color: "#f093fb"
    },
    {
      id: 4,
      title: "Dashboard",
      description: "View your bookings and account statistics",
      icon: "📊",
      link: "/dashboard",
      color: "#4facfe"
    }
  ];

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>VacanSee Dashboard</h1>
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