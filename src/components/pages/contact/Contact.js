import React, { Component } from "react";
import { Link } from "react-router-dom";
class AboutUs extends Component {
  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const handleWhatsAppClick = () => {
      const phoneNumber = "+918447510420"; // Replace with the WhatsApp number
      const message = "Hello, I would like to enquire about your services."; // Default message
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Contact US</h2>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                      <i className="bx bx-chevron-right" />
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        <div className="contact-wrapper pt-90">
          <div className="contact-cards">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-arrival" />
                    </div>
                    <div className="contact-info">
                      <h5>Address</h5>
                      <p>C13-28-370 Hamsah A Building Al Karama Dubai, United Arab Emirates (87556)</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-customer-service" />
                    </div>
                    <div className="contact-info">
                      <h5>Phone</h5>
                      <p>+971-54-401-3834</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <i className="flaticon-thumbs-up" />
                    </div>
                    <div className="contact-info">
                      <h5>Social Media</h5>
                      <ul className="contact-icons">
                        <li>
                          <a href={"https://www.instagram.com/deserthoppers"}>
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href={"https://www.facebook.com/share/18BQscnH9K/?mibextid=LQQJ4d"}>
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <Link onClick={handleWhatsAppClick}>
                            <i className="bx bxl-whatsapp" />
                          </Link>
                        </li>
                        {/* <li>
                          <Link to={"#"}>
                            <i className="bx bxl-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxl-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to={"#"}>
                            <i className="bx bxl-whatsapp" />
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact-inputs pt-100">
              <div className="row">
                <div>
                  <div className="contact-details">
                    <h5 className="contact-d-head">Get In Touch</h5>
                    <p>
                      Get in touch for more details and make your trip happening
                    </p>
                    <ul className="office-clock">
                      <li>
                        <div className="clock-icon">
                          <i className="flaticon-clock-1" />
                        </div>
                        <div className="clock-info">
                          <h5>Open Hour</h5>
                          <p>
                            Mon - Sat At <br /> 10.00Am to 6.00PM
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="clock-icon">
                          <i className="flaticon-clock-1" />
                        </div>
                        <div className="clock-info">
                          <p>Sunday Office Close</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                                <div className="contact-form">
                                    <form action="#" >
                                        <h5 className="contact-d-head">Contact Us</h5>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Full Name" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Subject" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" placeholder="Your Email" required/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Phone" required/>
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea cols={30} rows={7} placeholder="Write Message" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
