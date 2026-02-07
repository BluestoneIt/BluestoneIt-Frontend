import React from 'react';
import HomeHero from './home-components/HomeHero';
import HomeTrustBar from './home-components/HomeTrustBar';
import HomeAboutSnapshot from './home-components/HomeAboutSnapshot';
import HomeStaffingSolutions from './home-components/HomeStaffingSolutions';
import HomeHowWeAddValue from './home-components/HomeHowWeAddValue';
import HomeServicesOverview from './home-components/HomeServicesOverview';
import HomeApplicantOutsourcing from './home-components/HomeApplicantOutsourcing';
import HomeWhyChooseUs from './home-components/HomeWhyChooseUs';
import HomeCTA from './home-components/HomeCTA';

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeTrustBar />
      <HomeAboutSnapshot />
      <HomeStaffingSolutions />
      <HomeHowWeAddValue />
      <HomeServicesOverview />
      <HomeApplicantOutsourcing />
      <HomeWhyChooseUs />
      <HomeCTA />

      <style>{`
        .trust-icon {
          font-size: 2.5rem;
          color: #667eea;
        }
        .industry-card {
          transition: all 0.3s ease;
        }
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .industry-icon {
          font-size: 2rem;
          color: #667eea;
        }
      `}</style>
    </>
  );
};

export default Home;