
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Events.css'; 
import partyImage from '../assets/party.jpg';
import party1Image from '../assets/party-1.jpg';
import party2Image from '../assets/party-2.jpg';
import party3Image from '../assets/party-3.jpg';
import partyVideo from '../assets/party.mp4';
import party1Video from '../assets/party-1.mp4';
const Events = () => {
  const glimpsesData = [
    { id: 1, image: partyImage, alt: 'Event Glimpse 1' },
    { id: 2, image: party1Image, alt: 'Event Glimpse 2' },
    { id: 3, image:party2Image, alt: 'Event Glimpse 3' },
    { id: 4, image:party3Image, alt: 'Event Glimpse 4' },
  ];

  const videosData = [
    { id: 1, video: partyVideo, poster: party1Image },
    { id: 2, video: partyVideo, poster: party1Image },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
          <div>
      {/* Event Glimpses Section */}
      <div className="event-section">
        <h1>Event Glimpses</h1>
        <div className="event-glimpse-container slick-slider">
          <Slider {...sliderSettings}>
            {glimpsesData.map((glimpse) => (
              <div key={glimpse.id} className="event-item">
                <img src={glimpse.image} alt={glimpse.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Event Videos Section */}
      <div className="event-section">
        <h2>Event Videos</h2>
        <div className="event-videos">
          {videosData.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-overlay">
                <button className="play-btn"></button>
              </div>
              <video controls poster={video.poster}>
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Events;
