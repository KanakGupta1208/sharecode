import React, { useState } from 'react';

const Rating = ({ instructorName = "Instructor Name", onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }

    const data = {
      instructor: instructorName,
      rating,
      feedback,
    };

    if (onSubmit) onSubmit(data);
    alert("Thank you for your feedback!");
    setRating(0);
    setHover(0);
    setFeedback('');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-400 h-100">
      <h2 className="text-xl font-semibold text-center mb-2">Rate Your Instructor</h2>
      <p className="text-center text-gray-600 mb-4">{instructorName}</p>

      <div className="flex justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 cursor-pointer transition-colors ${
              (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill={(hover || rating) >= star ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <textarea
        className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Write your feedback here..."
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <button
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Rating;
