import React from "react";
import { Link } from "react-router-dom";

import activity1Img from "../../../assets/images/dubai-activities/dubai_activity1.png";
import activity2Img from "../../../assets/images/dubai-activities/dubai_activity2.png";
import activity3Img from "../../../assets/images/dubai-activities/dubai_activity3.png";
import activity4Img from "../../../assets/images/dubai-activities/dubai_activity4.png";
import activity5Img from "../../../assets/images/dubai-activities/dubai_activity5.png";
import activity6Img from "../../../assets/images/dubai-activities/dubai_activity6.png";
import activity7Img from "../../../assets/images/dubai-activities/dubai_activity7.png";
import activity8Img from "../../../assets/images/dubai-activities/dubai_activity8.png";
import activity9Img from "../../../assets/images/dubai-activities/dubai_activity9.png";
import activity10Img from "../../../assets/images/dubai-activities/dubai_activity10.jpg";
import activity11Img from "../../../assets/images/dubai-activities/dubai_activity11.png";
import activity12Img from "../../../assets/images/dubai-activities/dubai_activity12.png";
import activity13Img from "../../../assets/images/dubai-activities/dubai_activity13.png";
import activity14Img from "../../../assets/images/dubai-activities/dubai_activity14.png";
import activity15Img from "../../../assets/images/dubai-activities/dubai_activity15.png";
import activity16Img from "../../../assets/images/dubai-activities/dubai_activity16.png";
import activity17Img from "../../../assets/images/dubai-activities/dubai_activity17.png";
import activity18Img from "../../../assets/images/dubai-activities/dubai_activity18.png";
import activity19Img from "../../../assets/images/dubai-activities/dubai_activity19.png";
import activity20Img from "../../../assets/images/dubai-activities/dubai_activity20.png";
import activity21Img from "../../../assets/images/dubai-activities/dubai_activity21.png";
import activity22Img from "../../../assets/images/dubai-activities/dubai_activity22.png";
import activity23Img from "../../../assets/images/dubai-activities/dubai_activity23.png";

const activityImages = {
    1: activity1Img,
    2: activity2Img,
    3: activity3Img,
    4: activity4Img,
    5: activity5Img,
    6: activity6Img,
    7: activity7Img,
    8: activity8Img,
    9: activity9Img,
    10: activity10Img,
    11: activity11Img,
    12: activity12Img,
    13: activity13Img,
    14: activity14Img,
    15: activity15Img,
    16: activity16Img,
    17: activity17Img,
    18: activity18Img,
    19: activity19Img,
    20: activity20Img,
    21: activity21Img,
    22: activity22Img,
    23: activity23Img,
};

const BreadCrumb = ({ title, id }) => {

    const backgroundImage = activityImages[id]; // Fallback image

    console.log("BackgorouundIkage: ", backgroundImage)

    return (

        <div
            className="breadcrumb-area"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center center", // Ensures the middle part of the image is visible
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
                            <h2 style={{ marginBottom: "0px" }}>{title}</h2>
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
                                    <Link to="/dubai/activities">Activities</Link>
                                    <i className="bx bx-chevron-right" />
                                </li>
                                <li>{title}</li>
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
    );
};

export default BreadCrumb;