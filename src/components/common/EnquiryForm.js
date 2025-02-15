import React, { useState, useEffect } from "react";
import "../../assets/css/style.css"; // CSS file for styling
// import phoneIcon from "../../assets/images/call-us.png";
// import whatsappIcon from "../../assets/images/links/whatsapp-button.png";
// import enquireIcon from "../../assets/images/links/enq.png";
import emailjs from "@emailjs/browser";

const EnquiryForm = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState({ error: false, message: "" });

    const [noOfChilds, setNumberOfChilds] = useState(0);
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

    // Open modal handler
    const openModal = () => {
        setModalOpen(true);
        // Push a state to the history stack to handle the back button
        window.history.pushState({ modalOpen: true }, "");
    };

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

    // Close modal handler
    const closeModal = () => {
        console.log("Close Modal");
        setModalOpen(false);
        // Go back in history if the modal was opened by pushing a state
        if (window.history.state?.modalOpen) {
            window.history.back();
        }
    };

    // Handle browser back button
    useEffect(() => {
        const handlePopState = (event) => {
            if (isModalOpen && event.state?.modalOpen) {
                setModalOpen(false); // Close modal
            }
        };

        // Listen to the popstate event
        window.addEventListener("popstate", handlePopState);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [isModalOpen]);

    const handlePhoneClick = () => {
        window.location.href = "tel:+971505829005";
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+971505829005";
        const message = "Hello, I would like to enquire about your services.";
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    const handleEnquireNowClick = () => {
        window.location.href = "/";
        window.location.href = "#enquiry-form-id";
    };

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
        <div className="modal-overlay" style={{ backgroundColor: "#000000eb", padding: "20px" }}>
            <div
                className="contact-inputs p-100 enquiry-form container"
                id="enquiry-form-id" style={{
                    background: "#225822d6",
                    maxHeight: "80vh",
                    overflowY: "scroll",
                    marginTop: "10vh"
                }}
            >
                <div className="center enquiry-form-inside">
                    <div className="contact-form">
                        <button
                            className="close-modal-btn"
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                backgroundColor: "#ff0000",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                                cursor: "pointer",
                                zIndex: "9999",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "16px",
                            }}
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <form onSubmit={handleSubmit} className="flex flex-col ">
                            <h5 className="text-center" style={
                                {
                                    margin: "18px",
                                    fontFamily: 'Quicksand',
                                    fontSize: "xx-large",
                                    color: "WHITE",
                                    fontWeight: "500"
                                }}>ENQUIRE NOW</h5>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label style={{ color: "white" }}>Travelling To</label>
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
                                </div>
                                <div className="col-lg-6">
                                    <label style={{ color: "white" }}>No of Adults</label>
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
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <label style={{ color: "white" }}>No of Children</label>
                                    <input
                                        type="number"
                                        placeholder="No of children"
                                        min="0"
                                        value={noOfChilds}
                                        onChange={handleChild}
                                        style={{ width: "100%" }}
                                    />
                                    {error.error && <span className="text-red-500">{error.message}</span>}
                                </div>
                                <div className="col-lg-6">
                                    <label style={{ color: "white" }}>Depart Date</label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.departDate}
                                        style={{ width: "-webkit-fill-available" }}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, departDate: e.target.value }))
                                        }
                                    />
                                </div>
                            </div>

                            {noOfChilds > 0 &&
                                Array.from({ length: noOfChilds }).map((_, index) => (
                                    <div key={index} style={{ width: "100%" }}>

                                        <div className="row">

                                            <div className="col-lg-12">
                                                <label style={{ color: "white" }}>Child {index + 1} Age</label>
                                                <select
                                                    onChange={(e) => handleChildAge(index, e.target.value)}
                                                    required style={{ width: "100%", marginBottom: "10px" }}
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
                                        </div>

                                    </div>
                                ))}

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="">
                                        <label htmlFor="contactNo" style={{ color: "white", display: "block", marginBottom: "" }}>
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
                                                    marginBottom: "0px"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <label style={{ color: "white" }}>Email ID</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email ID"
                                        required
                                        value={formData.emailId}
                                        style={{ width: "100%", marginBottom: "0px" }}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, emailId: e.target.value }))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex items-center w-full justify-center mt-3"><button type="submit" className="bg-green-800 text-white p-2 mt-2 rounded">
                                Submit Now
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;
