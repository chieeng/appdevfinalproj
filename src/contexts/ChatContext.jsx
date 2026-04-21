import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [conversations, setConversations] = useState({});
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  // Load user email on mount
  useEffect(() => {
    const email = localStorage.getItem("currentUserEmail");
    if (email) {
      setCurrentUserEmail(email);
      loadConversations(email);
    }
  }, []);

  // Load all conversations for a user from localStorage
  const loadConversations = (email) => {
    const key = `conversations_${email}`;
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    setConversations(saved);
  };

  // Save conversations to localStorage
  const saveConversations = (email, convs) => {
    if (email) {
      const key = `conversations_${email}`;
      localStorage.setItem(key, JSON.stringify(convs));
    }
  };

  // Send a message in a conversation
  const sendMessage = (propertyId, propertyTitle, message, sender = "user") => {
    if (!currentUserEmail) return;

    const updated = { ...conversations };
    const convKey = `property_${propertyId}`;

    if (!updated[convKey]) {
      updated[convKey] = {
        propertyId,
        propertyTitle,
        messages: [],
        createdAt: new Date().toISOString(),
      };
    }

    updated[convKey].messages.push({
      id: Date.now(),
      sender,
      text: message,
      timestamp: new Date().toISOString(),
    });

    setConversations(updated);
    saveConversations(currentUserEmail, updated);
  };

  // Open conversation with a property owner
  const openConversation = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setChatOpen(true);
  };

  // Close chat
  const closeChat = () => {
    setChatOpen(false);
  };

  // Get all conversations as an array
  const getConversationsArray = () => {
    return Object.values(conversations).map((conv) => ({
      ...conv,
      lastMessage:
        conv.messages.length > 0
          ? conv.messages[conv.messages.length - 1].text
          : "No messages yet",
      unreadCount: 0, // Can be implemented later
    }));
  };

  // Get a specific conversation
  const getConversation = (propertyId) => {
    return conversations[`property_${propertyId}`];
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        currentUserEmail,
        selectedPropertyId,
        chatOpen,
        sendMessage,
        openConversation,
        closeChat,
        getConversationsArray,
        getConversation,
        setCurrentUserEmail,
        loadConversations,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
