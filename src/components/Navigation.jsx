import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png' // Replace with your logo path
import { useState, useRef } from 'react'
import './Navigation.css'
import './SocialBar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { 
    path: '/about_asha_kiran', 
    label: 'About Us',
    dropdown: [
      { path: '/about_asha_kiran#aboutus-home', label: 'About' },
      // { path: '/about_asha_kiran#aboutus-details', label: 'Details' },
      { path: '/about_asha_kiran#aboutus-team', label: 'Team' },
      { path: '/about_asha_kiran#aboutus-vision', label: 'Vision' },
      { path: '/about_asha_kiran#aboutus-ngo-info', label: 'NGO Info' },
      { path: '/about_asha_kiran#aboutus-testimonials', label: 'Testimonials' },
    ]
  },
  { path: '/our-services_asha_kiran', label: 'Our Services'},
  { path: '/events_asha_kiran', label: 'Events' },
  { path: '/gallery_asha_kiran', label: 'Gallery' },
  { path: '/carrier_asha_kiran', label: 'Carrier'},
  { path: '/blog_asha_kiran', label: 'Blog' },
  { path: '/contact_asha_kiran', label: 'Contact Us' },
]

function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState({})
  const dropdownTimeoutRef = useRef(null)

  const isActive = (path) => location.pathname === path
  const navigate = useNavigate()
  const handleDonate = () => {
    navigate('/donate')
  }

  // Desktop dropdown handlers with delay
  const handleDropdownEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setOpenDropdown(label)
  }
  
  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150) // 150ms delay
  }

  // Mobile dropdown toggle
  const handleMobileDropdown = (label) => {
    setMobileDropdown((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  // Helper to close all mobile dropdowns
  const closeAllMobileDropdowns = () => setMobileDropdown({});

  return (
    <nav className="custom-navbar">
      <div className="nav-inner container-fluid">
        <div className="nav-left">
          <Link to="/" className="nav-left" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="Asha Kiran GRD" className="nav-logo" />
            <div className="nav-brand-text">
              <span className="brand-main">Asha Kiran</span>
              <span className="brand-sub">GRD</span>
            </div>
          </Link>
        </div>
        <button className={`nav-toggle${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(true)} aria-label="Open navigation">
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
        <div className="nav-center desktop-only">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`nav-link-item${link.dropdown ? ' has-dropdown' : ''}`}
                onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleDropdownLeave()}
              >
                {link.dropdown ? (
                  <span className="nav-link dropdown-trigger">
                    {link.label}
                    <span className="dropdown-arrow"><i className="bi bi-chevron-down"></i></span>
                  </span>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link${isActive(link.path) ? ' active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.dropdown && openDropdown === link.label && (
                  <ul 
                    className="dropdown-menu"
                    onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
                    onMouseLeave={() => link.dropdown && handleDropdownLeave()}
                  >
                    {link.dropdown.map((item) => (
                      <li key={item.path}>
                        <Link to={item.path} className="dropdown-link">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-right desktop-only" onClick={handleDonate}>
          <Link to="/donate" className="donate-btn">
            <span className="donate-icon">
              <i className="bi bi-cash-stack"></i>
            </span>
            <span className="donate-text">Donate Now</span>
          </Link>
        </div>
      </div>
      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="Asha Kiran GRD" className="nav-logo" />
          <div className="nav-brand-text">
            <span className="brand-main">Asha Kiran</span>
            <span className="brand-sub">Foundation</span>
          </div>
          <button className="close-btn" onClick={() => { setMenuOpen(false); closeAllMobileDropdowns(); }} aria-label="Close navigation">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path} className={link.dropdown ? 'has-dropdown' : ''}>
              {link.dropdown ? (
                <div className={`mobile-nav-link${isActive(link.path) ? ' active' : ''}`}
                  onClick={() => handleMobileDropdown(link.label)}
                >
                  <span>{link.label}</span>
                  <span className="arrow">
                    <i className={`bi ${mobileDropdown[link.label] ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                  </span>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`mobile-nav-link${isActive(link.path) ? ' active' : ''}`}
                  onClick={() => { setMenuOpen(false); closeAllMobileDropdowns(); }}
                >
                  {link.label}
                </Link>
              )}
              {link.dropdown && mobileDropdown[link.label] && (
                <ul className="mobile-dropdown-menu">
                  {link.dropdown.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="dropdown-link" onClick={() => { setMenuOpen(false); closeAllMobileDropdowns(); }}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-contact">
          <div className="contact-row">
            <span className="contact-icon"><i className="bi bi-envelope-fill"></i></span>
            <span>ashakirangrd11@gmail.com</span>
          </div>
          <div className="contact-row">
            <span className="contact-icon"><i className="bi bi-telephone-fill"></i></span>
            <span>7696728189</span>
          </div>
          <div className="contact-row social-row">
            <a href="https://www.facebook.com/share/1Ccvekj7od/" className="social-icon" target='_blank'><i className="bi bi-facebook"></i></a>
            <a href="https://wa.me/7696728189" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
            <a href="https://youtube.com/@tcs-lh4ry?si=CQpZL5QrSksm52ms" className="social-icon" target='_blank'><i className="bi bi-youtube"></i></a>
          </div>
        </div>
        <Link to="/donate" className="donate-btn mobile-donate">
          <span className="donate-icon">
            <i className="bi bi-cash-stack"></i>
          </span>
          <span className="donate-text">Donate Now</span>
        </Link>
      </div>
      {menuOpen && <div className="mobile-menu-backdrop" onClick={() => { setMenuOpen(false); closeAllMobileDropdowns(); }}></div>}
    </nav>
  )
}

export function SocialBar() {
  return (
    <div className="social-bar">
      <div className="social-bar-inner">
        <a href="https://www.facebook.com/share/1Ccvekj7od/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://wa.me/7696728189" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="https://youtube.com/@tcs-lh4ry?si=CQpZL5QrSksm52ms" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
          <i className="bi bi-youtube"></i>
        </a>
        <a href="mailto:ashakirangrd11@gmail.com" aria-label="Email" className="social-link">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>
    </div>
  )
}

export default Navigation