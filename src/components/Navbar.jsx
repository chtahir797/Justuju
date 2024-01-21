import { useState } from 'react';
import './Navbar.css'
import Justuju from '../assets/Justuju.png'
import Whatsapp from '../assets/whatsapp.png'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    return (
        <>
            <section id="home">
                <header>
                    <div className="nav">
                        <div className="logo">
                            <img src={Justuju} alt="Justuju-Logo" />
                        </div>
                        <div className="menu">
                            <a href="#home">Home</a>
                            <a href="#about">About Us</a>
                            <a href="#contact">Contact Us</a>
                            <a href="#">Book Now</a>
                            <div className="whatsapp">
                                <a target="_blank" href="#">
                                    <img src={Whatsapp} alt="whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </header>
            </section>
        </>
    )
}
export default Navbar