import React, { Component } from "react";
import { Link } from "react-router-dom";
import customerSupportImg  from "../../../assets/images/customer-support.jpg"

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

                <div className="breadcrumb-area py-4"
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
                                    <h2 className="fw-bold">Destinations</h2>
                                </div>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">

                                {/* Call Us Button */}
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

                                {/* Query Form Button */}
                                {/* <button 
                                    onClick={openModal}
                                    className="btn btn-warning px-4 py-2 fw-bold d-flex align-items-center"
                                    style={{
                                        borderRadius: "30px",
                                        fontSize: "16px",
                                        transition: "all 0.3s ease-in-out"
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    <i className="bx bx-message-detail me-2" style={{ fontSize: "20px" }}></i> Query Form
                                </button> */}

                                {/* Clickable Call Center Rep Image */}
                                {/* <a href="tel:+971505829005">
                                    <img src={customerSupportImg} // Replace with actual image
                                        alt="Call Center Representative"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            border: "2px solid white",
                                            boxShadow: "0 4px 8px rgba(255,255,255,0.5)",
                                            transition: "transform 0.3s ease-in-out"
                                        }}
                                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                    />
                                </a> */}

                            </div>
                        </div>
                    </div>
                </div>



                {/* ===============  breadcrumb area end =============== */}
            </>
        );
    }
}

export default BreadCrumb;
