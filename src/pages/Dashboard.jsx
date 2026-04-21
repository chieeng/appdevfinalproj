import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Topbar from "../components/Topbar";

function Dashboard({ currentUserEmail }) {
  const [localBookings, setLocalBookings] = useState([]);

  useEffect(() => {
    // Load bookings for the current user from localStorage only
    if (currentUserEmail) {
      const userBookingsKey = `bookings_${currentUserEmail}`;
      const savedBookings = JSON.parse(localStorage.getItem(userBookingsKey) || "[]");
      setLocalBookings(savedBookings);
    }
  }, [currentUserEmail]);

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
            <p className="stat-number">20</p>
          </div>

          <div className="stat-card">
            <h4>📋 Your Bookings</h4>
            <p className="stat-number">{localBookings.length}</p>
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
            <Link to="/browse" className="view-more-link">Browse More →</Link>
          </div>

          {localBookings.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h3>No bookings yet</h3>
              <p>Start exploring properties and make your first booking today!</p>
              <Link to="/browse" className="empty-state-btn">Search Properties</Link>
            </div>
          ) : (
            <div className="bookings-list">
              {localBookings.map((booking, index) => (
                <div key={index} className="booking-item">
                  <div className="booking-header">
                    <h3>{booking.title}</h3>
                    <span className="booking-price">₱{booking.totalPrice.toLocaleString()}</span>
                  </div>
                  <p className="booking-location">📍 {booking.location}</p>
                  <div className="booking-details">
                    <span>📅 Move-in: {booking.moveInDate}</span>
                    <span>⏱️ Duration: {booking.months} month{booking.months > 1 ? 's' : ''}</span>
                    <span>💰 ₱{booking.price.toLocaleString()}/month</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;