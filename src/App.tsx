import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AppRoutes from './routes';
import './App.css';

function App() {
  // useMetaTags();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
        <div className="App">
          <Navbar />
          <main>
            <AppRoutes />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    );
}

export default App;
