// ProjectPageReact.js

import React, { useState } from 'react';
import "./ProjectPage.css"
import SentimentAnalysisGame from './SentimentAnalysisForm';
const ProjectPageReact = () => {

  return (
    <div className='ProjectPage'>
      <div className='title'>
        <p data-aos="fade-down" data-aos-duration="1000">PROJECTS</p>
      </div>
      <div className='mltitle'>
        <p data-aos="fade-right">MACHINE LEARNING</p>
      </div>
      <div className='ml'>
        <div className='firstml'  data-aos="fade-up-right">
        <p className='sa'>Sentiment Analysis</p>
        <p>In this project, we developed a powerful sentiment prediction system for movie reviews,
           employing state-of-the-art machine learning models and advanced text processing techniques. 
           The goal was to accurately classify reviews as either positive or negative sentiments. 
           Developed a sentiment analysis system for movie reviews using advanced text processing techniques, 
           featuring SVM as the key model, Porter stemming, TF-IDF transformation, and meticulous data cleaning for 
           optimal accuracy.</p>
        </div>
        <div className='comma' data-aos="fade-up">,</div>
         <div className='secondml'  data-aos="fade-up"> 
          <p>Score as many positive points as you can.</p>
         <p>P.S: Press Start!</p><SentimentAnalysisGame/></div> 
      </div>
      <div className='secml'>
        <div className='secondml2'  data-aos="fade-up">
        <p className='mrs'>Movie Recommender System</p>
        <p className='mrsdesc'>In this project, we crafted a robust movie recommendation system leveraging cutting-edge machine learning methodologies and sophisticated data processing techniques.
           Our primary objective was to provide users with personalized movie suggestions based on their preferences.
            The system incorporates advanced collaborative filtering models, content-based filtering, 
            and hybrid recommendation approaches to enhance accuracy and diversity in movie recommendations. 
            Key components include matrix factorization, cosine similarity,combined with meticulous data preprocessing for optimal performance. 
            The resulting movie recommender system excels in delivering tailored suggestions, 
            ensuring an enriching and enjoyable viewing experience for users.</p>
        </div>
        <div className='comma2' data-aos="fade-up">,</div>
         <div className='secondmrs'  data-aos="fade-up-right"> <p>Check Out It's Working Website:</p>
     <a href='https://recommendationsystem-0uab.onrender.com' target='_blank'>    <button className='cta'>
    Click Here
</button></a>

         </div> 
      </div>
      <div className='divider'></div>
      <div className='fstitle' data-aos="fade-right">
        <p>FULL STACK</p>
      </div>
      <div className='fs'>
        <div className='firstfs' data-aos="fade-up-right">
        <p className='gez'>GROCEREZ</p>
        <p className='gezdesc'>In this project we have built a sophisticated grocery shopping application developed with Vue.js for a dynamic user interface, 
          Flask for robust backend functionality, Redis for efficient caching, 
          and SQLite for database storage. The application seamlessly integrates worker beats to handle background processes,
           creating a comprehensive shopping experience for Users, Managers, and Admins. Users can effortlessly browse,
            add items to their cart, and make purchases, while Managers contribute valuable feedback to enhance the platform. 
            Admins, with privileged access, utilize Flask, Redis, and SQLite for efficient stock management, including tasks such as restocking items like dairy products.</p>
        </div>
        <div className='secondfs' data-aos="fade-up"> 
        
        </div>
      </div>
      <div className='fs2' data-aos="fade-up">
        <div className='secondfd'>
        <p className='portfolio'  data-aos="fade-up-left">PORTFOLIO</p>
        <p className='portdesc'  data-aos="fade-up-left">
        My portfolio website combines the power of React for dynamic frontend interaction with Flask, JavaScript, and SQLite for backend functionality. 
        Through this stack,
        I've crafted a seamless user experience that showcases my projects and skills effectively. With React's component-based structure,
        the website offers fluid navigation and engaging interactivity. Flask handles the backend processes efficiently, ensuring smooth data
        retrieval and storage using SQLite. Overall, my portfolio website reflects my technical prowess while providing visitors with an intuitive and 
        visually appealing interface to explore my work.
        </p>
        </div>
       
      </div>
    
      <div className='divider2'></div>
      <div className='iot'>
      <div className='iottitle' data-aos="fade-right">
        <p>INTERNET OF THINGS</p>
      </div>
      <div className='iotfirst' data-aos="fade-up-right">
        <p className='bot'>Smart Navaigation Bot</p>
        <p className='botdesc'>Embark on the development of an advanced autonomous
navigational robot that combines servo motor control, machine
learning-based object recognition using Convolutional Neural
Networks (CNNs), and a Bluetooth-enabled browser app for userfriendly remote control. The project integrates FeatherS3
microcontrollers, servo motors, a camera system, and ultrasound
sensors to create a versatile robotic platform.
An autonomous robot featuring Bluetooth-controlled servo motors,
ultrasound sensors, and real-time object classification using
Convolutional Neural Networks (CNNs) for versatile and precise
navigation.</p>
        </div>
        <div>

    </div>
      </div>
    </div>
  );
};

export default ProjectPageReact;