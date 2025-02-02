import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

//Load Image
import package1Img from "../../../assets/images/dubai/package_1.jpg";
import package2Img from "../../../assets/images/dubai/package_2.jpg";
import package3Img from "../../../assets/images/dubai/package_3.jpg";
import package4Img from "../../../assets/images/dubai/package_4.jpg";
import package5Img from "../../../assets/images/dubai/package_5.jpg";
import package6Img from "../../../assets/images/dubai/package_6.webp";
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package8Img from "../../../assets/images/dubai/package_8.jpg";
import package9Img from "../../../assets/images/dubai/UAE_9.jpg";
import package10Img from "../../../assets/images/dubai/package_10.jpg";
import package11Img from "../../../assets/images/dubai/package_11.jpg";
import package12Img from "../../../assets/images/dubai/package_12.jpg";
import package13Img from "../../../assets/images/dubai/package_13.jpg";
import package14Img from "../../../assets/images/dubai/package_14.jpg";
import package15Img from "../../../assets/images/dubai/package_15.jpg";
import package16Img from "../../../assets/images/dubai/package_16.jpg";
import package17Img from "../../../assets/images/dubai/package_17.jpg";
import package18Img from "../../../assets/images/dubai/package_18.jpg";
import package19Img from "../../../assets/images/dubai/package_19.avif";
import package20Img from "../../../assets/images/dubai/package_20.jpg";
import package21Img from "../../../assets/images/dubai/package_21.avif";
import package22Img from "../../../assets/images/dubai/package_22.jpg";
import package23Img from "../../../assets/images/dubai/package_23.jpg";
import package24Img from "../../../assets/images/dubai/package_24.jpg";
import package25Img from "../../../assets/images/dubai/package_25.jpg";
import package26Img from "../../../assets/images/dubai/package_26.jpg";
import package27Img from "../../../assets/images/dubai/package_27.jpg";
import package28Img from "../../../assets/images/dubai/package_28.jpg";
import package29Img from "../../../assets/images/dubai/package_29.jpg";
import package30Img from "../../../assets/images/dubai/package_30.jpg";
import package31Img from "../../../assets/images/dubai/package_31.jpg";
import package32Img from "../../../assets/images/dubai/package_x.png";

class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const destinationsOptions = {
      stagePadding: 1,
      items: 3,
      loop: true, // Enables infinite scrolling
      margin: 20, // Space between items
      smartSpeed: 3000, // Animation speed for transitions
      autoplay: true, // Enables auto-scrolling
      autoplayTimeout: 3000, // Delay between auto-scrolls (3 seconds)
      autoplayHoverPause: true, // Pauses auto-scroll on hover
      dots: false, // Disable dots
      nav: true, // Enable navigation arrows
      navText: [
        `<button class="custom-arrow custom-prev">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>`,
        `<button class="custom-arrow custom-next">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>`,
      ],
      responsive: {
        0: {
          items: 1, // Items to display on small screens
          // nav: true,
          dots: false,
        },
        600: {
          items: 2, // Items to display on medium screens
          // nav: true,
          dots: false,
        },
        1000: {
          items: 3, // Items to display on large screens
          // nav: true,
          loop: true,
        },
      },
    };

    return (
      <>
        {/* ===============  Package  area start =============== */}
        <div className="package-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-45">
                  <h5>UAE Packages</h5>
                </div>
              </div>
            </div>

            <div className="row">
              <OwlCarousel
                className="row owl-carousel destinations-1"
                {...destinationsOptions}
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-super-saver-with-5-star`}>
                      <img src={package1Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1650</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-super-saver-with-5-star`}>
                        Dubai Super Saver with 5 star
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>

                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/best-selling-dubai-tour-package`}>
                      <img src={package2Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1955</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/best-selling-dubai-tour-package`}>
                        Best Selling Dubai Tour Package
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>

                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-super-saver-with-3-star`}>
                      <img src={package3Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1142</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-super-saver-with-3-star`}>
                        Dubai Super Saver with 3 star
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                    
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/reasonable-dubai-package`}>
                      <img src={package5Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1870</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/reasonable-dubai-package`}>
                        Reasonable Dubai Package
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/tours-in-glitzy-dubai`}>
                      <img src={package6Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2340</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/tours-in-glitzy-dubai`}>
                        Tours in Glitzy Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/breathtaking-dubai-getaway`}>
                      <img src={package7Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2038</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/breathtaking-dubai-getaway`}>
                        Breathtaking Dubai Getaway
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>

                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/majestic-dubai`}>
                      <img src={package8Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2230</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/majestic-dubai`}>
                        Majestic Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>

                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/5`}>
                      <img src={package9Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1936</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/glittering-dubai`}>
                        Glittering Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/super-saver-dubai-vacation`}>
                      <img src={package10Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1675</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/super-saver-dubai-vacation`}>
                        Super Saver Dubai Vacation
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                 
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-local-tour-package`}>
                      <img src={package11Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1376</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-local-tour-package`}>
                        Dubai Local Tour Package
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
              
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-dreamland-adventure-&-wonders`}>
                      <img src={package12Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1918</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-dreamland-adventure-&-wonders`}>
                        Dubai Dreamland Adventure & Wonders
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
              
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dazzling-dubai`}>
                      <img src={package13Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2065</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dazzling-dubai`}>
                        Dazzling Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/wonderful-dubai-holiday`}>
                      <img src={package14Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1760</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/wonderful-dubai-holiday`}>
                        Wonderful Dubai Holiday
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/feel-the-magic-of-love-in-dubai`}>
                      <img src={package15Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2595</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/feel-the-magic-of-love-in-dubai`}>
                        Feel the Magic of Love in Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  </div>
                </div>








                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-treasure-hunt`}>
                      <img src={package16Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2738</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-treasure-hunt`}>
                        Dubai Treasure Hunt
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/ultimate-dubai-experience`}>
                      <img src={package17Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2446</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/ultimate-dubai-experience`}>
                        Ultimate Dubai Experience
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                 
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-majestic-mix`}>
                      <img src={package18Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2720</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 Days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-majestic-mix`}>
                        Dubai Majestic Mix
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-explorer-family-package`}>
                      <img src={package19Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2870</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-explorer-family-package`}>
                        Dubai Explorer Family Package
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-&-abu-dhabi-wonders`}>
                      <img src={package20Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2575</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-&-abu-dhabi-wonders`}>
                        Dubai & Abu Dhabi Wonders
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                   
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-delights`}>
                      <img src={package21Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1845</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-delights`}>
                        Dubai Delights
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                   
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-and-abu-dhabi-discoveries`}>
                      <img src={package22Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 1990</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-and-abu-dhabi-discoveries`}>
                        Dubai and Abu Dhabi discoveries
                      </Link>
                    </h3>
                    <div className="package-ratingn mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/romantic-escapes-in-dubai`}>
                      <img src={package23Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2285</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/romantic-escapes-in-dubai`}>
                        Romantic Escapes in Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/unforgettable-dubai`}>
                      <img src={package24Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2138</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/unforgettable-dubai`}>
                        Unforgettable Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-delights-serving-you-just-deserts`}>
                      <img src={package25Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2648</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-delights-serving-you-just-deserts`}>
                        Dubai Delights- Serving you just Deserts
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/best-of-dubai-&-abu-dhabi`}>
                      <img src={package26Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2795</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/best-of-dubai-&-abu-dhabi`}>
                        Best of Dubai & Abu Dhabi
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                    
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/romantic-gateway-to-dubai-arabian-nights-&-city-life`}>
                      <img src={package27Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 3096</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/romantic-gateway-to-dubai-arabian-nights-&-city-life`}>
                        Romantic Gateway to Dubai - Arabian Nights & City Life
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                   
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/exciting-trip-to-dubai`}>
                      <img src={package28Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2948</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/exciting-trip-to-dubai`}>
                        Exciting trip to Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/discover-dubai`}>
                      <img src={package29Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2805</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/discover-dubai`}>
                        Discover Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                   
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-and-abu-dhabi-escapes-with-grand-mosque-&-baps-temple-visit`}>
                      <img src={package30Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 2958</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-and-abu-dhabi-escapes-with-grand-mosque-&-baps-temple-visit`}>
                        Dubai and Abu Dhabi Escapes with Grand Mosque & BAPS Temple Visit
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                  
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/luxury-dubai`}>
                      <img src={package31Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 3256</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/luxury-dubai`}>
                        Luxury Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                   
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/limitless-with-dubai`}>
                      <img src={package32Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED 3105</span>/Per Person <br/> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/limitless-with-dubai`}>
                        Limitless with Dubai
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                   
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
        {/* ===============  Package  area end =============== */}
      </>
    );
  }
}

export default Packages;
