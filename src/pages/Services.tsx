import React from 'react';
import ServicesHeader from './services-components/ServicesHeader';
import ServicesGrid from './services-components/ServicesGrid';
import ServicesIndustries from './services-components/ServicesIndustries';
import ServicesCTA from './services-components/ServicesCTA';

const Services: React.FC = () => {
  return (
    <>
      <ServicesHeader />
      <ServicesGrid />
      <ServicesIndustries />
      <ServicesCTA />

      <style>{`
        .min-vh-50 {
          min-height: 50vh;
        }
        .bg-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .service-card {
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
        }
        .hover-shadow:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .service-icon {
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Services;