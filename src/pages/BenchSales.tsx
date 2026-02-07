import React from 'react';
import BenchSalesHeader from './benchsales-components/BenchSalesHeader';
import BenchSalesOverview from './benchsales-components/BenchSalesOverview';
import BenchSalesProcess from './benchsales-components/BenchSalesProcess';
import BenchSalesTrust from './benchsales-components/BenchSalesTrust';
import BenchSalesSkills from './benchsales-components/BenchSalesSkills';
import BenchSalesCTA from './benchsales-components/BenchSalesCTA';

const BenchSales: React.FC = () => {
  return (
    <>
      <BenchSalesHeader />
      <BenchSalesOverview />
      <BenchSalesProcess />
      <BenchSalesTrust />
      <BenchSalesSkills />
      <BenchSalesCTA />

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

export default BenchSales;
