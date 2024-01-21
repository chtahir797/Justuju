// FeedbackList.jsx
import { useEffect, useState } from 'react';
import './ShowFeedBack.css'; // Import your CSS file
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs, orderBy, limit } from 'firebase/firestore';

const ShowFeedBack = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Firebase configuration
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

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'feedback'),
          orderBy('timestamp', 'desc'),
          limit(6)
        );

        const fetchedFeedbacks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFeedbacks(fetchedFeedbacks);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, [db]);

  return (
    <div className="feedback-list-container">
      <h2>Latest Feedbacks</h2>
      <div className="feedback-cards">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <h3>{feedback.name}</h3>
            <p>{feedback.feedback}</p>
            <div className="rating">
              {[...Array(feedback.rating)].map((_, index) => (
                <span key={index} className="star">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowFeedBack;
