import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pr_1 from "../../../assets/images/package/pr-1.png";
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package9Img from "../../../assets/images/dubai/package_9.jpg";
import package10Img from "../../../assets/images/dubai/package_10.jpg";
import package12Img from "../../../assets/images/dubai/package_12.jpg";
import package16Img from "../../../assets/images/dubai/package_16.jpg";
import "react-datepicker/dist/react-datepicker.css";
import PackagesData from "../../../dessert-hopper-data.json";
import { data } from "../../../json/international_packages";

function PackageDetails() {
  const [packageData, setPackageData] = useState(PackagesData.data || []);
  const [internationalPackageData, setInternationalPackageData] = useState(
    data || []
  );
  const { id } = useParams();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTop();
  }, [internationalPackageData, id]);

  const getValue = (key) => {
    let foundItem;
    if (id.startsWith("I")) {
      foundItem = internationalPackageData.find((ele) => ele.id === id);
    } else {
      foundItem = packageData.find((ele) => ele.id === Number(id));
    }
    return foundItem ? foundItem[key] : "Miss"; // Handle missing keys or items
  };

  const extractPrice = (str) => {
    const match = str.match(/AED\s+(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  };

  return (
    <>
      {/* ===============  breadcrumb area start =============== */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="breadcrumb-wrap"></div>
            </div>
          </div>
        </div>
      </div>
      {/* ===============  breadcrumb area end =============== */}
      <div className="package-details-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="package-details">
                {/* <div className="package-thumb">
                    <img src={pd_thumb} alt="" />
                  </div> */}
                <div className="package-header">
                  <div className="package-title">
                    <h3>
                      {getValue("name")} - <br />
                      AED {extractPrice(getValue("Price"))}/person
                    </h3>
                    <strong>
                      <i className="flaticon-arrival" />
                      {getValue("Destination Name")}
                    </strong>
                  </div>
                  <div className="pd-review">
                    <p>Excellent</p>
                    <ul>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bxs-star" />
                      </li>
                      <li>
                        <i className="bx bx-star" />
                      </li>
                    </ul>
                    {/* <p>800 Review</p> */}
                  </div>
                </div>
                {/* <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Duration</strong>
                        <p>Daily Tour</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tour Type</strong>
                        <p>{getValue("daysCount")} Days</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Group Size</strong>
                        <p>30 People</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-translate" />
                      <div className="info-texts">
                        <strong>Languages</strong>
                        <p>Any Language</p>
                      </div>
                    </div>
                  </div> */}
                <div className="package-tab">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <i className="flaticon-info" />
                        Information
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <i className="flaticon-clipboard" />
                        Travel Plan
                      </button>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {" "}
                          <i className="flaticon-gallery" />
                          Our Gallary
                        </button>
                      </li> */}
                  </ul>
                  <div
                    className="tab-content p-tab-content"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="tab-content-1">
                            <div className="p-overview">
                              <h5>Overview</h5>
                              <p>{getValue("Overview")}</p>
                              {/* <p>Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique commodo fringilla. Duis aliquet varius mauris eget rutrum. Nullam sit amet justo consequat, bibendum orci in, convallis enim. Proin convallis neque viverra finibus cursus. Mauris lacinia lacinia erat in finibus. In non enim libero.Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p> */}
                            </div>
                            <div className="p-details-table">
                              <table className="table caption-top">
                                <tbody>
                                  <tr>
                                    <td>Destination</td>
                                    <td>{getValue("Destination Name")}</td>
                                  </tr>
                                  <tr>
                                    <td>Departure</td>
                                    <td>Yes</td>
                                  </tr>
                                  {/* <tr>
                                      <td>Departure Time</td>
                                      <td>01 April, 2021 10.00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Return Time</td>
                                      <td>08 April, 2021 10.00AM</td>
                                    </tr> */}
                                  <tr>
                                    <td>Included</td>
                                    <td>
                                      {getValue("Inclusions") && getValue("Inclusions").trim() && (
                                        <ul className="table-list-allow">
                                          {getValue("Inclusions")
                                            .split(".")
                                            .map((inclusion, index) => (
                                              inclusion.trim() && ( // Ensures no empty inclusions are shown
                                                <li key={index}>
                                                  <i className="bx bx-check" /> {inclusion}
                                                </li>
                                              )
                                            ))}
                                        </ul>
                                      )}

                                      {/* <ul className="table-list-allow">
                                        <li>
                                          <i className="bx bx-check" />{" "}
                                          {getValue("Inclusions").split(".")[0]}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bx-check" />{" "}
                                          {getValue("Inclusions").split(".")[1]}
                                        </li>
                                        <li>
                                          <i className="bx bx-check" />{" "}
                                          {getValue("Inclusions").split(".")[2]}
                                        </li>
                                        <li>
                                          <i className="bx bx-check" />
                                          {getValue("Inclusions").split(".")[3]}
                                        </li>
                                        <li>
                                          <i className="bx bx-check" />
                                          {getValue("Inclusions").split(".")[4]}
                                        </li>
                                        <li>
                                          <i className="bx bx-check" />
                                          {getValue("Inclusions").split(".")[5]}
                                        </li>
                                        <li>
                                          <i className="bx bx-check" />
                                          {getValue("Inclusions").split(".")[6]}
                                        </li>
                                      </ul> */}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Excluded</td>
                                    <td>

                                      {getValue("Inclusions") && getValue("Inclusions").trim() && (
                                        <ul className="table-list-disallow">
                                          {getValue("Exclusions")
                                            .split(".")
                                            .map((inclusion, index) => (
                                              inclusion.trim() && ( // Ensures no empty inclusions are shown
                                                <li key={index}>
                                                  <i className="bx bx-x" /> {inclusion}
                                                </li>
                                              )
                                            ))}
                                        </ul>
                                      )}


                                      {/* <ul className="table-list-disallow">
                                        <li>
                                          {" "}
                                          <i className="bx bx-x" />
                                          {getValue("Exclusions").split(".")[0]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[1]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[2]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[3]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[4]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[5]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[6]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[7]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[8]}
                                        </li>
                                        <li>
                                          <i className="bx bx-x" />{" "}
                                          {getValue("Exclusions").split(".")[9]}
                                        </li>
                                      </ul> */}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/* <div className="p-rationg">
                                <h5>Rating</h5>
                                <div className="rating-card">
                                  <div className="r-card-avarag">
                                    <h2>4.9</h2>
                                    <h5>Excellent</h5>
                                  </div>
                                  <div className="r-card-info">
                                    <ul>
                                      <li>
                                        <strong>Accommodation</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Transport</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comfort</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Hospitality</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Food</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div> */}
                            <div className="p-review hide">
                              <ul>
                                <li className="p-review-card">
                                  <div className="p-review-info">
                                    <div className="p-reviewr-img">
                                      <img src={pr_1} alt="" />
                                    </div>
                                    <div className="p-reviewer-info">
                                      <strong>Bertram Bil</strong>
                                      <p>2 April, 2021 10.00PM</p>
                                      <ul className="review-star">
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="p-review-texts">
                                    <p>
                                      Morbi dictum pulvinar velit, id mollis
                                      lorem faucibus acUt sed lacinia ipsum.
                                      Suspendisse massa augue lorem faucibus
                                      acUt sed lacinia ipsum. Suspendisse{" "}
                                    </p>
                                  </div>
                                  <Link to={`#`} className="r-reply-btn">
                                    <i className="bx bx-reply" /> Reply
                                  </Link>
                                </li>
                                <li className="p-review-card">
                                  <div className="p-review-info">
                                    <div className="p-reviewr-img">
                                      <img src={pr_1} alt="" />
                                    </div>
                                    <div className="p-reviewer-info">
                                      <strong>Bertram Bil</strong>
                                      <p>2 April, 2021 10.00PM</p>
                                      <ul className="review-star">
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="p-review-texts">
                                    <p>
                                      Morbi dictum pulvinar velit, id mollis
                                      lorem faucibus acUt sed lacinia ipsum.
                                      Suspendisse massa augue lorem faucibus
                                      acUt sed lacinia ipsum. Suspendisse{" "}
                                    </p>
                                  </div>
                                  <Link to={`#`} className="r-reply-btn">
                                    <i className="bx bx-reply" /> Reply
                                  </Link>
                                </li>
                                <li className="p-review-card">
                                  <div className="p-review-info">
                                    <div className="p-reviewr-img">
                                      <img src={pr_1} alt="" />
                                    </div>
                                    <div className="p-reviewer-info">
                                      <strong>Bertram Bil</strong>
                                      <p>2 April, 2021 10.00PM</p>
                                      <ul className="review-star">
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                        <li>
                                          {" "}
                                          <i className="bx bxs-star" />{" "}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="p-review-texts">
                                    <p>
                                      Morbi dictum pulvinar velit, id mollis
                                      lorem faucibus acUt sed lacinia ipsum.
                                      Suspendisse massa augue lorem faucibus
                                      acUt sed lacinia ipsum. Suspendisse{" "}
                                    </p>
                                  </div>
                                  <Link to={`#`} className="r-reply-btn">
                                    <i className="bx bx-reply" /> Reply
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            {/* <div className="p-review-input">
                                <form>
                                  <h5>Leave Your Comment</h5>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        placeholder="Your Full Name"
                                      />
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        placeholder="Your Email"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="text"
                                        placeholder="Tour Type"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <textarea
                                        cols={30}
                                        rows={7}
                                        placeholder="Write Message"
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <ul className="input-rating">
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                      </ul>
                                      <input
                                        type="submit"
                                        defaultValue="Submit Now"
                                      />
                                    </div>
                                  </div>
                                </form>
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="tab-content-2">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="p-timeline-overview">
                              <h5>Overview</h5>
                              <p>{getValue("Overview")}</p>
                            </div>
                            <ul className="p-timeline">
                              {Array.from(
                                { length: getValue("daysCount")+1 },
                                (_, index) => index
                              ).map((day) => (
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      {/* <h5>0{day + 1}</h5> */}
                                      <h5>{day + 1 > 9 ? day + 1 : `0${day + 1}`}</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    {!id.startsWith("I") ? (
                                      <h5>
                                        DAY {day+1} :{" "}
                                        {getValue(`Day ${day}`)?.split(
                                          "."
                                        )[0] || "No details available"}
                                      </h5>
                                    ) : (
                                      <h5>
                                        DAY {day+1} :{" "}
                                        {getValue(`Day ${day + 1}`)?.split(
                                          "."
                                        )[0] || "No details available"}
                                      </h5>
                                    )}
                                    {/* {!id.startsWith("I") ? <h5>DAY {day} : {getValue(`Day ${day}`).split(".")[0]}</h5> : <h5>DAY {day} : {getValue(`Day ${day+1}`).split(".")[0]}</h5>} */}
                                    {/* <strong>10.00 AM to 10.00 PM</strong> */}
                                    <p>{getValue(`Day ${day+1}`)}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-d-sidebar">
                <div className="row">
                  {/* <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-form">
                        <form>
                          <h5 className="package-d-head">Book This Package</h5>
                          <div className="row">
                            <div className="col-lg-12">
                              <input type="text" placeholder="Your Full Name" />
                            </div>
                            <div className="col-lg-12">
                              <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="col-lg-12">
                              <input type="tel" placeholder="Phone" />
                            </div>
                            <div className="col-lg-12">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Tickets Type</option>
                                <option value={1}>Travel With Bus</option>
                                <option value={2}>Travel With Plane</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Adult</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Child</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                              </select>
                            </div>
                            <div className="col-lg-12">
                              <div
                                className="calendar-input"
                                id="packageCalenderMainDiv"
                              >
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) =>
                                    changeDatepickerHandeller(date)
                                  }
                                  className="input-field check-in"
                                  placeholder="dd-mm-yy"
                                />
                                <i
                                  className="flaticon-calendar"
                                  id="packageCalenderIcon"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <textarea
                                cols={30}
                                rows={7}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                            <div className="col-lg-12">
                              <input type="submit" defaultValue="Book Now" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div> */}
                  <div className="col-lg-12 col-md-6">
                    <div className="p-sidebar-cards mt-40">
                      <h5 className="package-d-head">Popular Packages</h5>
                      <ul className="package-cards">
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img src={package7Img} alt="" />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />4 Days/3
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details/10`}
                              >
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
                              <i className="bx bxs-star" />
                              <i className="bx bxs-star" />
                            </div>
                            <h5>
                              <span>AED535</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img src={package9Img} alt="" />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />5 Days/4
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details/8`}
                              >
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
                              <i className="bx bxs-star" />
                              <i className="bx bxs-star" />
                            </div>
                            <h5>
                              <span>AED640</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img src={package10Img} alt="" />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />6 Days/5
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details/19`}
                              >
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
                              <i className="bx bxs-star" />
                            </div>
                            <h5>
                              <span>AED786</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img src={package12Img} alt="" />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />6 Days/5
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details/18`}
                              >
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
                            <h5>
                              <span>AED705</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img src={package16Img} alt="" />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />4 Days/3
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link
                                to={`${process.env.PUBLIC_URL}/package-details/1`}
                              >
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
                            <h5>
                              <span>AED376</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-organizer mt-40">
                        <h5 className="package-d-head">Organized By</h5>
                        <div className="organizer-card">
                          <div className="organizer-img">
                            <img src={organizer} alt="" />
                          </div>
                          <div className="organizer-info">
                            <h5>Travelhotel</h5>
                            <p>Member since 2021</p>
                            <ul className="organizer-rating">
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bx-star" />
                              </li>
                            </ul>
                            <h5>500 Reviews</h5>
                          </div>
                        </div>
                        <div className="p-ask-btn">
                          <Link to={`${process.env.PUBLIC_URL}/contact`}>
                            ASK A QUESTION
                          </Link>
                        </div>
                      </div>
                    </div> */}
                  {/* <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-banner mt-40">
                        <img src={sidebarBannar} alt="" className="img-fluid" />
                        <div className="sidebar-banner-overlay">
                          <div className="overlay-content">
                            <h3>Get 50% Off In Dubai Tour</h3>
                            <div className="sidebar-banner-btn">
                              <Link to={`#`}>Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PackageDetails;
