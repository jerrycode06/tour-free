import React, { Component } from "react";
import { Link } from "react-router-dom";

//Load Image
import package1Img from "../../../assets/images/dubai/package_1.jpg";
import package2Img from "../../../assets/images/dubai/package_2.jpg";
import package3Img from "../../../assets/images/dubai/package_3.jpg";
import package4Img from "../../../assets/images/dubai/package_4.webp";
import package5Img from "../../../assets/images/dubai/package_5.jpg";
import package6Img from "../../../assets/images/dubai/package_6.webp";
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package8Img from "../../../assets/images/dubai/package_8.jpg";
import package9Img from "../../../assets/images/dubai/package_9.jpg";
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
    return (
      <>
        {/* ===============  Package  area start =============== */}
        <div className="package-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-45">
                  <h5>Choose Your Package</h5>
                  <h2>Select Your best Package For Your Travel</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
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
                        <span>$452</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/11`}>
                        Hotel without Burj Khalifa (5 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
                      <img src={package2Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$535</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
                        Hotel with Burj Khalifa (5 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
                      <img src={package3Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$312</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
                        Hotel Basic Dubai Tour (3 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/3`}>
                      <img src={package4Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$395</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/3`}>
                        Hotel with Burj Khalifa (3 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/6`}>
                      <img src={package5Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$512</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />3 night/4 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/6`}>
                        Burj Khalifa Tour (4 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/8`}>
                      <img src={package6Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$640</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/8`}>
                        Hotel with Burj Khalifa (5 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/9`}>
                      <img src={package7Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$558</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/9`}>
                        Hotel without Burj Khalifa (5 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>              

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
                      <img src={package8Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$610</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
                        Hotel with Burj Khalifa (4 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/5`}>
                      <img src={package9Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$530</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/5`}>
                        Hotel without Burj Khalifa (4 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
                      <img src={package10Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$458</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
                        Burj Khalifa Tour (3 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/1`}>
                      <img src={package11Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$376</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />4 night/5 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/1`}>
                        Hotel without Burj Khalifa (3 star)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/14`}>
                      <img src={package12Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$525</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/14`}>
                        Burj Khalifa Tour (3 star hotel)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/13`}>
                      <img src={package13Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$565</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/13`}>
                        Burj Khalifa & Abu Dhabi City Tour (3 star hotel)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/12`}>
                      <img src={package14Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$482</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/12`}>
                        Abu Dhabi City Tour (3 star hotel)
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
                      <img src={package15Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$710</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
                        Burj Khalifa Tour (4 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                      <img src={package16Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$750</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                        Burj Khalifa & Abu Dhabi City Tour (4 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/15`}>
                      <img src={package17Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$670</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/15`}>
                        Abu Dhabi City Tour (4 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/20`}>
                      <img src={package18Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$745</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 Days and 5 night
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
                        Dubai Burj Khalifa Tour (5 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/19`}>
                      <img src={package19Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$786</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/19`}>
                        Burj Khalifa & Abu Dhabi City Tour (5 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                      <img src={package20Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$705</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />5 night/6 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                        Abu Dhabi City Tour (5 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/24`}>
                      <img src={package21Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$505</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/24`}>
                        Basic Dubai Tour (3 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/21`}>
                      <img src={package22Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$545</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/21`}>
                        Abu Dhabi City Tour (3 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/22`}>
                      <img src={package23Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$626</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/22`}>
                        Burj Khalifa & Abu Dhabi City Tour (3 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/23`}>
                      <img src={package24Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$585</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/23`}>
                        Burj Khalifa Tour (3 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/28`}>
                      <img src={package25Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$725</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/28`}>
                        Dubai City Basic Tour (4 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/25`}>
                      <img src={package26Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$765</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/25`}>
                        Abu Dhabi City Tour (4 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/26`}>
                      <img src={package27Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$848</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/26`}>
                        Burj Khalifa & Abu Dhabi City Tour (4 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/27`}>
                      <img src={package28Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$807</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/27`}>
                        Burj Khalifa Tour (4 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/32`}>
                      <img src={package29Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$768</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/32`}>
                        Dubai Basic City Tour (5 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/29`}>
                      <img src={package30Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$810</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/29`}>
                        Abu Dhabi City Tour (5 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/30`}>
                      <img src={package31Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$892</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/30`}>
                        Burj Khalifa & Abu Dhabi City Tour (5 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/31`}>
                      <img src={package32Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>$850</span>/Per Person
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />6 night/7 days
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/31`}>
                        Burj Khalifa Tour (5 star hotel)
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>8K+</span> Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Package  area end =============== */}
      </>
    );
  }
}

export default Packages;
