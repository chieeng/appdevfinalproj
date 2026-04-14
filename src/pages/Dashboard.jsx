import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import BoardingCard from "../components/BoardingCard";

function Dashboard({ bookings }) {
  const quickActions = [
    { icon: "🔍", label: "Search Properties", link: "/search" },
    { icon: "💬", label: "Messages", link: "/messages" },
    { icon: "❤️", label: "Saved", link: "/profile" },
    { icon: "👤", label: "Profile", link: "/profile" }
  ];

  return (
    <div className="dashboard-page">
      <Topbar />

      {/* WELCOME SECTION */}
      <div className="dashboard-welcome">
        <div className="container">
          <h1>Welcome back! 👋</h1>
          <p>Manage your bookings and explore new properties</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-actions-section">
        <div className="container">
          <div className="quick-actions">
            {quickActions.map((action, index) => (
              <Link to={action.link} key={index} className="quick-action-btn">
                <span className="action-icon">{action.icon}</span>
                <span className="action-label">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="container">
        <div className="stats">
          <div className="stat-card">
            <h4>📊 Available Properties</h4>
            <p className="stat-number">24</p>
          </div>

          <div className="stat-card">
            <h4>📋 Your Bookings</h4>
            <p className="stat-number">{bookings.length}</p>
          </div>

          <div className="stat-card">
            <h4>💬 New Messages</h4>
            <p className="stat-number">5</p>
          </div>

          <div className="stat-card">
            <h4>⭐ Rating</h4>
            <p className="stat-number">4.9</p>
          </div>
        </div>
      </div>

      {/* BOOKINGS SECTION */}
      <div className="container">
        <div className="suggestions">
          <div className="section-header-inline">
            <h2>Your Active Bookings</h2>
            <Link to="/search" className="view-more-link">Browse More →</Link>
          </div>

          {bookings.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h3>No bookings yet</h3>
              <p>Start exploring properties and make your first booking today!</p>
              <Link to="/search" className="empty-state-btn">Search Properties</Link>
            </div>
          ) : (
            <div className="cards">
              {bookings.map((item, index) => (
                <BoardingCard
                  key={index}
                  id={item.id}
                  title={item.title}
                  location={item.location}
                  price={item.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;