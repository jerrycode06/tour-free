import React from "react";

const Enquiry = () => {
  return (
    <div className="contact-inputs p-100 enquiry-form" id="enquiry-form-id">
      <div className="center enquiry-form-inside">
        <div className="contact-form">
          <form name="trip-enquiry" method="post">
            <input type="hidden" name="form-name" value="trip-enquiry" />
            <h5 className="contact-d-head d-flex justify-content-center">Enquire Now</h5>
            <div className="row">
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
                <label htmlFor="no">No of adults</label>
                <input
                  type="number"
                  placeholder="No of adults"
                  name="no"
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="no">No of child</label>
                <input
                  type="number"
                  placeholder="No of child"
                  name="no"
                  required
                />
              </div>
              <div className="col-lg-6">
                <label htmlFor="when">Child age</label>
                <input type="number" placeholder="child age" name="no" required />
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
