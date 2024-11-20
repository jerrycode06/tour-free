import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Packages from "../home/Packages";

//Import Images
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package9Img from "../../../assets/images/dubai/package_9.jpg";
import package10Img from "../../../assets/images/dubai/package_10.jpg";
import package12Img from "../../../assets/images/dubai/package_12.jpg";
import package16Img from "../../../assets/images/dubai/package_16.jpg";
class AboutUs extends Component {
  render() {
    const destinationsOptions = {
      stagePadding: 1,
      items: 3,
      loop: true,
      margin: 20,
      smartSpeed: 1500,
      autoplay: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='bx bx-chevron-left' ></i>",
        "<i class='bx bx-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 2,
          nav: false,
          dost: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
    };
    return (
      <>
        <BreadCrumb />

        {/* =============== Destinations area start =============== */}
        <Packages />
        <div className="destinations-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Choose Your Package</h5>
                  <h2>Select Your best Package For Your Travel</h2>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations1Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Spain</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations4Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$145</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Paris Hill Tour
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations5Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$240</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Lake Garda, Spain
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations6Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$300</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Mount Dtna, Spain
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations7Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$120</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Amalfi Costa, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-2"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations7Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$145</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Amalfi Costa, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations8Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$240</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Fench Rivira, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations9Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$300</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Amalfi Costa, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations10Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$120</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Mount Dtna, Italyr
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations2Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Italy</strong>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={package7Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Dubai</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
                        <img
                          src={package9Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$485</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link
                          to={`${process.env.PUBLIC_URL}/package-details/2`}
                        >
                          Burj Khalifa Tour (3 star Hotel)
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
                        <img
                          src={package10Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$610</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link
                          to={`${process.env.PUBLIC_URL}/package-details/4`}
                        >
                          Burj Khalifa Tour (4 star Hotel)
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                        <img
                          src={package16Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$705</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link
                          to={`${process.env.PUBLIC_URL}/package-details/18`}
                        >
                          Abu Dhabi Tour (5 star Hotel)
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                        <img
                          src={package12Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$750</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link
                          to={`${process.env.PUBLIC_URL}/package-details/16`}
                        >
                          Burj Khalifa and Abu Dhabi (4 star Hotel)
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-2"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations7Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$145</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Amalfi Costa, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations8Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$240</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Fench Rivira, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations9Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$300</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Amalfi Costa, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations10Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$120</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Mount Dtna, Italyr
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations2Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>France</strong>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="package-slider-wrap">
                  <img src={destinations1Img} alt="" className="img-fluid" />
                  <div className="pakage-overlay">
                    <strong>Switzerland</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <OwlCarousel
                  className="row owl-carousel destinations-1"
                  {...destinationsOptions}
                >
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations4Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$145</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Paris Hill Tour
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations5Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$240</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Lake Garda, Spain
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations6Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$300</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Mount Dtna, Spain
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                        <img
                          src={destinations7Img}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>$120</span>/Per Person
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                          Amalfi Costa, Italy
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <i className="bx bxs-star" />
                        <strong>
                          <span>1.3K+</span> Rating
                        </strong>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-lg-12">
                <div className="pagination mt-30">
                  <Link to={"#"}>
                    <i className="bx bx-chevron-left" />
                  </Link>
                  <Link to={"#"} className="active">
                    1
                  </Link>
                  <Link to={"#"}>2</Link>
                  <Link to={"#"}>3</Link>
                  <Link to={"#"}>4</Link>
                  <Link to={"#"}>
                    <i className="bx bx-chevron-right" />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* =============== Destinations area end =============== */}
      </>
    );
  }
}

export default AboutUs;
