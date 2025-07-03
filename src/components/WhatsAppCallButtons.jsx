import React from 'react'
import './WhatsAppCallButtons.css'

const whatsappNumber = '917696728189' // Replace with your WhatsApp number
const phoneNumber = 'tel:8235151802' // Replace with your phone number

function WhatsAppCallButtons() {
  return (
    <div className="sticky-bottom-buttons">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="fab-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a
        href={phoneNumber}
        className="fab-btn call-btn"
        aria-label="Call us"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  )
}

export default WhatsAppCallButtons 