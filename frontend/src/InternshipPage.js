import React from 'react';
import './InternshipPage.css'; 

const InternshipPage = () => {
  
  return (
    <div className="internship">
            <div className='interntitle' data-aos="fade-up" data-aos-duration="1000" >
                INTERNSHIP
            </div>
            <div className='first' data-aos="fade-right" data-aos-duration="1000">
            AI RESEARCH INTERN
            <div className='date'>
              (  01/02/2024 - Present )
                <div className='info1'>
                During my internship at AI Himalaya Labs under the mentorship of Arifa Khan, 
                India's esteemed Ethereum Partner, I engaged in a variety of impactful tasks
                focusing on cutting-edge technologies in artificial intelligence (AI). 
                My primary responsibilities included developing full-stack websites,
                harnessing the latest advancements in AI technology, and crafting Language Model (LLM) 
                models and AI products utilizing LLMs. Throughout the internship, 
                I adeptly utilized tools and frameworks such as ReactJS, 
                Python, Flask, and SQL to deliver high-quality solutions. 
                This experience not only honed my technical skills but also provided me with invaluable 
                insights into the intersection of AI and real-world applications, 
                thereby contributing significantly to my professional growth.
                </div>
            </div>
            </div>
            <div className='second' data-aos="fade-left" data-aos-duration="1000">
            PYTHON DEVELOPER
            <div className='date2'>
            (  01/03/2024 - 01/09/2023 )
                <div className='info2'>
                    During my internship at Fractal31,
                    I delved into robotics simulation, skillfully combining GoDot,
                     Blender, and Python to engineer captivating virtual environments.
                     Utilizing GoDot for simulations and Blender for crafting intricate robotic
                      components like servomotors and arms, I enhanced both visual appeal and functionality. 
                      Python served as the interpreter, facilitating seamless communication between users and robots, 
                      thereby enabling intuitive control mechanisms. This integrated approach resulted in the development
                       of immersive virtual interfaces, fostering dynamic exploration and experimentation in robotics. Through 
                       this experience, I deepened my technical prowess and recognized the transformative potential of 
                       interdisciplinary collaboration in driving innovation within the field.
                </div>
            </div>
            </div>
    </div>
  );
};

export default InternshipPage;
