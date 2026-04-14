function Messages() {
  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1>Messages</h1>
        <p>Chat with property owners and support</p>
      </div>

      <div className="messages-content">
        <div className="message-item">
          <div className="message-avatar">🏠</div>
          <div className="message-info">
            <h3>Cozy Pines Boarding House</h3>
            <p>Thank you for your interest! When would you like to visit?</p>
            <span className="message-time">2 hours ago</span>
          </div>
        </div>

        <div className="message-item">
          <div className="message-avatar">🏢</div>
          <div className="message-info">
            <h3>City Comfort Residence</h3>
            <p>We have availability next week. Would you like to book?</p>
            <span className="message-time">1 day ago</span>
          </div>
        </div>

        <div className="empty-state">
          <p>No new messages</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;