import React, { Component } from "react";
import { Link } from "react-router-dom";
import customerSupportImg from "../../../assets/images/customer-support.jpg"

class BreadCrumb extends Component {
    render() {
        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                {/* <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>Destinations</h2>
                                    <a href="tel:+971505829005"
                                        className="btn btn-outline px-4 py-2 fw-bold d-inline-flex align-items-center"
                                        style={{
                                            color: "#304F47",
                                            backgroundColor: "white",
                                            borderColor: "#304F47",
                                            borderWidth: "2px",
                                            borderRadius: "30px",
                                            fontSize: "18px",
                                            transition: "all 0.3s ease-in-out"
                                        }}>
                                        <i className="bx bx-phone-call me-2" style={{ fontSize: "22px" }}></i> Call Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div
                    className="breadcrumb-area"
                    style={{
                        // background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url("assets/images/dubai/Dubai_Home.jpg")`,
                        backgroundSize: "cover",
                        // backgroundPosition: "center center", // Ensures the middle part of the image is visible
                        backgroundRepeat: "no-repeat",
                        minHeight: "70vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-wrap">
                                    <h2 style={{ marginBottom: "0px" }}>Destinations</h2>
                                    <ul className="breadcrumb-links" style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px",
                                        marginBottom: "10px",
                                        padding: "0",
                                        listStyle: "none"
                                    }}>
                                        <li>
                                            <Link to="/">Home</Link>
                                            <i className="bx bx-chevron-right" />
                                        </li>
                                        <li>
                                            <Link to="/dubai/activities">Destination</Link>
                                            <i className="bx bx-chevron-right" />
                                        </li>
                                        <li>Dubai</li>
                                    </ul>

                                    <a href="tel:+971505829005"
                                        className="btn btn-outline px-4 py-2 fw-bold d-inline-flex align-items-center"
                                        style={{
                                            color: "#304F47",
                                            backgroundColor: "white",
                                            borderColor: "#304F47",
                                            borderWidth: "2px",
                                            borderRadius: "30px",
                                            fontSize: "18px",
                                            transition: "all 0.3s ease-in-out",
                                            marginTop: "25px"
                                        }}>
                                        <i className="bx bx-phone-call me-2" style={{ fontSize: "22px" }}></i> Call Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="breadcrumb-area py-4"
                    style={{
                        // background: "url('./assets/images/your-background.jpg') center/cover no-repeat",
                        color: "white",
                        textAlign: "center"
                    }}
                >
                    <div className="container">
                        <div className="align-items-center text-center text-md-start">

                            <div>
                                <div className="breadcrumb-wrap">
                                    <h2 className="fw-bold">Holidays</h2>
                                </div>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                                <a href="tel:+971505829005"
                                    className="btn px-4 py-2 fw-bold d-flex align-items-center"
                                    style={{
                                        color: "#304F47",
                                        backgroundColor: "white",
                                        borderColor: "#304F47",
                                        borderWidth: "2px",
                                        borderRadius: "30px",
                                        fontSize: "16px",
                                        transition: "all 0.3s ease-in-out"
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    <i className="bx bx-phone-call me-2" style={{ fontSize: "20px" }}></i> Call Us
                                </a>

                            </div>
                        </div>
                    </div>
                </div> */}



                {/* ===============  breadcrumb area end =============== */}
            </>
        );
    }
}

export default BreadCrumb;
