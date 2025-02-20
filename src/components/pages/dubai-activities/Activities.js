import React, { Component } from "react";
import BreadCrumb from "../dubai/BreadCrumb";
import { Link } from "react-router-dom";

import { DUBAI_ACTIVITIES } from "../../../json/dubaiActivities";

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

const packageImages = {
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
    //   24: package24Img,
};

class Activities extends Component {

    componentDidMount() {
        this.scrollTop();
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    render() {
        return (
            <>
                <BreadCrumb />

                {/* =============== Destinations area start =============== */}

                <div className="container mt-4">
                    <div className="row">
                        {DUBAI_ACTIVITIES
                            .sort((a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, "")))
                            .map((pkg) => (
                                <div key={pkg.id} className="col-12 col-md-6 col-lg-4 mb-4">

                                    {/* Dynamic */}
                                    <div className="package-card">
                                        <div className="package-thumb">
                                            <Link to={`${process.env.PUBLIC_URL}/dubai/activity-details/${pkg.title.replace(/\s+/g, "-").toLowerCase()}`}>
                                                <img
                                                    src={packageImages[pkg.id]}
                                                    alt={pkg.title}
                                                    className="img-fluid"
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </Link>
                                        </div>
                                        <div className="package-details" style={{ padding: "5px 10px;" }}>
                                            <h3 style={{ display: "flex", gap: "6px", alignItems: "baseline" }}>
                                                <i className="flaticon-arrival" />
                                                {/* <Link to={`${process.env.PUBLIC_URL}/package-details/${pkg.id}`} style={{alignSelf: "anchor-self"}}>
                                                    {pkg.title}
                                                </Link> */}
                                                <Link to={`/package-details/${pkg.id}`}>
                                                    {pkg.title}
                                                </Link>
                                            </h3>
                                            <div className="package-info">
                                                <h5>
                                                    <span>Starting from {pkg.price}</span>
                                                    {/* /Per Person <br /> */}
                                                    <br />
                                                    {pkg.price_note}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* =============== Destinations area end =============== */}
            </>
        );
    }
}

export default Activities;