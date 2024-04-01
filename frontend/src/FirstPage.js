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
          
        <div className='navbars'>
          <div className='links'>
         
            <h1 className='fontsfirst'>Home</h1>
       
          </div>
          <div className='links'>
          <Link
          to="ProjectPage" // Provide the ID of the target element to scroll to
          spy={true}
          smooth={true}
          offset={-70} // Adjust as needed
          duration={500} // Duration of the scroll animation
        >
            <h1 className='fontsfirst' style={{ cursor: 'pointer' }} >Project</h1>
            </Link>
          </div >
          <div className='links'>
          <Link
          to="internship" // Provide the ID of the target element to scroll to
          spy={true}
          smooth={true}
          offset={-10} // Adjust as needed
          duration={3000} // Duration of the scroll animation
        >
            <h1 className='fontsfirst' style={{ cursor: 'pointer' }}>Internships</h1>
            </Link>
          </div>
          <div className='links'>
          <a  href="mailto:your.email@example.com" style={{ textDecoration: "None" , color: "white"}}><h1 className='fontsfirst'>Email Me</h1></a>
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
