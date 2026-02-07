import React from 'react';
import StaffingHeader from './staffing-components/StaffingHeader';
import StaffingOverview from './staffing-components/StaffingOverview';
import StaffingRoles from './staffing-components/StaffingRoles';
import StaffingServices from './staffing-components/StaffingServices';
import StaffingBenefits from './staffing-components/StaffingBenefits';
import StaffingCTA from './staffing-components/StaffingCTA';

const Staffing: React.FC = () => {
  return (
    <>
      <StaffingHeader />
      <StaffingOverview />
      <StaffingRoles />
      <StaffingServices />
      <StaffingBenefits />
      <StaffingCTA />

      <style>{`
        .min-vh-50 {
          min-height: 50vh;
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

export default Staffing;
