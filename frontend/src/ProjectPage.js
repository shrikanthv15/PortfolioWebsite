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
          <div className='borderml1'>
            <div className='skill1'>
            Data Extraction
            </div>
            <div className='skill1'>
            Data Analysis
            </div>
            <div className='skill1'>
            Feature Engineering
            </div>
            
          </div>
          <div className='borderml2'>
            <div className='skill1'>
            Model Training
            </div>
            <div className='skill1'>
            Fine Tuning
            </div>
            <div className='skill1'>
            Porter Stemming
            </div>
            
          </div>
          
          </div> 

      </div>
      <div className='secml'>
        <div className='secondml2'  data-aos="fade-up">
        <p className='mrs'>Generative AI Integration</p>
        <p className='mrsdesc'>We created an innovative GenAI-powered learning platform for the Study portal, 
          transforming the user experience with interactive content, real-time problem-solving support, 
          and intelligent feedback mechanisms. This cutting-edge environment integrates a 
          live coding IDE with seamless API integration and a secure JWT-based login system. 
          By crafting detailed user journey maps and wireframes, I envisioned the next-gen experience for learners. 
          Through agile project management in Jira, I oversaw development sprints and designed API endpoints, ensuring functionality and scalability. 
          Extensive test cases were written to validate the system,
           with the final product presented through a polished working prototype and comprehensive report.</p>
        </div>
        <div className='comma2' data-aos="fade-up">,</div>
         <div className='secondmrs'  data-aos="fade-up-right"> 
         <div className='borderml1'>
            <div className='skill1'>
            Generative AI
            </div>
            <div className='skill1'>
            Machine Learning
            </div>
            <div className='skill1'>
            FLASK
            </div>
            
          </div>
          <div className='borderml2'>
            <div className='skill1'>
            Machine Learning
           
            </div>
            <div className='skill1'>
            SQL
            </div>
            <div className='skill1'>
            VUE.JS
            </div>
            
          </div>
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
        <div className='secondml1'  data-aos="fade-up"> 
          <div className='borderml1'>
            <div className='skill1'>
            Vue.js
            </div>
            <div className='skill1'>
            Flask
            </div>
            <div className='skill1'>
            Redis
            </div>
            
          </div>
          <div className='borderml2'>
            <div className='skill1'>
            SQLite 
            </div>
            <div className='skill1'>
            Python
            </div>
            <div className='skill1'>
            Caching
            </div>
            
          </div>
          
          </div> 
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
        <div className='secondml3'  data-aos="fade-up"> 
          <div className='borderml1'>
            <div className='skill1'>
            ReactJs 
            </div>
            <div className='skill1'>
            Flask
            </div>
            <div className='skill1'>
            Redis
            </div>
            
          </div>
          <div className='borderml2'>
            <div className='skill1'>
            SQLite 
            </div>
            <div className='skill1'>
            Python
            </div>
            <div className='skill1'>
            Caching
            </div>
            
          </div>
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