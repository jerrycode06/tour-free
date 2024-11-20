import React from "react";

const Enquiry = () => {
  return (
    <div className="contact-inputs p-100">
      <div className="center" style={{ padding: "10px 100px" }}>
        <div className="contact-form">
          <form name="trip-enquiry" method="post">
            <input type="hidden" name="form-name" value="trip-enquiry" />
            <h5 className="contact-d-head">Trip in mind?</h5>
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="from">Leaving From</label>
                <input
                  type="text"
                  placeholder="Leaving From"
                  name="from"
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="to">Travelling To</label>
                <input
                  type="text"
                  placeholder="Travelling To"
                  name="to"
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="when">Depart Date</label>
                <input type="date" placeholder="Depart" name="when" required />
              </div>
              <div className="col-lg-6">
                <label htmlFor="budget">Budget</label>
                <select name="budget">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="col-lg-12">
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
