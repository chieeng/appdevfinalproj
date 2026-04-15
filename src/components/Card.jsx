import { useNavigate } from "react-router-dom";
import listing1 from "../images/listing-1.jpg";
import listing2 from "../images/listing-2.jpg";
import listing3 from "../images/listing-3.png";

function Card({ id, title, location, price }) {
  const navigate = useNavigate();
  
  // Cycle through 3 listing images
  const images = [listing1, listing2, listing3];
  const imageIndex = (id - 1) % images.length;
  const selectedImage = images[imageIndex];

  return (
    <div className="card">

      <div className="card-placeholder" style={{ backgroundImage: `url(${selectedImage})` }}></div>

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