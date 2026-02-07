import React from 'react';
import VendorsHeader from './vendors-components/VendorsHeader';
import VendorsEngagement from './vendors-components/VendorsEngagement';
import VendorsExpectations from './vendors-components/VendorsExpectations';
import VendorsTechFocus from './vendors-components/VendorsTechFocus';
import VendorsDeliveryProcess from './vendors-components/VendorsDeliveryProcess';
import VendorsCTA from './vendors-components/VendorsCTA';

const Vendors: React.FC = () => {
  return (
    <>
      <VendorsHeader />
      <VendorsEngagement />
      <VendorsExpectations />
      <VendorsTechFocus />
      <VendorsDeliveryProcess />
      <VendorsCTA />

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

export default Vendors;