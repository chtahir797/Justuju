// Feedback.jsx
import { useState } from 'react';
import './FeedbackForm.css'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleStarHover = (starRating) => {
    setRating(starRating);
  };

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle feedback submission logic here
//     console.log(`Name: ${name}, Feedback: ${feedback}, Rating: ${rating}`);
//   };

  //Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDRgRvG0MchFsmr9o32xh53dMJRet-ecug",
    authDomain: "justuju-events.firebaseapp.com",
    projectId: "justuju-events",
    storageBucket: "justuju-events.appspot.com",
    messagingSenderId: "470085220947",
    appId: "1:470085220947:web:68fb5d2c5a194f5d9aa4a6",
    measurementId: "G-056Q354XYH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store feedback in Firebase Firestore
      await addDoc(collection(db, 'feedback'), {
        name,
        feedback,
        rating,
        timestamp: serverTimestamp(),
      });

      console.log('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }

    // Reset form after submission
    setName('');
    setFeedback('');
    setRating(0);
  };
  return (
    <div className="feedback-container">
      <h2>Share Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'selected' : ''}`}
              onMouseOver={() => handleStarHover(star)}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
