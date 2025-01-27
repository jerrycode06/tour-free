import React, { useState, useEffect } from "react";
import "../../assets/css/style.css"; // CSS file for styling
import phoneIcon from "../../assets/images/call-us.png";
import whatsappIcon from "../../assets/images/links/whatsapp-button.png";
import enquireIcon from "../../assets/images/links/enq.png";

const FloatingButtons = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Open modal handler
  const openModal = () => {
    setModalOpen(true);
    // Push a state to the history stack to handle the back button
    window.history.pushState({ modalOpen: true }, "");
  };

  // Close modal handler
  const closeModal = () => {
    setModalOpen(false);
    // Go back in history if the modal was opened by pushing a state
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (event) => {
      if (isModalOpen && event.state?.modalOpen) {
        setModalOpen(false); // Close modal
      }
    };

    // Listen to the popstate event
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isModalOpen]);

  const handlePhoneClick = () => {
    window.location.href = "tel:+971505829005";
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+971505829005";
    const message = "Hello, I would like to enquire about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEnquireNowClick = () => {
    window.location.href = "/";
    window.location.href = "#enquiry-form-id";
  };

  return (
    <div className="z-10 fixed flex gap-3 w-full justify-end items-center bottom-2">
      <button onClick={handlePhoneClick}>
        <img
          src={phoneIcon}
          alt="Phone Icon"
          style={{ width: "100px", height: "40px" }}
        />
      </button>
      <button className="floating-button" onClick={handleWhatsAppClick}>
        <img src={whatsappIcon} alt="WhatsApp Icon" />
      </button>
      <button onClick={openModal}>
        <img
          src={enquireIcon}
          alt="Enquire Icon"
          style={{ width: "100px", height: "60px" }}
        />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" style={{backgroundColor: "#000000eb", padding: "20px"}}>
          <div
            className="contact-inputs p-100 enquiry-form"
            id="enquiry-form-id" style={{background: "#225822d6"}}
          >
            <div className="center enquiry-form-inside">
              <div className="contact-form">
                <form name="trip-enquiry" method="post">
                  <input type="hidden" name="form-name" value="trip-enquiry" />
                  <h5 className="contact-d-head d-flex justify-content-center text-white">
                    Enquire Now
                  </h5>
                  <div className="row">
                    <div className="col-lg-6">
                      <label htmlFor="to" className="text-white">Travelling To</label>
                      <input
                        type="text"
                        placeholder="Travelling To"
                        name="to"
                        style={{width: "100%"}}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="no" className="text-white">No of adults</label>
                      <input
                        type="number"
                        placeholder="No of adults"
                        name="no"
                        style={{width: "100%"}}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="no" className="text-white">No of child</label>
                      <input
                        type="number"
                        placeholder="No of child"
                        name="no"
                        style={{width: "100%"}}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="when" className="text-white">Depart Date</label>
                      <input
                        type="date"
                        placeholder="Depart"
                        name="when"
                        style={{width: "100%"}}
                        required
                      />
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                      <input type="submit" defaultValue="Submit Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <button
              className="close-modal-btn"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#ff0000",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                zIndex: "9999",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtons;
