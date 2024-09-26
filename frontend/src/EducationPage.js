// ProjectPageReact.js

import React, { useState } from 'react';
import "./EducationPage.css"
const EducationPage = () => {

  return (
    <div className='EducationPage'>
      <div className='title'>
        <p data-aos="fade-down" data-aos-duration="1000">Education</p>
      </div>
      <div className='mltitle'>
        <p data-aos="fade-right">University Of Maryland - College Park</p>

      </div>
        <div className='ml'>
            <p>
            Master of Science in Data Science
            <p style={{ fontSize: 20}}>August 2024 - Present</p>
            </p>
            <p style={{ top: "30%", position: "absolute", width: "80%", fontSize: 20 }}>
            Pursuing this advanced degree has expanded my expertise in data analysis, artificial intelligence, 
            and big data technologies. I am deepening my understanding of machine learning algorithms, data processing, and predictive modeling. 
            The program has allowed me to engage in cutting-edge research while refining my skills for a future in AI and tech innovation.
            </p>
        </div>
           
        <div className='mltitle'>
        <p data-aos="fade-right" style={{ position: "absolute", top: 330 }}> Indian Institute of Technology - Madras</p>

      </div>
        <div className='secml'>
        
            <p style={{ fontSize: 30}}>
            Bachelor of Science in Data Science
            <p style={{ fontSize: 20}}>Jan 2021 - Dec 2024</p>
           </p>
            <p style={{ top: "30%", position: "absolute", width: "80%", fontSize: 20 }}>
            Through this program, I mastered core data science concepts such as machine learning, data visualization, and statistical analysis.
             The curriculum blended theoretical knowledge with practical applications, providing me with a robust skill set in programming,
              algorithms, and data-driven decision-making. 
            This experience strengthened my ability to tackle real-world data problems. </p>
        </div>

        <div className='mltitle'>
        <p data-aos="fade-right" style={{ position: "absolute", top: 650, marginLeft: "-0%" }}> Vishwakarma Government Engineering College - Ahemdabad</p>

      </div>
        <div className='secml' style={{ 
    top: "67%"}}>
        
            <p style={{ fontSize: 30}}>
            Bachelor of Engineering in Electronics And Communication
            <p style={{ fontSize: 20}}>Jan 2021 - Dec 2024</p>
           </p>
            <p style={{ top: "40%", position: "absolute", width: "80%", fontSize: 20 }}>
            I earned a solid foundation in electronics, telecommunications, and signal processing, 
            with hands-on experience in embedded systems and circuit design. I also participated in collaborative projects,
             research initiatives, and leadership roles within the media team. 
            This degree honed my problem-solving skills and prepared me for interdisciplinary technical challenges. </p>
        </div>
        <div className='divider' style={{ position: 'absolute', top: 1300 }}></div>
      </div>
  );
};

export default EducationPage;