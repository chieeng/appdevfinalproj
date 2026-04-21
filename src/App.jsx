import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Browse from "./pages/Browse";
import Conversations from "./pages/Conversations";
import Search from "./pages/Search";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ListingDetails from "./pages/ListingDetails";
import { ThemeProvider } from './contexts/ThemeContext';
import { ChatProvider } from './contexts/ChatContext';

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  // Handle user login with email tracking
  const handleSetIsLoggedIn = (value, email = null) => {
    setIsLoggedIn(value);
    if (value && email) {
      setCurrentUserEmail(email);
      localStorage.setItem("currentUserEmail", email);
    } else {
      setCurrentUserEmail(null);
      localStorage.removeItem("currentUserEmail");
    }
  };

  return (
    <ChatProvider>
    <ThemeProvider>
    <Router>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={handleSetIsLoggedIn} />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/conversations" element={<Conversations />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login setIsLoggedIn={handleSetIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            isLoggedIn
              ? <Dashboard currentUserEmail={currentUserEmail} />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/listing/:id"
          element={
            <ListingDetails
              isLoggedIn={isLoggedIn}
              currentUserEmail={currentUserEmail}
            />
          }
        />

      </Routes>

      {/* 🔥 FLOATING CHAT */}
      <ChatBox />

    </Router>
    </ThemeProvider>
    </ChatProvider>
  );
}

export default App;