import React from 'react';
import FirstPage from './FirstPage';
import ProjectPage from './ProjectPage';
import GamingPage from './GamingPage';
import InternshipPage from './InternshipPage';

const HomePage = () => {
  return (
    <div>
      <FirstPage />
      <ProjectPage />
      {/* <GamingPage /> */}
      <InternshipPage/>
    </div>
  );
};

export default HomePage;
