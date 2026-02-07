import { Routes, Route } from 'react-router-dom';
import { useMetaTags } from './hooks/useMetaTags';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Staffing from './pages/Staffing';
import Vendors from './pages/Vendors';
import BenchSales from './pages/BenchSales';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  useMetaTags();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/staffing" element={<Staffing />} />
      <Route path="/vendors" element={<Vendors />} />
      <Route path="/bench-sales" element={<BenchSales />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;