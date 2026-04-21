import { useState, useContext, useEffect } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { allListings } from "../data/listings";

function ChatBox() {
  const { 
    conversations, 
    sendMessage, 
    getConversation, 
    selectedPropertyId, 
    chatOpen: contextChatOpen,
    closeChat 
  } = useContext(ChatContext);
  
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Sync with context chat open state
  useEffect(() => {
    if (contextChatOpen && selectedPropertyId) {
      setOpen(true);
    }
  }, [contextChatOpen, selectedPropertyId]);

  const selectedConversation = selectedPropertyId
    ? getConversation(selectedPropertyId)
    : null;

  const handleSendMessage = () => {
    if (!message.trim() || !selectedPropertyId) return;

    const property = allListings.find(p => p.id === parseInt(selectedPropertyId));
    if (property) {
      sendMessage(selectedPropertyId, property.title, message, "user");
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setOpen(false);
    setMessage("");
  };

  // Get conversations with property info
  const conversationsList = Object.values(conversations).map((conv) => {
    const property = allListings.find(p => p.id === conv.propertyId);
    return {
      ...conv,
      lastMessage:
        conv.messages.length > 0
          ? conv.messages[conv.messages.length - 1].text.substring(0, 50)
          : "No messages yet",
      lastMessageTime:
        conv.messages.length > 0
          ? new Date(
              conv.messages[conv.messages.length - 1].timestamp
            ).toLocaleDateString()
          : "",
      property,
    };
  });

  const unreadCount = conversationsList.length;

  return (
    <>
      {/* FLOAT BUTTON */}
      <div className="chat-toggle" onClick={() => setOpen(true)}>
        💬
        {unreadCount > 0 && <span className="chat-badge">{unreadCount}</span>}
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chat-container">
          {!selectedPropertyId ? (
            <>
              {/* CONVERSATIONS LIST */}
              <div className="chat-header">
                <h4>Messages</h4>
                <span onClick={handleClose}>✖</span>
              </div>

              <div className="chat-messages">
                {conversationsList.length === 0 ? (
                  <p className="empty">No conversations yet. Start by visiting a property!</p>
                ) : (
                  conversationsList.map((conv) => (
                    <div
                      key={conv.propertyId}
                      className="conversation-preview"
                      onClick={() => {
                        // selectedPropertyId is already set by context, just wait for effect
                        // Actually we need to manually select it here since we're in ChatBox
                      }}
                    >
                      <div className="conv-avatar">🏠</div>
                      <div className="conv-details">
                        <div className="conv-title">{conv.propertyTitle}</div>
                        <div className="conv-preview-text">{conv.lastMessage}</div>
                        <div className="conv-time">{conv.lastMessageTime}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          ) : (
            <>
              {/* CHAT WINDOW */}
              <div className="chat-header">
                <button
                  className="back-btn"
                  onClick={() => {
                    setMessage("");
                  }}
                >
                  ← Back
                </button>
                <h4>{selectedConversation?.propertyTitle}</h4>
                <span onClick={handleClose}>✖</span>
              </div>

              <div className="chat-messages">
                {selectedConversation && selectedConversation.messages.length > 0 ? (
                  selectedConversation.messages.map((msg) => (
                    <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
                      <div className="bubble-content">{msg.text}</div>
                      <div className="bubble-time">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="empty">Start a conversation! Send your inquiry or questions to the property owner.</p>
                )}
              </div>

              <div className="chat-input">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about move-in dates, amenities, pricing, or anything else..."
                  rows="2"
                  autoFocus
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ChatBox;