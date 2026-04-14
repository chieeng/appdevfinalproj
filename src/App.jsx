import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ListingDetails from "./pages/ListingDetails";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [bookings, setBookings] = useState([]);

  const addBooking = (listing) => {
    setBookings([...bookings, listing]);
  };

  return (
    <Router>

      <Navbar isLoggedIn={isLoggedIn} />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        {/* 🔒 PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn
              ? <Dashboard bookings={bookings} />
              : <Navigate to="/login" />
          }
        />

        {/* 🔥 PASS LOGIN STATUS */}
        <Route
          path="/listing/:id"
          element={
            <ListingDetails
              addBooking={addBooking}
              isLoggedIn={isLoggedIn}
            />
          }
        />

      </Routes>

    </Router>
  );
}

export default App;