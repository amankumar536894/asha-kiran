import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png' // Replace with your logo path
import { useState, useRef } from 'react'
import './Navigation.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/our-work', label: 'Our Work', dropdown: [
    { path: '/campaigns', label: 'Campaigns' }
  ] },
  { path: '/sponsors', label: 'Sponsors' },
  { path: '/media', label: 'Media', dropdown: [
    { path: '/blog', label: 'Blog' },
    { path: '/gallery', label: 'Gallery' }
  ] },
  { path: '/contact', label: 'Contact Us' },
]

function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileDropdown, setMobileDropdown] = useState({})
  const dropdownTimeoutRef = useRef(null)

  const isActive = (path) => location.pathname === path

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

  return (
    <nav className="custom-navbar">
      <div className="nav-inner container-fluid">
        <div className="nav-left">
          <img src={logo} alt="Asha Kiran GRD" className="nav-logo" />
          <div className="nav-brand-text">
            <span className="brand-main">Asha Kiran</span>
            <span className="brand-sub">GRD</span>
          </div>
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
        <div className="nav-right desktop-only">
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
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path} className={link.dropdown ? 'has-dropdown' : ''}>
              <div className={`mobile-nav-link${isActive(link.path) ? ' active' : ''}`}
                onClick={() => link.dropdown ? handleMobileDropdown(link.label) : setMenuOpen(false)}
              >
                <span>{link.label}</span>
                {link.dropdown && (
                  <span className="arrow">
                    <i className={`bi ${mobileDropdown[link.label] ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                  </span>
                )}
              </div>
              {link.dropdown && mobileDropdown[link.label] && (
                <ul className="mobile-dropdown-menu">
                  {link.dropdown.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="dropdown-link" onClick={() => setMenuOpen(false)}>{item.label}</Link>
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
            <span>info@ashakiran@gmail.com</span>
          </div>
          <div className="contact-row">
            <span className="contact-icon"><i className="bi bi-telephone-fill"></i></span>
            <span>8235151802</span>
          </div>
          <div className="contact-row social-row">
            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-whatsapp"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
        <Link to="/donate" className="donate-btn mobile-donate">
          <span className="donate-icon">
            <i className="bi bi-cash-stack"></i>
          </span>
          <span className="donate-text">Donate Now</span>
        </Link>
      </div>
      {menuOpen && <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
    </nav>
  )
}

export default Navigation 