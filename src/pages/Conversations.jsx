import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";
import cover1 from "../images/cover-1.png";

function Conversations() {
  const { conversations, currentUserEmail } = useContext(ChatContext);
  const [conversationsList, setConversationsList] = useState([]);

  useEffect(() => {
    const convArray = Object.values(conversations).map((conv) => ({
      ...conv,
      lastMessage:
        conv.messages.length > 0
          ? conv.messages[conv.messages.length - 1].text.substring(0, 100)
          : "No messages yet",
      lastMessageTime:
        conv.messages.length > 0
          ? new Date(
              conv.messages[conv.messages.length - 1].timestamp
            ).toLocaleDateString()
          : "N/A",
      unread: 0,
    }));
    setConversationsList(convArray);
  }, [conversations]);

  return (
    <div className="conversations-page">
      <div
        className="conversations-header"
        style={{ backgroundImage: `url(${cover1})` }}
      >
        <h1>Conversation History</h1>
        <p>Your messages with property owners</p>
      </div>

      <div className="container">
        {!currentUserEmail ? (
          <div className="empty-state">
            <p>Please login to view your conversations</p>
          </div>
        ) : conversationsList.length === 0 ? (
          <div className="empty-state">
            <p>No conversations yet. Start by contacting a property owner!</p>
          </div>
        ) : (
          <div className="conversations-list">
            {conversationsList.map((conv) => (
              <div key={conv.propertyId} className="conversation-item">
                <div className="conv-avatar">🏠</div>
                <div className="conv-info">
                  <h3>{conv.propertyTitle}</h3>
                  <p>{conv.lastMessage}</p>
                </div>
                <div className="conv-meta">
                  <span className="conv-time">{conv.lastMessageTime}</span>
                  {conv.unread > 0 && (
                    <span className="unread-badge">{conv.unread}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Conversations;
