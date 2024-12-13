import React from "react";
import AiportCodes from "../../../json/airport_codes.json";

const Enquiry = () => {
  return (
    <div className="contact-inputs p-100 enquiry-form" id="enquiry-form-id">
      <div className="center enquiry-form-inside">
        <div className="contact-form">
          <form name="trip-enquiry" method="post">
            <input type="hidden" name="form-name" value="trip-enquiry" />
            <h5 className="contact-d-head d-flex justify-content-center">
              Enquire Now
            </h5>
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="to">Travelling To</label>
                <select
                  name="aiport"
                  id="aiport"
                  style={{ width: "90%", marginBottom: "0" }}
                >
                  <option value="">Select Airport</option>
                  {AiportCodes.map((item, index) => (
                    <option key={index} value={item.code}>
                      {item.code}, {item.city}, {item.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6">
                <label htmlFor="no">No of adults</label>
                <input
                  type="number"
                  placeholder="No of adults"
                  name="no"
                  min="0"
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="no">No of child</label>
                <input
                  type="number"
                  placeholder="No of child"
                  name="no"
                  min="0"
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="childAge">Child age</label>
                <select
                  name="childAge"
                  id="aiport"
                  style={{ width: "90%", marginBottom: "0" }}
                >
                  <option value="">Select Age</option>
                  <option value="0-1">0-1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4">5</option>
                  <option value="4">6</option>
                  <option value="4">7</option>
                  <option value="4">8</option>
                  <option value="4">9</option>
                  <option value="4">10</option>
                </select>
              </div>
              <div className="col-lg-6">
                <label htmlFor="when">Depart Date</label>
                <input type="date" placeholder="Depart" name="when" required />
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <input type="submit" defaultValue="Submit Now" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
