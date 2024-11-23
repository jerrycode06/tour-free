import React from "react";
import "../../assets/css/style.css"; // CSS file for styling

const FloatingButtons = () => {
  // Handlers
  const handlePhoneClick = () => {
    window.location.href = "tel:+919990766146"; // Replace with your phone number
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+919990766146"; // Replace with the WhatsApp number
    const message = "Hello, I would like to enquire about your services."; // Default message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEnquireNowClick = () => {
    window.location.href = "/enquire-now"; // Replace with your specific page/section
  };

  return (
    <div className="floating-buttons">
      <button className="floating-button caller" onClick={handlePhoneClick}>
        📞
      </button>
      <button className="floating-button whatsapp" onClick={handleWhatsAppClick}>
        💬
      </button>
      <button className="floating-button enquire" onClick={handleEnquireNowClick}>
        ✉️
      </button>
    </div>
  );
};

export default FloatingButtons;
