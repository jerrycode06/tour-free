import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import TermsAndConditions from "../tnc/TermsAndConditions";
import { DUBAI_ACTIVITIES } from "../../../json/dubaiActivities";

import BreadCrumb from "../../pages/dubai-activities/BreadCrumb";

const ActivityDetails = () => {
    const [packageData, setPackageData] = useState(DUBAI_ACTIVITIES || []);

    // Get the first activity (or change logic based on user selection)
    const selectedActivity = packageData.length > 0 ? packageData[0] : null;

    const { name } = useParams(); // Get the 'name' param from the URL

    const getValue = (key) => {
        let foundItem;
        console.log('Name: ', key);
        foundItem = packageData.find((pkg) => pkg.title.replace(/\s+/g, "-").toLowerCase() === name);

        return foundItem ? foundItem[key] : ""; // Handle missing keys or items
    };

    const extractPrice = (str) => {
        const match = str.match(/AED\s+(\d+)/);
        return match ? parseInt(match[1], 10) : null;
    };

    // ---------------------------------ENQUIRY FORM SUBMITTION CODE---------------------------------
    const [noOfChilds, setNumberOfChilds] = useState(0);
    const [error, setError] = useState({ error: false, message: "" });
    const [formData, setFormData] = useState({
        travellingTo: "",
        countryCode: "",
        contactNo: "",
        emailId: "",
        noOfAdults: "",
        noOfChilds: 0,
        childAges: [],
        departDate: "",
    });

    const countries = [
        { code: "+93", name: "Afghanistan" },
        { code: "+355", name: "Albania" },
        { code: "+213", name: "Algeria" },
        { code: "+1-684", name: "American Samoa" },
        { code: "+376", name: "Andorra" },
        { code: "+244", name: "Angola" },
        { code: "+1-264", name: "Anguilla" },
        { code: "+672", name: "Antarctica" },
        { code: "+1-268", name: "Antigua and Barbuda" },
        { code: "+54", name: "Argentina" },
        { code: "+374", name: "Armenia" },
        { code: "+297", name: "Aruba" },
        { code: "+61", name: "Australia" },
        { code: "+43", name: "Austria" },
        { code: "+994", name: "Azerbaijan" },
        { code: "+1-242", name: "Bahamas" },
        { code: "+973", name: "Bahrain" },
        { code: "+880", name: "Bangladesh" },
        { code: "+1-246", name: "Barbados" },
        { code: "+375", name: "Belarus" },
        { code: "+32", name: "Belgium" },
        { code: "+501", name: "Belize" },
        { code: "+229", name: "Benin" },
        { code: "+1-441", name: "Bermuda" },
        { code: "+975", name: "Bhutan" },
        { code: "+591", name: "Bolivia" },
        { code: "+387", name: "Bosnia and Herzegovina" },
        { code: "+267", name: "Botswana" },
        { code: "+55", name: "Brazil" },
        { code: "+246", name: "British Indian Ocean Territory" },
        { code: "+1-284", name: "British Virgin Islands" },
        { code: "+673", name: "Brunei" },
        { code: "+359", name: "Bulgaria" },
        { code: "+226", name: "Burkina Faso" },
        { code: "+257", name: "Burundi" },
        { code: "+855", name: "Cambodia" },
        { code: "+237", name: "Cameroon" },
        { code: "+1", name: "Canada" },
        { code: "+238", name: "Cape Verde" },
        { code: "+1-345", name: "Cayman Islands" },
        { code: "+236", name: "Central African Republic" },
        { code: "+235", name: "Chad" },
        { code: "+56", name: "Chile" },
        { code: "+86", name: "China" },
        { code: "+61", name: "Christmas Island" },
        { code: "+61", name: "Cocos Islands" },
        { code: "+57", name: "Colombia" },
        { code: "+269", name: "Comoros" },
        { code: "+682", name: "Cook Islands" },
        { code: "+506", name: "Costa Rica" },
        { code: "+385", name: "Croatia" },
        { code: "+53", name: "Cuba" },
        { code: "+599", name: "Curacao" },
        { code: "+357", name: "Cyprus" },
        { code: "+420", name: "Czech Republic" },
        { code: "+243", name: "Democratic Republic of the Congo" },
        { code: "+45", name: "Denmark" },
        { code: "+253", name: "Djibouti" },
        { code: "+1-767", name: "Dominica" },
        { code: "+1-809", name: "Dominican Republic" },
        { code: "+593", name: "Ecuador" },
        { code: "+20", name: "Egypt" },
        { code: "+503", name: "El Salvador" },
        { code: "+240", name: "Equatorial Guinea" },
        { code: "+291", name: "Eritrea" },
        { code: "+372", name: "Estonia" },
        { code: "+251", name: "Ethiopia" },
        { code: "+500", name: "Falkland Islands" },
        { code: "+298", name: "Faroe Islands" },
        { code: "+679", name: "Fiji" },
        { code: "+358", name: "Finland" },
        { code: "+33", name: "France" },
        { code: "+594", name: "French Guiana" },
        { code: "+689", name: "French Polynesia" },
        { code: "+241", name: "Gabon" },
        { code: "+220", name: "Gambia" },
        { code: "+995", name: "Georgia" },
        { code: "+49", name: "Germany" },
        { code: "+233", name: "Ghana" },
        { code: "+350", name: "Gibraltar" },
        { code: "+30", name: "Greece" },
        { code: "+299", name: "Greenland" },
        { code: "+1-473", name: "Grenada" },
        { code: "+590", name: "Guadeloupe" },
        { code: "+1-671", name: "Guam" },
        { code: "+502", name: "Guatemala" },
        { code: "+44-1481", name: "Guernsey" },
        { code: "+224", name: "Guinea" },
        { code: "+245", name: "Guinea-Bissau" },
        { code: "+592", name: "Guyana" },
        { code: "+509", name: "Haiti" },
        { code: "+504", name: "Honduras" },
        { code: "+852", name: "Hong Kong" },
        { code: "+36", name: "Hungary" },
        { code: "+354", name: "Iceland" },
        { code: "+91", name: "India" },
        { code: "+62", name: "Indonesia" },
        { code: "+98", name: "Iran" },
        { code: "+964", name: "Iraq" },
        { code: "+353", name: "Ireland" },
        { code: "+44-1624", name: "Isle of Man" },
        { code: "+972", name: "Israel" },
        { code: "+39", name: "Italy" },
        { code: "+225", name: "Ivory Coast" },
        { code: "+1-876", name: "Jamaica" },
        { code: "+81", name: "Japan" },
        { code: "+44-1534", name: "Jersey" },
        { code: "+962", name: "Jordan" },
        { code: "+7", name: "Kazakhstan" },
        { code: "+254", name: "Kenya" },
        { code: "+686", name: "Kiribati" },
        { code: "+383", name: "Kosovo" },
        { code: "+965", name: "Kuwait" },
        { code: "+996", name: "Kyrgyzstan" },
        { code: "+856", name: "Laos" },
        { code: "+371", name: "Latvia" },
        { code: "+961", name: "Lebanon" },
        { code: "+266", name: "Lesotho" },
        { code: "+231", name: "Liberia" },
        { code: "+218", name: "Libya" },
        { code: "+423", name: "Liechtenstein" },
        { code: "+370", name: "Lithuania" },
        { code: "+352", name: "Luxembourg" },
        { code: "+853", name: "Macau" },
        { code: "+389", name: "Macedonia" },
        { code: "+261", name: "Madagascar" },
        { code: "+265", name: "Malawi" },
        { code: "+60", name: "Malaysia" },
        { code: "+960", name: "Maldives" },
        { code: "+223", name: "Mali" },
        { code: "+356", name: "Malta" },
        { code: "+692", name: "Marshall Islands" },
        { code: "+596", name: "Martinique" },
        { code: "+222", name: "Mauritania" },
        { code: "+230", name: "Mauritius" },
        { code: "+262", name: "Mayotte" },
        { code: "+52", name: "Mexico" },
        { code: "+691", name: "Micronesia" },
        { code: "+373", name: "Moldova" },
        { code: "+377", name: "Monaco" },
        { code: "+976", name: "Mongolia" },
        { code: "+382", name: "Montenegro" },
        { code: "+1-664", name: "Montserrat" },
        { code: "+212", name: "Morocco" },
        { code: "+258", name: "Mozambique" },
        { code: "+95", name: "Myanmar" },
        { code: "+264", name: "Namibia" },
        { code: "+674", name: "Nauru" },
        { code: "+977", name: "Nepal" },
        { code: "+31", name: "Netherlands" },
        { code: "+687", name: "New Caledonia" },
        { code: "+64", name: "New Zealand" },
        { code: "+505", name: "Nicaragua" },
        { code: "+227", name: "Niger" },
        { code: "+234", name: "Nigeria" },
        { code: "+683", name: "Niue" },
        { code: "+672", name: "Norfolk Island" },
        { code: "+850", name: "North Korea" },
        { code: "+1-670", name: "Northern Mariana Islands" },
        { code: "+47", name: "Norway" },
        { code: "+968", name: "Oman" },
        { code: "+92", name: "Pakistan" },
        { code: "+680", name: "Palau" },
        { code: "+970", name: "Palestine" },
        { code: "+507", name: "Panama" },
        { code: "+675", name: "Papua New Guinea" },
        { code: "+595", name: "Paraguay" },
        { code: "+51", name: "Peru" },
        { code: "+63", name: "Philippines" },
        { code: "+48", name: "Poland" },
        { code: "+351", name: "Portugal" },
        { code: "+1-787", name: "Puerto Rico" },
        { code: "+974", name: "Qatar" },
        { code: "+242", name: "Republic of the Congo" },
        { code: "+262", name: "Reunion" },
        { code: "+40", name: "Romania" },
        { code: "+7", name: "Russia" },
        { code: "+250", name: "Rwanda" },
        { code: "+590", name: "Saint Barthelemy" },
        { code: "+290", name: "Saint Helena" },
        { code: "+1-869", name: "Saint Kitts and Nevis" },
        { code: "+1-758", name: "Saint Lucia" },
        { code: "+590", name: "Saint Martin" },
        { code: "+508", name: "Saint Pierre and Miquelon" },
        { code: "+1-784", name: "Saint Vincent and the Grenadines" },
        { code: "+685", name: "Samoa" },
        { code: "+378", name: "San Marino" },
        { code: "+239", name: "Sao Tome and Principe" },
        { code: "+966", name: "Saudi Arabia" },
        { code: "+221", name: "Senegal" },
        { code: "+381", name: "Serbia" },
        { code: "+248", name: "Seychelles" },
        { code: "+232", name: "Sierra Leone" },
        { code: "+65", name: "Singapore" },
        { code: "+1-721", name: "Sint Maarten" },
        { code: "+421", name: "Slovakia" },
        { code: "+386", name: "Slovenia" },
        { code: "+677", name: "Solomon Islands" },
        { code: "+252", name: "Somalia" },
        { code: "+27", name: "South Africa" },
        { code: "+82", name: "South Korea" },
        { code: "+211", name: "South Sudan" },
        { code: "+34", name: "Spain" },
        { code: "+94", name: "Sri Lanka" },
        { code: "+249", name: "Sudan" },
        { code: "+597", name: "Suriname" },
        { code: "+268", name: "Swaziland" },
        { code: "+46", name: "Sweden" },
        { code: "+41", name: "Switzerland" },
        { code: "+963", name: "Syria" },
        { code: "+886", name: "Taiwan" },
        { code: "+992", name: "Tajikistan" },
        { code: "+255", name: "Tanzania" },
        { code: "+66", name: "Thailand" },
        { code: "+228", name: "Togo" },
        { code: "+690", name: "Tokelau" },
        { code: "+676", name: "Tonga" },
        { code: "+1-868", name: "Trinidad and Tobago" },
        { code: "+216", name: "Tunisia" },
        { code: "+90", name: "Turkey" },
        { code: "+993", name: "Turkmenistan" },
        { code: "+1-649", name: "Turks and Caicos Islands" },
        { code: "+688", name: "Tuvalu" },
        { code: "+256", name: "Uganda" },
        { code: "+380", name: "Ukraine" },
        { code: "+971", name: "United Arab Emirates" },
        { code: "+44", name: "United Kingdom" },
        { code: "+1", name: "United States" },
        { code: "+598", name: "Uruguay" },
        { code: "+998", name: "Uzbekistan" },
        { code: "+678", name: "Vanuatu" },
        { code: "+379", name: "Vatican" },
        { code: "+58", name: "Venezuela" },
        { code: "+84", name: "Vietnam" },
        { code: "+1-284", name: "Virgin Islands, British" },
        { code: "+1-340", name: "Virgin Islands, US" },
        { code: "+681", name: "Wallis and Futuna" },
        { code: "+967", name: "Yemen" },
        { code: "+260", name: "Zambia" },
        { code: "+263", name: "Zimbabwe" },
    ];

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [name]); // Runs when 'name' param changes

    const handleChild = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value <= 7) {
            setNumberOfChilds(value);
            setFormData((prev) => ({ ...prev, noOfChilds: value, childAges: [] }));
        } else {
            setError({ error: true, message: "Cannot be more than 7" });
            setTimeout(() => setError({ error: false, message: "" }), 3000);
        }
    };

    const handleChildAge = (index, age) => {
        const updatedAges = [...formData.childAges];
        updatedAges[index] = age;
        setFormData((prev) => ({ ...prev, childAges: updatedAges }));
    };

    // FORM SUBMIT HANDLE REQUEST
    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            travelling_to: formData.travellingTo || "Not specified",
            country_code: formData.countryCode || "",
            contact_no: formData.contactNo || "",
            email_id: formData.emailId || "",
            no_of_adults: formData.noOfAdults || "0",
            no_of_children: formData.noOfChilds || "0",
            children_details: formData.childAges.length > 0 ? formData.childAges.join(", ") : "",
            departure_date: formData.departDate || "Not specified",
        };

        emailjs
            .send(
                "service_6d9ubmi", // Replace with your EmailJS Service ID
                "template_o8ryz3u", // Replace with your EmailJS Template ID
                payload,
                "Cagg_uModER8D9sLU" // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response);
                    alert("Form submitted successfully!");
                },
                (error) => {
                    console.error("Failed to send email", error);
                    alert("Failed to submit the form. Please try again.");
                }
            );
    };

    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            {/* <BreadCrumb title={getValue("title")} backgroundImage={activityImage} /> */}
            {selectedActivity && (
                <BreadCrumb
                    title={getValue("title")}
                    id={getValue("id")}
                />
            )}
            <div className="activity-content">
                {/* Rest of your page content */}
            </div>

            {/* ===============  breadcrumb area end =============== */}

            <div className="package-details-wrapper pt-140">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="package-details">

                                <div className="package-header">
                                    <div className="package-title">
                                        <h2 style={{ marginBottom: "4px" }}>
                                            {getValue("title")}  <br />
                                        </h2>
                                        <h3 style={{ marginBottom: "0px" }}>
                                            Price: AED {extractPrice(getValue("price"))} <br />
                                        </h3>

                                        {getValue("price_note") && (
                                            <p style={{ fontWeight: "400" }}>
                                                ({getValue("price_note")})
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="package-tab">

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
                                                        <div className="p-overview" style={{ marginBottom: "25px" }}>
                                                            <h5>Overview</h5>
                                                            <p dangerouslySetInnerHTML={{ __html: getValue("tour_overview")?.replace(/\n/g, "<br />") }}></p>

                                                        </div>

                                                        <div className="p-details-table">
                                                            <table className="table caption-top">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Destination</td>
                                                                        <td>
                                                                            <p style={{ fontWeight: "400" }}>UAE</p>
                                                                        </td>
                                                                    </tr>

                                                                    {/* {getValue("price_note") && (
                                                                        <tr>
                                                                            <td>Price Note</td>
                                                                            <td>
                                                                                <p style={{ fontWeight: "400" }}>
                                                                                    {getValue("price_note")}</p>
                                                                            </td>
                                                                        </tr>
                                                                    )} */}

                                                                    <tr>
                                                                        <td>Included</td>
                                                                        {/* <td>
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
                                                                            </td> */}
                                                                        <td>
                                                                            {getValue("inclusions") && Array.isArray(getValue("inclusions")) && (
                                                                                <ul className="table-list-allow">
                                                                                    {getValue("inclusions").map((inclusion, index) => (
                                                                                        <li key={index} style={{ display: "flex", gap: "8px" }}>
                                                                                            <i className="bx bx-check" />
                                                                                            <p style={{ fontWeight: "400" }}>
                                                                                                {inclusion}
                                                                                            </p>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>Excluded</td>
                                                                        <td>
                                                                            {getValue("exclusions") && Array.isArray(getValue("exclusions")) && (
                                                                                <ul className="table-list-disallow">
                                                                                    {getValue("exclusions").map((exclusion, index) => (
                                                                                        <li key={index} style={{ display: "flex", gap: "8px" }}>
                                                                                            <i className="bx bx-x" />
                                                                                            <p style={{ fontWeight: "400" }}>
                                                                                                {exclusion}
                                                                                            </p>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                        </td>
                                                                        {/* <td>
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

                                                                        </td> */}
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        {getValue("additional_notes")?.trim() && (
                                                            <div className="p-overview" style={{ marginBottom: "25px" }}>
                                                                <h5>Additional Notes</h5>
                                                                <p>{getValue("additional_notes")}</p>
                                                            </div>
                                                        )}

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
                                    <div className="col-lg-12 col-md-6">

                                        {/* ************************************ENQUIRY FORM********************************** */}

                                        <div className="enquiry-form mt-5 max-h-[700px] overflow-y-auto"
                                            style={{ justifySelf: "end", background: "white", boxShadow: "0 0 64px #1111111a" }}>
                                            <div className="enquiry-form-inside w-full">
                                                <form onSubmit={handleSubmit} className="flex flex-col ">
                                                    <h5 className="text-center" style={
                                                        {
                                                            margin: "18px",
                                                            // fontFamily: 'Quicksand',
                                                            fontSize: "xx-large",
                                                            color: "black",
                                                            fontWeight: "500"
                                                        }}>ENQUIRE NOW</h5>

                                                    <label style={{ color: "black" }}>Travelling To</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Travelling To"
                                                        required
                                                        value={formData.travellingTo}
                                                        style={{ width: "100%" }}
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({ ...prev, travellingTo: e.target.value }))
                                                        }
                                                    />

                                                    <div className="mb-4">
                                                        <label htmlFor="contactNo" style={{ color: "black", display: "block", marginBottom: "8px" }}>
                                                            Contact No.
                                                        </label>
                                                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                                                            <select
                                                                value={formData.countryCode}
                                                                onChange={(e) =>
                                                                    setFormData((prev) => ({ ...prev, countryCode: e.target.value }))
                                                                }
                                                                style={{
                                                                    padding: "8px",
                                                                    border: "1px solid #ccc",
                                                                    borderRadius: "4px 0 0 4px",
                                                                    background: "#fff",
                                                                    color: "#333",
                                                                    width: "30%",
                                                                    marginRight: "4px",
                                                                    marginBottom: "0px"
                                                                }}
                                                            >
                                                                {countries.map((country, index) => (
                                                                    <option key={index} value={country.code}>
                                                                        {country.code} ({country.name})
                                                                    </option>
                                                                ))}
                                                            </select>

                                                            {/* Input for Phone Number */}
                                                            <input
                                                                type="tel"
                                                                id="contactNo"
                                                                placeholder="Enter your contact no."
                                                                required
                                                                value={formData.contactNo}
                                                                onChange={(e) =>
                                                                    setFormData((prev) => ({ ...prev, contactNo: e.target.value }))
                                                                }
                                                                style={{
                                                                    width: "70%",
                                                                    padding: "8px",
                                                                    border: "1px solid #ccc",
                                                                    borderRadius: "0 4px 4px 0",
                                                                    outline: "none",
                                                                }}
                                                            />
                                                        </div>
                                                    </div>


                                                    <label style={{ color: "black" }}>Email ID</label>
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your Email ID"
                                                        required
                                                        value={formData.emailId}
                                                        style={{ width: "100%" }}
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({ ...prev, emailId: e.target.value }))
                                                        }
                                                    />

                                                    <label style={{ color: "black" }}>No of Adults</label>
                                                    <input
                                                        type="number"
                                                        placeholder="No of adults"
                                                        min="0"
                                                        required
                                                        value={formData.noOfAdults}
                                                        style={{ width: "100%" }}
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({ ...prev, noOfAdults: e.target.value }))
                                                        }
                                                    />

                                                    <label style={{ color: "black" }}>No of Children</label>
                                                    <input
                                                        type="number"
                                                        placeholder="No of children"
                                                        min="0"
                                                        value={noOfChilds}
                                                        onChange={handleChild}
                                                        style={{ width: "100%" }}
                                                    />
                                                    {error.error && <span className="text-red-500">{error.message}</span>}

                                                    {noOfChilds > 0 &&
                                                        Array.from({ length: noOfChilds }).map((_, index) => (
                                                            <div key={index} style={{ width: "100%" }}>
                                                                <label style={{ color: "white" }}>Child {index + 1} Age</label>
                                                                <select
                                                                    onChange={(e) => handleChildAge(index, e.target.value)}
                                                                    required
                                                                    style={{ width: "100%" }}
                                                                >
                                                                    <option value="">Select Age</option>
                                                                    <option value="0-1">0-1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                </select>
                                                            </div>
                                                        ))}

                                                    <label style={{ color: "black" }}>Depart Date</label>
                                                    <input
                                                        type="date"
                                                        required
                                                        value={formData.departDate}
                                                        style={{ width: "-webkit-fill-available" }}
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({ ...prev, departDate: e.target.value }))
                                                        }
                                                    />

                                                    <div className="flex items-center w-full justify-center mt-3"><button type="submit" className="bg-green-800 text-white p-2 mt-2 rounded">
                                                        Submit Now
                                                    </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <TermsAndConditions /> */}
        </>
    );
}
export default ActivityDetails;


{/* <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="breadcrumb-wrap">
                        <h2 style={{ marginBottom: "0px" }}>Dubai Activities</h2>
                        <ul className="breadcrumb-links" style={{ marginBottom: "10px" }}>
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                <i className="bx bx-chevron-right" />
                            </li>
                            <li>Activities</li>
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
                                transition: "all 0.3s ease-in-out"
                            }}>
                            <i className="bx bx-phone-call me-2" style={{ fontSize: "22px" }}></i> Call Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

{/* <div className="p-sidebar-cards mt-40">
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
                            to={`${process.env.PUBLIC_URL}/package-details/best-selling-dubai-tour-package`}
                        >
                            Best Selling Dubai Tour Package
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
                        <span>AED1955</span>/ Per Person
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
                            to={`${process.env.PUBLIC_URL}/package-details/tours-in-glitzy-dubai`}
                        >
                            Tours in Glitzy Dubai
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
                        <span>AED2340</span>/ Per Person
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
                            to={`${process.env.PUBLIC_URL}/package-details/dubai-explorer-family-package`}
                        >
                            Dubai Explorer Family Package
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
                        <span>AED2870</span>/ Per Person
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
                            to={`${process.env.PUBLIC_URL}/package-details/dubai-&-abu-dhabi-wonders`}
                        >
                            Dubai & Abu Dhabi Wonders
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
                        <span>AED2575</span>/ Per Person
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
                            to={`${process.env.PUBLIC_URL}/package-details/dubai-local-tour-package`}
                        >
                            Dubai Local Tour Package
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
                        <span>AED1376</span>/ Per Person
                    </h5>
                </div>
            </li>
        </ul>
    </div> */}