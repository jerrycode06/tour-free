import React, { Component } from "react";
import BreadCrumb from "../dubai/BreadCrumb";
import { Link } from "react-router-dom";
import package1Img from "../../../assets/images/dubai/package_1.jpg";
import package5Img from "../../../assets/images/dubai/package_5.jpg";

const BothDestinations = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="blog-card">
            <Link
                    to={`${process.env.PUBLIC_URL}/dubai/destination`}
                    // className="btn-common-sm"
                  >
              <div className="blog-img">
                <img src={package1Img} alt="" className="img-fluid" />
              </div>
              <div className="blog-details">
                  Dubai Packages

                <div className="blog-btn">

                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="blog-card">
            <Link
                    to={`${process.env.PUBLIC_URL}/international/destination`}
                    // className="btn-common-sm"
                  >
              <div className="blog-img">
                <img src={package5Img} alt="" className="img-fluid" />
              </div>
              <div className="blog-details">
                 International Packages
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BothDestinations;
