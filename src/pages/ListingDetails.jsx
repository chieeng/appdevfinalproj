import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getListingById } from "../data/listings";
import { ChatContext } from "../contexts/ChatContext";

import listing1 from "../images/listing-1.jpg";
import listing2 from "../images/listing-2.jpg";
import listing3 from "../images/listing-3.png";

function ListingDetails({ isLoggedIn, currentUserEmail }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openConversation } = useContext(ChatContext);

  const [listing, setListing] = useState(null);
  const [status, setStatus] = useState("");
  const [months, setMonths] = useState(1);
  const [date, setDate] = useState("");

  // 🔥 FETCH FROM LOCAL DATABASE
  useEffect(() => {
    const listingData = getListingById(id);
    if (listingData) {
      setListing(listingData);
      setStatus(listingData.status);
    }
  }, [id]);

  if (!listing) return <h2 className="container">Loading...</h2>;

  const total = (listing.price || 0) * months;

  const listingImages = [listing1, listing2, listing3];
  const selectedImage = listingImages[(id - 1) % listingImages.length];

  // 🔥 BOOKING FUNCTION
  const handleBooking = () => {
    if (!isLoggedIn) {
      alert("You must login first!");
      navigate("/login");
      return;
    }

    if (!date) {
      alert("Please select move-in date");
      return;
    }

    // Save booking to user-specific localStorage
    const userBookingsKey = `bookings_${currentUserEmail}`;
    const userBookings = JSON.parse(localStorage.getItem(userBookingsKey) || "[]");
    const newBooking = {
      listingId: id,
      title: listing.title,
      location: listing.location,
      price: listing.price,
      moveInDate: date,
      months: months,
      totalPrice: total,
      bookingDate: new Date().toLocaleDateString()
    };
    
    userBookings.push(newBooking);
    localStorage.setItem(userBookingsKey, JSON.stringify(userBookings));
    
    alert("Booking successful!");
    navigate("/dashboard");
  };

  // 🔥 MESSAGE OWNER FUNCTION
  const handleMessageOwner = () => {
    if (!isLoggedIn) {
      alert("You must login first!");
      navigate("/login");
      return;
    }

    // Open the chat bubble with this property
    openConversation(id);
  };

  return (
      <div className="listing-page">

        {/* HERO */}
        <div
            className="listing-hero"
            style={{ backgroundImage: `url(${selectedImage})` }}
        >
          <div className="listing-hero-overlay"></div>
        </div>

        <div className="container listing-layout">

          {/* LEFT */}
          <div className="listing-left">

            <div className="listing-header">
              <div>
                <h1 className="title">{listing.title}</h1>

                <div className={`status-badge ${status.toLowerCase()}`}>
                  {status}
                </div>

                <p className="location">{listing.location}</p>
              </div>

              <div className="price-box">
                <h2>₱ {listing.price}</h2>
                <span>/ month</span>
              </div>
            </div>

            <div className="property-meta">
              <div><strong>{listing.bedrooms}</strong> Bedrooms</div>
              <div><strong>{listing.bathrooms}</strong> Bathrooms</div>
              <div><strong>Boarding House</strong></div>
              <div><strong>Available</strong></div>
            </div>

            <div className="section">
              <h3>Description</h3>
              <p>{listing.description}</p>
            </div>

            <div className="section">
              <h3>Amenities</h3>
              <div className="amenities-list">
                {listing.amenities && listing.amenities.map((amenity, index) => (
                  <span key={index} className="amenity-tag">✓ {amenity}</span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="listing-right">

            <div className="booking-form">
              <h3>Booking Details</h3>

              <label>Move-in Date</label>
              <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
              />

              <label>Months</label>
              <input
                  type="number"
                  min="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
              />

              <p className="total">Total: ₱ {total}</p>

              <button onClick={handleBooking} className="btn-primary">
                Confirm Booking
              </button>

              <button onClick={handleMessageOwner} className="btn-secondary">
                📧 Message Owner
              </button>
            </div>

          </div>

        </div>
      </div>
  );
}

export default ListingDetails;