import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

//Load Image
import package1Img from "../../../assets/images/dubai/package_1.jpg";
import package2Img from "../../../assets/images/dubai/package_2.jpg";
import package3Img from "../../../assets/images/dubai/package_3.jpg";
import package4Img from "../../../assets/images/dubai/package_4.webp";
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
import package20Img from "../../../assets/images/dubai/package_20.avif";
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
                    <Link to={`${process.env.PUBLIC_URL}/package-details/11`}>
                      <img src={package1Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED452</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/11`}>
                        Hotel without Burj Khalifa
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
                    {/* <div className="package-rating">
                              <i className="bx bxs-star" />
                              <strong><span>1.3K+</span> Rating</strong>
                          </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
                      <img src={package2Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED535</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
                        Hotel with Burj Khalifa
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
                    {/* <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong><span>1.6+</span> Rating</strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/33`}>
                      <img src={package3Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED312</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/33`}>
                        Dubai Basic City Tour
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong><span>2.3K+</span> Rating</strong>
                    </div>
                   </div>
                </div> 

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/3`}>
                      <img src={package4Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED395</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/3`}>
                        Hotel with Burj Khalifa
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong><span>3.4K+</span> Rating</strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/6`}>
                      <img src={package5Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED512</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/6`}>
                        Burj Khalifa Tour
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong><span>2.7K+</span> Rating</strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/8`}>
                      <img src={package6Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED640</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/8`}>
                        Hotel with Burj Khalifa
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>2.9K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/9`}>
                      <img src={package7Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED558</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/9`}>
                        Hotel without Burj Khalifa
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>4.7K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
                      <img src={package8Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED610</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
                        Hotel with Burj Khalifa
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>2.5K+</span> Rating
                      </strong>
                    </div> */}
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
                        <span>AED530</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/5`}>
                        Hotel without Burj Khalifa
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>1.8K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
                      <img src={package10Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED458</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
                        Burj Khalifa Tour
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>2.3K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/1`}>
                      <img src={package11Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED376</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/1`}>
                        Hotel without Burj Khalifa
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>2.6K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/14`}>
                      <img src={package12Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED525</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/14`}>
                        Burj Khalifa Tour
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>2.3K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/13`}>
                      <img src={package13Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED565</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/13`}>
                        Burj Khalifa & Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>2.3K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/12`}>
                      <img src={package14Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED482</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/12`}>
                        Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <i className="bx bxs-star" />
                      <strong>
                        <span>2.3K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
                      <img src={package15Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED710</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
                        Burj Khalifa Tour
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
                    {/* <div className="package-rating mb-3">
                      <i
                        className="bx bxs-city"
                        style={{ marginRight: "15px" }}
                      ></i>
                      <strong>
                        <i className="bx bxs-star" />
                        <span>7K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                      <img src={package16Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED750</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                        Burj Khalifa & Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8.1 K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/15`}>
                      <img src={package17Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED670</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/15`}>
                        Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8.2K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/20`}>
                      <img src={package18Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED745</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 Days and 5 night
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
                        Dubai Burj Khalifa Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>6K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/19`}>
                      <img src={package19Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED786</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/19`}>
                        Burj Khalifa & Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>5K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                      <img src={package20Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED705</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                        Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>9K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/24`}>
                      <img src={package21Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED505</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/24`}>
                        Basic Dubai Tour
                      </Link>
                    </h3>
                    <div className="package-rating mb-3">
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                      <i className="bx bxs-star" />
                    </div>
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>7.8K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/21`}>
                      <img src={package22Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED545</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/21`}>
                        Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/22`}>
                      <img src={package23Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED626</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/22`}>
                        Burj Khalifa & Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>9.0K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/23`}>
                      <img src={package24Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED585</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/23`}>
                        Burj Khalifa Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>6K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/28`}>
                      <img src={package25Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED725</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/28`}>
                        Dubai City Basic Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8.2K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/25`}>
                      <img src={package26Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED765</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/25`}>
                        Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>6.5K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/26`}>
                      <img src={package27Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED848</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/26`}>
                        Burj Khalifa & Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>9.0K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/27`}>
                      <img src={package28Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED807</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/27`}>
                        Burj Khalifa Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8.3K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/32`}>
                      <img src={package29Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED768</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/32`}>
                        Dubai Basic City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8.2K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/29`}>
                      <img src={package30Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED810</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/29`}>
                        Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>4.9K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/30`}>
                      <img src={package31Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED892</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/30`}>
                        Burj Khalifa & Abu Dhabi City Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>7.5K+</span> Rating
                      </strong>
                    </div> */}
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/31`}>
                      <img src={package32Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED850</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/31`}>
                        Burj Khalifa Tour
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
                    {/* <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8.9K+</span> Rating
                      </strong>
                    </div> */}
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
