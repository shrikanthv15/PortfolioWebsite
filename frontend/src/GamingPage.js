import React from 'react';
import './GamingPage.css'; 

const GamingPage = () => {
  return (
    <div className="gamingpage">
      <h1 className="two1">GAMING</h1>
      <a href="https://www.twitch.tv/agronout_15">
        <h1 className="two1 link">Catch Me Live On Twitch</h1>
        <h1 className="two1 twitch">TWITCH.TV/AGRONOUT_15</h1>
      </a>
      <div className="gamingvideo">
        <br />
        <br />
        <br />
        <div style={{ width: '100%', position: 'relative' }}>
          <video autoPlay muted loop style={{ width: '100%', height: '100%', opacity: '0.2' }}>
            <source src="../assets/gaming.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default GamingPage;
