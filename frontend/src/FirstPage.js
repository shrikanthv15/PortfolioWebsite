import React, { useEffect } from 'react';
import './FirstPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FirstPageReact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration of the animations
    });
  }, []);
  return (
    <div className="firstpage">
      <div className='bar' ></div>
      <div className='bar3'></div>
      <div className='imageandtext'>
        <div className='text'>
        <p className='port' data-aos="fade-right">PORTFOLIO</p>
          <p className='name'>SHRIKANTH</p>
          <p className='surname'>VILVADRINATH</p>
        </div>
        <div className='image' data-aos="zoom-in" data-aos-duration="1000">

        </div>
        
      </div>
      <div className='bar2'></div>
    </div>
  );
};

export default FirstPageReact;
