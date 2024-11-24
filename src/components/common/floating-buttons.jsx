import React from "react";
import "../../assets/css/style.css"; // CSS file for styling
import phoneIcon from '../../assets/images/call.png'; 
import whatsappIcon from '../../assets/images//whatsapp-logo.png'; 
import enquireIcon from '../../assets/images/enquire-now.png'; 
import { useState } from "react";

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
  
  const [isModalOpen, setModalOpen] = useState(false);

  // Handle opening the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEnquireNowClick = () => {
    window.location.href = "/";
    window.location.href = "#enquiry-form-id"; // Replace with your specific page/section
  };

  return (
    <div className="floating-buttons">
      <button className="floating-button" onClick={handlePhoneClick}>
        <img src={phoneIcon} alt="Phone Icon" />
      </button>
      <button className="floating-button" onClick={handleWhatsAppClick}>
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </button>
      <button className="floating-button open-modal-btn"onClick={openModal}>
        <img src={enquireIcon} alt="Enquire Icon" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="contact-inputs p-100 enquiry-form" id="enquiry-form-id">
            <div className="center enquiry-form-inside">
              <div className="contact-form">
                <form name="trip-enquiry" method="post">
                  <input type="hidden" name="form-name" value="trip-enquiry" />
                  <h5 className="contact-d-head d-flex justify-content-center">
                    Enquire Now
                  </h5>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="to">Travelling To</label>
                      <input
                        type="text"
                        placeholder="Travelling To"
                        name="to"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="no">No of adults</label>
                      <input
                        type="number"
                        placeholder="No of adults"
                        name="no"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="no">No of child</label>
                      <input
                        type="number"
                        placeholder="No of child"
                        name="no"
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="when">Depart Date</label>
                      <input type="date" placeholder="Depart" name="when" required />
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                      <input type="submit" defaultValue="Submit Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <button className="close-modal-btn" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtons;
