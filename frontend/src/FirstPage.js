import React, { useEffect } from 'react';
import './FirstPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

const FirstPageReact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration of the animations
    });
  }, []);
  const handleEmailClick = () => {
    window.location.href = 'mailto:your.email@example.com'; // Replace with your email address
  };
 
  return (
    <div className="firstpage">
      <div className='bar' ></div>
      <div className='bar3'></div>
      <div className='imageandtext'>
        <div className='text'>
        <p className='port' data-aos="fade-right">PORTFOLIO</p>
          <p className='name'>SHRIKANTH</p>
          <p className='surname'>VILVADRINATH</p>
          
        <div className='navbars' style={{  }}>
          <div className='links' data-aos="fade-up">
         
            <h2 className='fontsfirst'>Home</h2>
       
          </div>
          <div className='links' data-aos="fade-up" data-aos-duration='1300'>
          <Link
          to="EducationPage" 
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
        >
            <h2 className='fontsfirst' style={{ cursor: 'pointer' }} >Education</h2>
            </Link>
          </div >
          <div className='links'>
          <Link
          to="ProjectPage" 
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
        >
            <h2 className='fontsfirst' style={{ cursor: 'pointer' }} >Projects</h2>
            </Link>
          </div >
          <div className='links' >
          <Link
          to="internship" 
          spy={true}
          smooth={true}
          offset={-10} 
          duration={1000}
        >
            <h2 className='fontsfirst'  style={{ cursor: 'pointer' }}>Internships</h2>
            </Link>
          </div>
          <div className='links' >
          <a  href="mailto:shri.vilvadrinath@gmail.com" style={{ textDecoration: "None" , color: "white"}}><h2 className='fontsfirst'>Email</h2></a>
          </div>

        </div>

        </div>
        <div className='image' data-aos="zoom-in" data-aos-duration="1000">

        </div>
        
      </div>
      <div className='bar2'></div>
      <div className='bar4'></div>
    </div>
  );
};

export default FirstPageReact;
