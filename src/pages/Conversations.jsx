import cover1 from "../images/cover-1.png";

function Conversations() {
  const conversations = [
    { id: 1, name: "Cozy Pines Boarding House", lastMessage: "When can you visit?", time: "2 hours ago", unread: 2 },
    { id: 2, name: "City Comfort Residence", lastMessage: "Available next week", time: "1 day ago", unread: 0 },
    { id: 3, name: "Sampaguita Boarding Home", lastMessage: "Thank you for your interest", time: "3 days ago", unread: 0 },
    { id: 4, name: "UrbanNest Boarding House", lastMessage: "Price negotiable", time: "1 week ago", unread: 1 },
  ];

  return (
    <div className="conversations-page">
      <div className="conversations-header" style={{ backgroundImage: `url(${cover1})` }}>
        <h1>Conversation History</h1>
        <p>Your messages with property owners</p>
      </div>

      <div className="container">
        <div className="conversations-list">
          {conversations.map((conv) => (
            <div key={conv.id} className="conversation-item">
              <div className="conv-avatar">💬</div>
              <div className="conv-info">
                <h3>{conv.name}</h3>
                <p>{conv.lastMessage}</p>
              </div>
              <div className="conv-meta">
                <span className="conv-time">{conv.time}</span>
                {conv.unread > 0 && <span className="unread-badge">{conv.unread}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Conversations;
