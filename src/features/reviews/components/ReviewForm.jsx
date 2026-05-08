import { useState } from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import reviewsApi from '../reviewsApi';

export default function ReviewForm({ doctorId, onReviewSubmitted }) {
  const [formData, setFormData] = useState({
    rating: 5,
    text: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await reviewsApi.createReview({
        ...formData,
        doctorId,
      });
      setFormData({ rating: 5, text: '' });
      if (onReviewSubmitted) onReviewSubmitted();
    } catch {
      setError('Failed to submit review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Leave a Review</h3>

      {error && <div className="review-form__error">{error}</div>}

      <Select
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        options={[
          { value: 5, label: '5 Stars - Excellent' },
          { value: 4, label: '4 Stars - Good' },
          { value: 3, label: '3 Stars - Average' },
          { value: 2, label: '2 Stars - Poor' },
          { value: 1, label: '1 Star - Very Poor' },
        ]}
      />

      <textarea
        name="text"
        placeholder="Share your experience..."
        value={formData.text}
        onChange={handleChange}
        rows={4}
        required
      />

      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Review'}
      </Button>
    </form>
  );
}
