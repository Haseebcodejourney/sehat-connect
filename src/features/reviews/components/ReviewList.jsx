import { useState, useEffect } from 'react';
import reviewsApi from '../reviewsApi';

export default function ReviewList({ doctorId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await reviewsApi.getReviewsByDoctor(doctorId);
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [doctorId]);

  if (loading) return <div>Loading reviews...</div>;

  return (
    <div className="review-list">
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-item__header">
              <strong>{review.patientName}</strong>
              <span className="review-item__rating">{review.rating} ⭐</span>
            </div>
            <p className="review-item__text">{review.text}</p>
            <small className="review-item__date">
              {new Date(review.date).toLocaleDateString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
}
