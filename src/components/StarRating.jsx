import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor((rating )) || 0;
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {Array(fullStars)
        .fill(0)
        .map((_, idx) => (
          <FaStar key={idx} color="#FFD700" />
        ))}

      {halfStar === 1 && <FaStarHalfAlt color="#FFD700" />}

      {Array(emptyStars)
        .fill(0)
        .map((_, idx) => (
          <FaRegStar key={idx} color="#FFD700" />
        ))}
    </div>
  );
};

export default StarRating;
