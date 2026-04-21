import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import listing1 from "../images/listing-1.jpg";
import listing2 from "../images/listing-2.jpg";
import listing3 from "../images/listing-3.png";

function ListingDetails({ isLoggedIn }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [status, setStatus] = useState("");
  const [months, setMonths] = useState(1);
  const [date, setDate] = useState("");

  // 🔥 FETCH FROM DJANGO
  useEffect(() => {
    axios
        .get(`http://127.0.0.1:8000/api/listings/${id}/`)
        .then((res) => {
          setListing(res.data);
          setStatus(res.data.status);
        })
        .catch((err) => console.log(err));
  }, [id]);

  if (!listing) return <h2 className="container">Loading...</h2>;

  const total = (listing.price || 0) * months;

  const listingImages = [listing1, listing2, listing3];
  const selectedImage = listingImages[(id - 1) % listingImages.length];

  // 🔥 BOOKING FUNCTION
  const handleBooking = async () => {
    if (!isLoggedIn) {
      alert("You must login first!");
      navigate("/login");
      return;
    }

    if (!date) {
      alert("Please select move-in date");
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:8000/book/${id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date,
          months: months,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("Occupied"); // update UI
        alert("Booking successful!");
        navigate("/dashboard");
      } else {
        alert(result.message || "Booking failed");
      }
    } catch (error) {
      alert("Server error");
    }
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
              <div><strong>{listing.bedroom}</strong> Bedroom</div>
              <div><strong>{listing.bathroom}</strong> Bathroom</div>
              <div><strong>{listing.type}</strong></div>
              <div><strong>{listing.offer}</strong></div>
            </div>

            <div className="section">
              <h3>Description</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {listing.description}
              </p>
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

              <button onClick={handleBooking}>
                Confirm Booking
              </button>
            </div>

          </div>

        </div>
      </div>
  );
}

export default ListingDetails;