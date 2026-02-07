import React from 'react';
import CareersHeader from './careers-components/CareersHeader';
import CareersBenefits from './careers-components/CareersBenefits';
import CareersContact from './careers-components/CareersContact';
import CareersCulture from './careers-components/CareersCulture';

const Careers: React.FC = () => {
  return (
    <>
      <CareersHeader />
      <CareersBenefits />
      <CareersContact />
      <CareersCulture />

      <style>{`
        .min-vh-50 {
          min-height: 50vh;
        }
        .bg-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
      `}</style>
    </>
  );
};

export default Careers;