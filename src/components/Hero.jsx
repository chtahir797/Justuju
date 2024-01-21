import { useState, useEffect } from 'react';
import './Hero.css'
import partyImage from '../assets/party.jpg';
import party1Image from '../assets/party-1.jpg';
import party2Image from '../assets/party-2.jpg';
import party3Image from '../assets/party-3.jpg';
const Hero = () => {
    const images = [partyImage, party1Image, party2Image, party3Image];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    const heroStyle = {
        backgroundImage: `url('${images[currentImageIndex]}')`,
    };
    return (
        <>
            <section id="hero" style={heroStyle}>
                <div className="hero-content">
                    <h1>Welcome to Justuju by Arslan</h1>
                    <p>Your premier destination for unforgettable events</p>
                    <a href="/booknow.html" className="hero-btn">
                        Book Now
                    </a>
                </div>
            </section>
        </>
    )
}
export default Hero