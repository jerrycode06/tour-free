import React, { Component } from "react";
import BreadCrumb from "../dubai/BreadCrumb";
import { Link } from "react-router-dom";
import package1Img from "../../../assets/images/dubai/package_1.jpg";
import dubaiActivityImg from "../../../assets/images/dubai-activities/dubai_activity20.png"
import dubaiSkylineImg from "../../../assets/images/dubai/DubaiSkyline.jpg"
import package5Img from "../../../assets/images/dubai/package_5.jpg";
import TermsAndConditions from "../tnc/TermsAndConditions";
import dubaiHotelsImg from '../../../assets/images/hotels/dubai-hotels.png'

const BothDestinations = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="container">
        <div className="row">


          {/* DUBAI PACKAGES */}
          <div className="col-md-4">
            <div className="blog-card">
              <Link
                to={`${process.env.PUBLIC_URL}/dubai/destination`}
              >
                <div className="blog-img">
                  <img src={package1Img} alt="" className="img-fluid" style={{ height: "100%", objectFit: "cover" }} />
                </div>
                <div className="blog-details">
                  Dubai Packages
                  <div className="blog-btn"></div>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="blog-card">
              <Link
                to={`${process.env.PUBLIC_URL}/international/destination`}
              >
                <div className="blog-img">
                  <img src={package5Img} alt="" className="img-fluid" style={{height: "100%", objectFit: "cover"}} />
                </div>
                <div className="blog-details">
                  International Packages
                </div>
              </Link>
            </div>
          </div> */}

          {/* DUBAI ACTIVITIES */}
          <div className="col-md-4">
            <div className="blog-card">
              <Link
                to={`${process.env.PUBLIC_URL}/dubai/activities`}
              >
                <div className="blog-img">
                  <img src={dubaiActivityImg} alt="" className="img-fluid" style={{ height: "100%", objectFit: "cover" }} />
                </div>
                <div className="blog-details">
                  Dubai Activities
                  <div className="blog-btn"></div>
                </div>
              </Link>
            </div>
          </div>

          {/* HOTELS */}
          <div className="col-md-4">
            <div className="blog-card">
              <Link
                to={`${process.env.PUBLIC_URL}/dubai/hotels`}
              >
                <div className="blog-img">
                  <img src={dubaiHotelsImg} alt="" className="img-fluid" style={{ height: "100%", objectFit: "cover" }} />
                </div>
                <div className="blog-details">
                  Hotels
                  <div className="blog-btn"></div>
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>

      <TermsAndConditions />
    </div>
  );
};

export default BothDestinations;
