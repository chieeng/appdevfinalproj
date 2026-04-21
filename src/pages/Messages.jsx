import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";

function Messages() {
  const { conversations, currentUserEmail } = useContext(ChatContext);
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    const msgArray = Object.values(conversations)
      .map((conv) => ({
        ...conv,
        lastMessage:
          conv.messages.length > 0
            ? conv.messages[conv.messages.length - 1].text
            : "No messages yet",
        lastTime:
          conv.messages.length > 0
            ? new Date(
                conv.messages[conv.messages.length - 1].timestamp
              ).toLocaleString()
            : "N/A",
      }))
      .sort(
        (a, b) =>
          new Date(b.messages[b.messages.length - 1]?.timestamp || 0) -
          new Date(a.messages[a.messages.length - 1]?.timestamp || 0)
      );

    setMessagesList(msgArray);
  }, [conversations]);

  return (
    <div className="messages-container">
      <div className="messages-header">
        <h1>Messages</h1>
        <p>Chat with property owners and support</p>
      </div>

      <div className="messages-content">
        {!currentUserEmail ? (
          <div className="empty-state">
            <p>Please login to view your messages</p>
          </div>
        ) : messagesList.length === 0 ? (
          <div className="empty-state">
            <p>No messages yet. Start by visiting a property!</p>
          </div>
        ) : (
          messagesList.map((conv) => (
            <div key={conv.propertyId} className="message-item">
              <div className="message-avatar">🏠</div>
              <div className="message-info">
                <h3>{conv.propertyTitle}</h3>
                <p>{conv.lastMessage.substring(0, 100)}...</p>
                <span className="message-time">{conv.lastTime}</span>
              </div>
            </div>
          ))
        )}

        {messagesList.length === 0 && (
          <div className="empty-state">
            <p>No new messages</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;