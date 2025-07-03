import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation, { SocialBar } from './components/Navigation'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurServices from './pages/OurServices'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Career from './pages/Career'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import WhatsAppCallButtons from './components/WhatsAppCallButtons'
import Donate from './pages/Donate'
import './App.css'
import { useEffect } from 'react';

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return null;
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <div className="App">
        <SocialBar />
        <Navigation />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_asha_kiran" element={<AboutUs />} />
            <Route path="/our-services_asha_kiran" element={<OurServices />} />
            <Route path="/events_asha_kiran" element={<Events />} />
            <Route path="/gallery_asha_kiran" element={<Gallery />} />
            <Route path="/carrier_asha_kiran" element={<Career />} />
            <Route path="/blog_asha_kiran" element={<Blog />} />
            <Route path="/contact_asha_kiran" element={<ContactUs />} />
            <Route path='/donate' element={<Donate />} />
          </Routes>
        </main>
        <WhatsAppCallButtons />
      </div>
    </Router>
  )
}

export default App