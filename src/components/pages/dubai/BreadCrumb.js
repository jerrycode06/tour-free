import React, { Component } from "react";
import { Link } from "react-router-dom";

class BreadCrumb extends Component {
    render() {
        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>Destinations</h2>
                                    {/* <ul className="breadcrumb-links">
                                            <li>
                                                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                                <i className="bx bx-chevron-right" />
                                            </li>
                                            <li>Dubai</li>
                                        </ul> */}
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
                </div>

                {/* ===============  breadcrumb area end =============== */}
            </>
        );
    }
}

export default BreadCrumb;
