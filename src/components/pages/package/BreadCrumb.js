import React from "react";
import { Link } from "react-router-dom";

import package1Img from "../../../assets/images/dubai/package_1.jpg";
import package2Img from "../../../assets/images/dubai/package_2.jpg";
import package3Img from "../../../assets/images/dubai/package_3.jpg";
import package4Img from "../../../assets/images/dubai/package_4.jpg";
import package5Img from "../../../assets/images/dubai/package_5.jpg";
import package6Img from "../../../assets/images/dubai/package_6.webp";
import package7Img from "../../../assets/images/dubai/package_7.jpg";
import package8Img from "../../../assets/images/dubai/package_8.jpg";
import package9Img from "../../../assets/images/dubai/UAE_9.jpg";
import package10Img from "../../../assets/images/dubai/package_10.jpg";
import package11Img from "../../../assets/images/dubai/package_11.jpg";
import package12Img from "../../../assets/images/dubai/package_12.jpg";
import package13Img from "../../../assets/images/dubai/package_13.jpg";
import package14Img from "../../../assets/images/dubai/package_14.jpg";
import package15Img from "../../../assets/images/dubai/package_15.jpg";
import package16Img from "../../../assets/images/dubai/package_16.jpg";
import package17Img from "../../../assets/images/dubai/package_17.jpg";
import package18Img from "../../../assets/images/dubai/package_18.jpg";
import package19Img from "../../../assets/images/dubai/package_19.avif";
import package20Img from "../../../assets/images/dubai/package_20.jpg";
import package21Img from "../../../assets/images/dubai/package_21.avif";
import package22Img from "../../../assets/images/dubai/package_22.jpg";
import package23Img from "../../../assets/images/dubai/package_23.jpg";
import package24Img from "../../../assets/images/dubai/package_24.jpg";
import package25Img from "../../../assets/images/dubai/package_25.jpg";
import package26Img from "../../../assets/images/dubai/package_26.jpg";
import package27Img from "../../../assets/images/dubai/package_27.jpg";
import package28Img from "../../../assets/images/dubai/package_28.jpg";
import package29Img from "../../../assets/images/dubai/package_29.jpg";
import package30Img from "../../../assets/images/dubai/package_30.jpg";
import package31Img from "../../../assets/images/dubai/package_31.jpg";
import package32Img from "../../../assets/images/dubai/package_32.jpg";
import package33Img from "../../../assets/images/dubai/package_33.jpg";

const packageImages = {
    1: package1Img,
    2: package2Img,
    3: package3Img,
    4: package4Img,
    5: package5Img,
    6: package6Img,
    7: package7Img,
    8: package8Img,
    9: package9Img,
    10: package10Img,
    11: package11Img,
    12: package12Img,
    13: package13Img,
    14: package14Img,
    15: package15Img,
    16: package16Img,
    17: package17Img,
    18: package18Img,
    19: package19Img,
    20: package20Img,
    21: package21Img,
    22: package22Img,
    23: package23Img,
    24: package24Img,
    25: package25Img,
    26: package26Img,
    27: package27Img,
    28: package28Img,
    29: package29Img,
    30: package30Img,
    31: package31Img,
    32: package32Img,
    33: package33Img,
};

const BreadCrumb = ({ title, id }) => {

    const backgroundImage = packageImages[id]; // Fallback image

    console.log("BackgorouundIkage: ", backgroundImage)

    return (

        <div
            className="breadcrumb-area"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url(${backgroundImage})`,
                backgroundSize: "cover", // Ensures the image covers the area without repeating
                backgroundPosition: "center center", // Keeps the central part of the image visible
                backgroundRepeat: "no-repeat",
                minHeight: "70vh",
                width: "100vw",
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
                                    <Link to="/dubai/activities">Holidays</Link>
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