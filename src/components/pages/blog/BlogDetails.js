import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bd_png from "../../../assets/images/blog/bd.png";
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package9Img from "../../../assets/images/dubai/package_9.jpg";
import package10Img from "../../../assets/images/dubai/package_10.jpg";
import package12Img from "../../../assets/images/dubai/package_12.jpg";
import package16Img from "../../../assets/images/dubai/package_16.jpg";
// import dubaiImg1 from '../../../assets/images/dubai/package_1.jpg'
import BlogData from "../../../json/blog_data.json";
import TermsAndConditions from "../tnc/TermsAndConditions";

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
  }, [id]);

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
                  {/* <img src={require(`../../../assets/images/dubai/${getValue("image")}.jpg`)} alt="" className="img-fluid" /> */}
                  <div className="blog-date">
                    <i className="flaticon-calendar" /> {getValue("Date")}
                  </div>
                </div>
                <div className="blog-texts mt-30">
                  <p>
                    {getValue("content")}
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
                            <img src={package7Img} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details/2`}
                              className="blog-title-sm"
                            >
                             Top 5 Must-Visit Attractions in Dubai
                            </Link>
                            <div className="blog-info">
                              <Link to={`${process.env.PUBLIC_URL}/blog-details/2`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 20 October, 2024
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={package9Img} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details/3`}
                              className="blog-title-sm"
                            >
                              ⁠A Foodie's Guide to Dubai
                            </Link>
                            <div className="blog-info">
                              <Link to={`${process.env.PUBLIC_URL}/blog-details/3`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 5 November, 2024
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={package10Img} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details/4`}
                              className="blog-title-sm"
                            >
                              ⁠Why Dubai is Perfect for Family Holidays?
                            </Link>
                            <div className="blog-info">
                              <Link to={`${process.env.PUBLIC_URL}/blog-details/4`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 20 November, 2024
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={package12Img} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details/5`}
                              className="blog-title-sm"
                            >
                              ⁠ ⁠Experiencing Luxury in Dubai
                            </Link>
                            <div className="blog-info">
                              <Link to={`${process.env.PUBLIC_URL}/blog-details/5`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 25 November, 2024
                              </Link>
                            </div>
                          </div>
                        </li>

                        <li className="blog-card-sm">
                          <div className="blog-img-sm">
                            <img src={package16Img} alt="" />
                          </div>
                          <div className="blog-details-sm">
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details/6`}
                              className="blog-title-sm"
                            >
                              ⁠Best Time to Visit Dubai: A Seasonal Guide
                            </Link>
                            <div className="blog-info">
                              <Link to={`${process.env.PUBLIC_URL}/blog-details/6`} className="blog-date">
                                {" "}
                                <i className="flaticon-calendar" /> 5 December, 2024
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  Blog wrapper area end =============== */}
      {/* TERMS AND CONDITIONS */}
      <TermsAndConditions/>
    </>
  );
};

export default BlogDetails;
