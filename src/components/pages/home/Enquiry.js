import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import AiportCodes from "../../../json/airport_codes.json";
import SearchableInput from "../../common/searchable";

const Enquiry = () => {
  const [noOfChilds, setNumberOfChilds] = useState(0);
  const [error, setError] = useState({ error: false, message: "" });
  const [formData, setFormData] = useState({
    travellingTo: "",
    noOfAdults: "",
    noOfChilds: 0,
    childAges: [],
    departDate: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      travelling_to: formData.travellingTo || "Not specified",
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

  {/* <SearchableInput
            data={[]} // empty array [] passed instead of AiportCodes
            onSelect={(value) =>
              setFormData((prev) => ({ ...prev, travellingTo: value }))
            }
          /> */}

  return (
    <div className="enquiry-form mt-5 max-h-[700px] overflow-y-auto" style={{ justifySelf: "end"}}>
      <div className="enquiry-form-inside w-full">
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <h5 className="text-center" style={{margin:"10px"}}>Enquire Now</h5>

          <label>Travelling To</label>
          <input
            type="text"
            placeholder="Travelling To"
            required
            value={formData.travellingTo}
            style={{width:"100%"}}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, travellingTo: e.target.value }))
            }
          />

          <label>No of Adults</label>
          <input
            type="number"
            placeholder="No of adults"
            min="0"
            required
            value={formData.noOfAdults}
            style={{width:"100%"}}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, noOfAdults: e.target.value }))
            }
          />

          <label>No of Children</label>
          <input
            type="number"
            placeholder="No of children"
            min="0"
            value={noOfChilds}
            onChange={handleChild}
            style={{width:"100%"}}
          />
          {error.error && <span className="text-red-500">{error.message}</span>}

          {noOfChilds > 0 &&
            Array.from({ length: noOfChilds }).map((_, index) => (
              <div key={index} style={{width:"100%"}}>
                <label>Child {index + 1} Age</label>
                <select
                  onChange={(e) => handleChildAge(index, e.target.value)}
                  required
                  style={{width:"100%"}}
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

          <label>Depart Date</label>
          <input
            type="date"
            required
            value={formData.departDate}
            style={{width: "-webkit-fill-available"}}
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
  );
};

export default Enquiry;
