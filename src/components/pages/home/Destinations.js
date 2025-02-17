import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

//Import Images
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package9Img from "../../../assets/images/dubai/package_9.jpg";
import package10Img from "../../../assets/images/dubai/package_10.jpg";
import package12Img from "../../../assets/images/dubai/package_12.jpg";
import package16Img from "../../../assets/images/dubai/UAE_16.jpg";
import package11Img from "../../../assets/images/dubai/package_11.jpg";

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Props: ", props);
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
        {/* =============== Destinations area start =============== */}
        <div className="destinations-area pt-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Popular Packages</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="">
                <OwlCarousel className="owl-carousel destinations-1"  {...destinationsOptions}>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-local-tour-package`}>
                        <img src={package11Img} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>AED 1376</span>/Per Person <br /> (Cost Based on 2 Pax)
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
                      <Link to={`${process.env.PUBLIC_URL}/package-details/super-saver-dubai-vacation`}>
                        <img src={package10Img} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>AED 1675</span>/Per Person <br /> (Cost Based on 2 Pax)
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
                      <Link to={`${process.env.PUBLIC_URL}/package-details/majestic-dubai`}>
                        <img src={package12Img} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>AED 2230</span>/Per Person <br /> (Cost Based on 2 Pax)
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
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-&-abu-dhabi-wonders`}>
                        <img src={package16Img} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>AED 2575</span>/Per Person <br /> (Cost Based on 2 Pax)
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
                      <Link to={`${process.env.PUBLIC_URL}/package-details/dubai-treasure-hunt`}>
                        <img src={package9Img} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>AED 2738</span>/Per Person <br /> (Cost Based on 2 Pax)
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

                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* =============== Destinations area end =============== */}
      </>
    );
  }
}

export default Destinations;
