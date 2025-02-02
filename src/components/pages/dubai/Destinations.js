import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import { Link } from "react-router-dom";
// import Packages from "../home/Packages";

// import data from "../../../dessert-hopper-data.json"

import { DUBAI_PACKAGES } from "../../../json/dubaiPackagesData";

//Import Images
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
import package32Img from "../../../assets/images/dubai/package_32.jpg";
import package33Img from "../../../assets/images/dubai/package_33.jpg";

const packageImages = {
  1: package1Img,
  2: package2Img,
  3: package3Img,
  4: package4Img,
  5: package5Img,
  6: package6Img,
  7: package7Img,
  8: package8Img,
  9: package9Img,
  10: package10Img,
  11: package11Img,
  12: package12Img,
  13: package13Img,
  14: package14Img,
  15: package15Img,
  16: package16Img,
  17: package17Img,
  18: package18Img,
  19: package19Img,
  20: package20Img,
  21: package21Img,
  22: package22Img,
  23: package23Img,
  24: package24Img,
  25: package25Img,
  26: package26Img,
  27: package27Img,
  28: package28Img,
  29: package29Img,
  30: package30Img,
  31: package31Img,
  32: package32Img,
  33: package33Img,
};

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
    return (
      <>
        <BreadCrumb />

        {/* =============== Destinations area start =============== */}

        <div className="container mt-4">
          <div className="row">
            {DUBAI_PACKAGES
              .sort((a, b) => parseInt(a.PricePerPerson.replace(/\D/g, "")) - parseInt(b.PricePerPerson.replace(/\D/g, "")))
              .map((pkg) => (
                <div key={pkg.ID} className="col-12 col-md-6 col-lg-4 mb-4">

                  {/* Dynamic */}
                  <div className="package-card">
                    <div className="package-thumb">
                      <Link to={`${process.env.PUBLIC_URL}/package-details/${pkg.Name.replace(/\s+/g, "-").toLowerCase()}`}>
                        <img
                          src={packageImages[pkg.ID]}
                          alt={pkg.Name}
                          className="img-fluid"
                          style={{ objectFit: "cover" }}
                        />
                      </Link>
                    </div>
                    <div className="package-details">
                      <div className="package-info">
                        <h5>
                          <span>{pkg.PricePerPerson}</span>
                          /Per Person <br />
                          {pkg.CostBasedOn2Pax === "Yes" && '(Cost Based on 2 Pax)'}
                        </h5>
                        <h5>
                          <i className="flaticon-calendar" /> {pkg.NightsCount} nights/{pkg.DaysCount} days
                        </h5>
                      </div>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link to={`${process.env.PUBLIC_URL}/package-details/${pkg.ID}`}>
                          {pkg.Name}
                        </Link>
                      </h3>
                      <div className="package-rating mb-3">
                        <div className="package-rating mb-3">
                          <i
                            className="bx bxs-city"
                            style={{ marginRight: "15px" }}
                          ></i>
                          {[...Array(pkg.HotelStars)].map((_, index) => (
                            <i key={index} className="bx bxs-star" />
                          ))}
                          {/* <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" />
                        <i className="bx bxs-star" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* =============== Destinations area end =============== */}
      </>
    );
  }
}

export default AboutUs;


{/* STATIC DATA */ }

{/* <Packages /> */ }

{/* <OwlCarousel
                className="row owl-carousel destinations-1"
                {...destinationsOptions}
              > */}

{/* <div>
          <div className="package-card">
            <div className="package-thumb">
              <Link to={`${process.env.PUBLIC_URL}/package-details/11`}>
                <img src={package1Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1650</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />3 night/4 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/11`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
                <img src={package2Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1955</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />3 night/4 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/10`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/33`}>
                <img src={package3Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1142</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />3 night/4 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/33`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/6`}>
                <img src={package5Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1870</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />3 night/4 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/6`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/8`}>
                <img src={package6Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2340</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />4 night/5 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/8`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/9`}>
                <img src={package7Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2038</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />4 night/5 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/9`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
                <img src={package8Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2230</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />4 night/5 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
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
                  <span>AED 1936</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />4 night/5 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/5`}>
                  Glittering Dubai - 4N
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
                <img src={package10Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1675</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />4 night/5 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/1`}>
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
                <Link to={`${process.env.PUBLIC_URL}/package-details/1`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/14`}>
                <img src={package12Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1918</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/14`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/13`}>
                <img src={package13Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2065</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/13`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/12`}>
                <img src={package14Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1760</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/12`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
                <img src={package15Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2595</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                <img src={package16Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2738</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/15`}>
                <img src={package17Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2446</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/15`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/20`}>
                <img src={package18Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2720</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 Days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/17`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/19`}>
                <img src={package19Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2870</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/19`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                <img src={package20Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2575</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />5 night/6 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/24`}>
                <img src={package21Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1845</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/24`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/21`}>
                <img src={package22Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 1990</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/21`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/22`}>
                <img src={package23Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2285</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/22`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/23`}>
                <img src={package24Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2138</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/23`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/28`}>
                <img src={package25Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2648</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/28`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/25`}>
                <img src={package26Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2795</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/25`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/26`}>
                <img src={package27Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 3096</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/26`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/27`}>
                <img src={package28Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2948</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/27`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/32`}>
                <img src={package29Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2805</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/32`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/29`}>
                <img src={package30Img} alt="" style={{objectFit: "cover"}} className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 2958</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/29`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/30`}>
                <img src={package31Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 3256</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/30`}>
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
              <Link to={`${process.env.PUBLIC_URL}/package-details/31`}>
                <img src={package32Img} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="package-details">
              <div className="package-info">
                <h5>
                  <span>AED 3105</span>/Per Person <br /> (Cost Based on 2 Pax)
                </h5>
                <h5>
                  <i className="flaticon-calendar" />6 night/7 days
                </h5>
              </div>
              <h3>
                <i className="flaticon-arrival" />
                <Link to={`${process.env.PUBLIC_URL}/package-details/31`}>
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
        </div> */}

{/* <div className="destinations-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-40">
                  <h5>Popular packages</h5>      
                </div>
              </div>
            </div>
            <div className="row">
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
                </div>
              </div>

              <div className="col-lg-9 col-md-9">
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/2`}>
                      <img src={package9Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED485</span>/Per Person
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
                  </div>
                </div>
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
                      <img src={package10Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED610</span>/Per Person
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/4`}>
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
                  </div>
                </div>
                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                      <img src={package16Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED705</span>/Per Person
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/18`}>
                        Abu Dhabi Tour
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
                    <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                      <img src={package12Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>AED750</span>/Per Person
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/16`}>
                        Burj Khalifa and Abu Dhabi
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
              </div>
            </div>

          </div>
        </div> */}