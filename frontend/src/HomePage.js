import React from 'react';
import FirstPage from './FirstPage';
import ProjectPage from './ProjectPage';
import GamingPage from './GamingPage';
import InternshipPage from './InternshipPage';
import EducationPage from './EducationPage';

const HomePage = () => {
  return (
    <div style={{ width: "90vw" }}>
      <FirstPage />
      <ProjectPage />
      <EducationPage/>
      {/* <GamingPage /> */}
      <InternshipPage/>
    </div>
  );
};

export default HomePage;
