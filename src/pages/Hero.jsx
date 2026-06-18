import { use } from 'react';
import {useEffect, useState, useRef} from 'react';
import portfolio from './portfolio.png'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";


function Hero() {
  return (
    <div className="hero" id = "hero">
      
      <div className="hero-container">

        <div className="image-profile">
          <img src={portfolio} alt="" className="profile-img" />
        </div>

        <div className="hero-text">
          <h1 className="nameHeader">Hi! I'm Dheeya Manilal</h1>

          <h2 className="hero-subtitle">
            Computer Science and Information Technology Student
            <span className="cursor"> | </span>
          </h2>

          <p className="description">
           Aspiring fullstack developer passionate about building meaningful applications, solving challenging problems and expressing creativity both in code and beyond.
          </p>

         <div className="social-icons">
            <a href="mailto:dheeyam7@gmail.com" className="contact-btn">
  Contact Me  <span className="arrow">→</span>
</a>
  <a href="https://www.linkedin.com/in/dheeya-manilal/" target="_blank">
    <FaLinkedin size={24} />
  </a>

  <a href="https://github.com/DheeyaM" target="_blank">
    <FaGithub size={24} />
  </a>
  <a href="https://www.threads.com/@dheeyaaa.___" target="_blank">
    <FaThreads size={22} />
  </a>
</div>
        </div>

      </div>

    </div>
  );
}

export default Hero

