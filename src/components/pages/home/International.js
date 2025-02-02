import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { data } from "../../../json/international_packages";

class International extends Component {
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
        {/* =============== Destinations area start =============== */}
        <div className="destinations-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-45">
                  <h5>International Holiday Packages</h5>
                </div>
              </div>
            </div>

            <div className="row">
              <OwlCarousel
                className="owl-carousel destinations-1"
                {...destinationsOptions}
              >
                {data.map((item, index) => (
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details/${item.name.replace(/\s+/g, "-").toLowerCase()}`}>
                        {/* <Link to={`${process.env.PUBLIC_URL}/package-details/I${index+1}`}> */}
                        <img src={require(`../../../assets/images/international/${item.image}.jpeg`)} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>{item.Price}</span>/Per Person <br /> (Cost Based on 2 Pax)
                        </h5>
                        <h5>
                          <i className="flaticon-calendar" />{item.Nights}
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details/${item.name.replace(/\s+/g, "-").toLowerCase()}`}>
                          {item.name}
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

                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
        {/* =============== Destinations area end =============== */}
      </>
    );
  }
}

export default International;
