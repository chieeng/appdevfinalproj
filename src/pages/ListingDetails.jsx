import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import listing1 from "../images/listing-1.jpg";
import listing2 from "../images/listing-2.jpg";
import listing3 from "../images/listing-3.png";

function ListingDetails({ addBooking, isLoggedIn }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [months, setMonths] = useState(1);
  const [date, setDate] = useState("");

  const listings = {
    1: {
      id: 1,
      title: "Cozy Pines Boarding House",
      location: "Baguio City",
      price: 6500,
      bedroom: 1,
      bathroom: 1,
      type: "Room",
      offer: "For Rent",
      status: "Available",
      owner: "VacanSee Host",
      posted: "Recently listed",
      description:
          "Your Perfect Home Away from Home in Cebu!\n\n" +
          "Near Gillesania Engineering Review & Training Center (GERTC) room for rent.\n\n" +
          "Location: Very near Gillesania Engineering Review & Training Center (GERTC), MHAM, CTU, and Fuente Osmeña Circle\n\n" +
          "Room Features:\n" +
          "- Own CR (private bathroom)\n" +
          "- Air-conditioned\n" +
          "- Free WiFi\n\n" +
          "Ideal For: Students, reviewees, or young professionals",
      features: [
        "Internet",
        "Balcony",
        "Built-in wardrobe",
        "Wifi",
        "Air conditioning",
        "Alarm",
        "Fully furnished"
      ]
    },
    2: {
      id: 2,
      title: "City Comfort Residence",
      location: "Quezon City",
      price: 8000,
      bedroom: 1,
      bathroom: 1,
      type: "Room",
      offer: "For Rent",
      status: "Available",
      owner: "VacanSee Host",
      posted: "Recently listed",
      description:
          "Modern and accessible living space located near malls, transport, and business areas.",
      features: ["Aircon", "WiFi", "Security", "Near Transport"]
    },
    3: {
      id: 3,
      title: "Sampaguita Boarding Home",
      location: "Cebu City",
      price: 7000,
      bedroom: 1,
      bathroom: 1,
      type: "Boarding House",
      offer: "For Rent",
      status: "Available",
      owner: "VacanSee Host",
      posted: "Recently listed",
      description:
          "Affordable and convenient stay in a central location. Ideal for students and workers.",
      features: ["WiFi", "Shared Kitchen", "Accessible Location"]
    }
  };

  const data = listings[id];

  if (!data) return <h2 className="container">Listing not found</h2>;

  const total = data.price * months;

  const listingImages = [listing1, listing2, listing3];
  const selectedImage = listingImages[(id - 1) % listingImages.length];

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

    // 🔥 mark as occupied (simple version)
    data.status = "Occupied";

    const bookingData = {
      ...data,
      months,
      date,
      total
    };

    addBooking(bookingData);

    alert("Booking successful!");
    navigate("/dashboard");
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

          {/* LEFT SIDE */}
          <div className="listing-left">

            {/* TITLE */}
            <div className="listing-header">
              <div>
                <h1 className="title">{data.title}</h1>
                <div className={`status-badge ${data.status.toLowerCase()}`}>
                  {data.status}
                </div>
                <p className="location">{data.location}</p>
              </div>

              <div className="price-box">
                <h2>₱ {data.price}</h2>
                <span>/ month</span>
              </div>
            </div>

            {/* PROPERTY INFO */}
            <div className="property-meta">
              <div className="meta-item">
                <strong>{data.bedroom}</strong>
                <span>Bedroom</span>
              </div>

              <div className="meta-item">
                <strong>{data.bathroom}</strong>
                <span>Bathroom</span>
              </div>

              <div className="meta-item">
                <strong>{data.type}</strong>
                <span>House Type</span>
              </div>

              <div className="meta-item">
                <strong>{data.offer}</strong>
                <span>Offer Type</span>
              </div>
            </div>

            <p className="posted">
              {data.posted} • Listed by {data.owner}
            </p>

            {/* DESCRIPTION */}
            <div className="section">
              <h3>Description</h3>
              <p className="description">{data.description}</p>
            </div>

            {/* FEATURES */}
            <div className="section">
              <h3>Details</h3>

              <div className="features-grid">
                {data.features.map((item, index) => (
                    <div key={index} className="feature-item">
                      ✔ {item}
                    </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (BOOKING FIXED) */}
          <div className="listing-right">

            <div className="booking-form">
              <h3>Booking Details</h3>

              <label>Move-in Date</label>
              <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
              />

              <label>Number of Months</label>
              <input
                  type="number"
                  min="1"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
              />

              <p className="total">Total: ₱ {total}</p>

              <button className="btn-continue" onClick={handleBooking}>
                Confirm Booking
              </button>
            </div>

          </div>

        </div>
      </div>
  );
}

export default ListingDetails;