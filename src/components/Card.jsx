import { useNavigate } from "react-router-dom";

function Card({ id, title, location, price }) {
  const navigate = useNavigate();

  return (
    <div className="card">

      <div className="card-placeholder">🏠</div>

      <div className="card-content">
        <h3>{title}</h3>
        <p className="location">{location}</p>
        <p className="price">₱ {price} / month</p>

        <button onClick={() => navigate(`/listing/${id}`)}>
          View Details
        </button>
      </div>

    </div>
  );
}

export default Card;