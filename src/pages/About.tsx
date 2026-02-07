import React from 'react';
import AboutHeader from './about-components/AboutHeader';
import AboutWhoWeAre from './about-components/AboutWhoWeAre';
import AboutCoreValues from './about-components/AboutCoreValues';
import AboutMissionVision from './about-components/AboutMissionVision';
import AboutWhatWeDo from './about-components/AboutWhatWeDo';

const About: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <AboutWhoWeAre />
      <AboutCoreValues />
      <AboutMissionVision />
      <AboutWhatWeDo />
    </>
  );
};

export default About;