import styles from "./StarRating.module.css";

interface StarRatingProps {
  rating: number; // Current rating (from 1 to 5)
  onRatingChange: (rating: number) => void; // Callback for when the rating is changed
}

function StarRating({ rating, onRatingChange }: StarRatingProps) {
  const handleStarClick = (index: number) => {
    onRatingChange(index + 1); // Update rating when a star is clicked
  };

  return (
    <div className={styles.starContainer}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < rating ? styles.filled : ""}`}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
