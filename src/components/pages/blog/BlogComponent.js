import React, { Component } from "react";
import { Link } from "react-router-dom";

import package1Img from "../../../assets/images/dubai/package_1.jpg";
import package2Img from "../../../assets/images/dubai/package_2.jpg";
import package3Img from "../../../assets/images/dubai/package_3.jpg";
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package5Img from "../../../assets/images/dubai/package_5.jpg";
import package8Img from "../../../assets/images/dubai/package_8.jpg";
import TermsAndConditions from "../tnc/TermsAndConditions";

class BlogComponent extends Component {
  render() {
    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Blog</h2>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                      <i className="bx bx-chevron-right" />
                    </li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        {/* ===============  Blog wrapper area start =============== */}
        <div className="blog-wrapper pt-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={package1Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 10 October, 2024
                    </div>
                  </div>
                  <div className="blog-details">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/1`}
                      className="blog-title"
                    >
                      Discover Dubai: A City of Wonders.
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details/1`}
                        className="btn-common-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={package2Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 20 October, 2024
                    </div>
                  </div>
                  <div className="blog-details">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/2`}
                      className="blog-title"
                    >
                      Top 5 Must-Visit Attractions in Dubai
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details/2`}
                        className="btn-common-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={package3Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" />5 November, 2024
                    </div>
                  </div>
                  <div className="blog-details">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/3`}
                      className="blog-title"
                    >
                      ⁠A Foodie's Guide to Dubai
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details/3`}
                        className="btn-common-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={package7Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 20 November 2024
                    </div>
                  </div>
                  <div className="blog-details">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/4`}
                      className="blog-title"
                    >
                      ⁠Why Dubai is Perfect for Family Holidays?
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details/4`}
                        className="btn-common-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={package5Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 25 November, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/5`}
                      className="blog-title"
                    >
                      ⁠ ⁠Experiencing Luxury in Dubai
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details/5`}
                        className="btn-common-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog-card">
                  <div className="blog-img">
                    <img src={package8Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" />5 December, 2024
                    </div>
                  </div>
                  <div className="blog-details">
                    <Link
                      to={`${process.env.PUBLIC_URL}/blog-details/6`}
                      className="blog-title"
                    >
                      ⁠Best Time to Visit Dubai: A Seasonal Guide
                    </Link>
                    <div className="blog-btn">
                      <Link
                        to={`${process.env.PUBLIC_URL}/blog-details/6`}
                        className="btn-common-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="pagination mt-50">
                                <Link to={"#"}><i className="bx bx-chevron-left" /></Link>
                                <Link to={"#"} className="active">1</Link>
                                <Link to={"#"} >2</Link>
                                <Link to={"#"} >3</Link>
                                <Link to={"#"} >4</Link>
                                <Link to={"#"}><i className="bx bx-chevron-right" /></Link>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
        {/* ===============  Blog wrapper area end =============== */}
        {/* Terms and Conditons */}
        <TermsAndConditions />
      </>
    );
  }
}

export default BlogComponent;
