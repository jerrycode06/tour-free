import React, { useEffect, useState } from "react";

import b_sm_5 from "../../../assets/images/blog/b-sm5.png";

import bd_png from "../../../assets/images/blog/bd.png";
import b_g_1 from "../../../assets/images/blog/blog-g-1.png";
import b_g_2 from "../../../assets/images/blog/blog-g-2.png";
import b_g_3 from "../../../assets/images/blog/blog-g-3.png";
import c_1 from "../../../assets/images/blog/c-1.png";
import c_2 from "../../../assets/images/blog/c-2.png";
import c_3 from "../../../assets/images/blog/c-3.png";

import b_sm_1 from "../../../assets/images/blog/b-sm1.png";
import b_sm_2 from "../../../assets/images/blog/b-sm2.png";
import b_sm_3 from "../../../assets/images/blog/b-sm3.png";
import b_sm_4 from "../../../assets/images/blog/b-sm4.png";
import BlogData from "../../../json/blog_data.json";

import sidebarBanner from "../../../assets/images/sidebar-banner.png";

import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState(BlogData.data || []);
  const { id } = useParams();

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    scrollTop();
  }, []);

  const getValue = (key) => {
    console.log({blogData})
    let foundItem = blogData.find((ele) => ele.id === Number(id));
    return foundItem ? foundItem[key] : "Miss"; 
  };

  return (
    <>
      {/* ===============  breadcrumb area end =============== */}
      {/* ===============  Blog wrapper area start =============== */}
      <div className="blog-details-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="blog-title-xl mb-30">
                  <h3>
                    {getValue("title")}
                  </h3>
                </div>
                <div className="blog-img-xl">
                  <img src={bd_png} alt="" className="img-fluid" />
                  <div className="blog-date">
                    <i className="flaticon-calendar" /> {getValue("Date")}
                  </div>
                </div>
                <div className="blog-texts mt-30">
                  <p>
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus.
                  </p>
                  <p className="mt-20">
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus. Donec mauris
                    metus, iaculis non interdum et, scelerisque luctus mauris.
                    Morbi ac lectus euismod, vehicula est sit amet, malesuada
                    quam. Vivamus sed eros eu nibh scelerisque porta. Ut nec sem
                    eget est rutrum facilisis. Donec purus tortor, scelerisque
                    ut massa vitae, varius accumsan mauris. Nullam ut metus at
                    lacus porta aliquet. Curabitur eu facilisis dolor, sed
                    sagittis enim. Suspendisse venenatis urna nec tortor
                    porttitor interdum. Mauris convallis tempus dictum. Morbi
                    convallis sapien at sem pellentesque maximus.
                  </p>
                  <p>
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="blog-popular mt-40">
                      <h5 className="categorie-head">Popular Post</h5>
                      <ul>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={b_sm_1} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              className="blog-title-sm"
                            >
                              Lake Garda
                            </Link>
                            <div className="blog-info">
                              <Link to={`#`} className="blog-writer">
                                <i className="flaticon-user" /> Dina Jems
                              </Link>
                              <Link to={`#`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 11 April,
                                2021
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={b_sm_2} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              className="blog-title-sm"
                            >
                              Parish Hill
                            </Link>
                            <div className="blog-info">
                              <Link to={`#`} className="blog-writer">
                                <i className="flaticon-user" /> Dina Jems
                              </Link>
                              <Link to={`#`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 11 April,
                                2021
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={b_sm_3} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              className="blog-title-sm"
                            >
                              Mount Dtna
                            </Link>
                            <div className="blog-info">
                              <Link to={`#`} className="blog-writer">
                                <i className="flaticon-user" /> Dina Jems
                              </Link>
                              <Link to={`#`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 11 April,
                                2021
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={b_sm_4} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              className="blog-title-sm"
                            >
                              Lake Geneva
                            </Link>
                            <div className="blog-info">
                              <Link to={`#`} className="blog-writer">
                                <i className="flaticon-user" /> Dina Jems
                              </Link>
                              <Link to={`#`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 10 April,
                                2021
                              </Link>
                            </div>
                          </div>
                        </li>

                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={b_sm_5} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              className="blog-title-sm"
                            >
                              Franch Rivira
                            </Link>
                            <div className="blog-info">
                              <Link to={`#`} className="blog-writer">
                                <i className="flaticon-user" /> Dina Jems
                              </Link>
                              <Link to={`#`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 10 April,
                                2021
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="blog-tag mt-40">
                      <h5 className="categorie-head">Tag Tour</h5>
                      <ul>
                        <li>
                          <Link to={`#`}>Adventure</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Trip</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Guided</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Historical</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Road Trips</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Tourist</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Tourist</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Selivia</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Tour Guide</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Cultural</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Natural</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Journey</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="sidebar-banner mt-40">
                      <img src={sidebarBanner} alt="" className="img-fluid" />
                      <div className="sidebar-banner-overlay">
                        <div className="sidebar-content">
                          <h3>Get 50% Off In Dubai Tour</h3>
                          <div className="sidebar-banner-btn">
                            <Link to={"#"}>Book Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  Blog wrapper area end =============== */}
    </>
  );
};

export default BlogDetails;
