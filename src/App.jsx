import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Router>
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