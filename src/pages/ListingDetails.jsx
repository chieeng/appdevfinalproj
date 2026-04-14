import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

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
      description: "A peaceful boarding house with fresh mountain air."
    },
    2: {
      id: 2,
      title: "City Comfort Residence",
      location: "Quezon City",
      price: 8000,
      description: "Modern rooms near malls and transport."
    },
    3: {
      id: 3,
      title: "Sampaguita Boarding Home",
      location: "Cebu City",
      price: 7000,
      description: "Affordable stay in the heart of Cebu."
    }
  };

  const data = listings[id];

  if (!data) return <h2 className="container">Listing not found</h2>;

  const total = data.price * months;

  const handleBooking = () => {
    // 🔥 CHECK LOGIN
    if (!isLoggedIn) {
      alert("You must login first!");
      navigate("/login");
      return;
    }

    if (!date) {
      alert("Please select move-in date");
      return;
    }

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
    <div className="container listing-page">

      <h2>{data.title}</h2>
      <p className="location">{data.location}</p>
      <p className="price">₱ {data.price} / month</p>
      <p className="description">{data.description}</p>

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
  );
}

export default ListingDetails;