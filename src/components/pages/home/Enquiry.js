import React, { useState } from "react";
import AiportCodes from "../../../json/airport_codes.json";
import SearchableInput from "../../common/searchable";

const Enquiry = () => {
  const [noOfChilds, setNumberOfChilds] = useState(0);
  const [error,setError] = useState({
    error:false,
    message:""
  })

  const handleChild = (e) => {
    if (e.target.value <= 7) {
      setNumberOfChilds(e.target.value);
    }
    else{
      setError({
        error:true,
        message:"Cannot be more then 7"
      })
      setTimeout(()=>{
        setError({
          error:false,
          message:""
        })
      },3000)
    }

  };

  return (
    <div
      className="contact-inputs w-full flex justify-center  enquiry-form max-h-[700px] overflow-y-auto overflow-x-hidden no-scrollbar"
      id="enquiry-form-id"
    >
      <div className="center enquiry-form-inside w-full">
        <div className="contact-form">
          <form
            name="trip-enquiry"
            method="post"
            className="flex flex-col justify-center items-center"
          >
            <input type="hidden" name="form-name" value="trip-enquiry" />
            <h5 className="contact-d-head d-flex justify-content-center">
              Enquire Now
            </h5>
            <div className="row w-full flex flex-col justify-center items-center">
              <div className="col-lg-6">
                <label htmlFor="to">Travelling To</label>
                <SearchableInput data={AiportCodes}/>
              </div>
              <div className="col-lg-6">
                <label htmlFor="no">No of adults</label>
                <input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="No of adults"
                  name="no"
                  min="0"
                  required
                />
              </div>
              <div className="col-lg-6 mb-2">
                <label htmlFor="no">No of child</label>
                <input
                  style={{ width: "100%",marginBottom:0 }}
                  type="number"
                  placeholder="No of child"
                  name="no"
                  min="0"
                  value={noOfChilds}
                  required
                  onChange={handleChild}
                />
                {error.error && <span className="text-red-500 text-sm font-semibold">{error.message}</span>}
              </div>

              {noOfChilds !== 0 &&
                Array.from({ length: noOfChilds }).map((_, index) => (
                  <div className="col-lg-6 pb-2" key={index}>
                    <label htmlFor="childAge">Child {index + 1} age </label>
                    <select
                      name="childAge"
                      id="aiport"
                      style={{ marginBottom: "0" }}
                    >
                      <option value="">Select Age</option>
                      <option value="0-1">0-1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="4">5</option>
                      <option value="4">6</option>
                      <option value="4">7</option>
                    </select>
                  </div>
                ))}

              <div className="col-lg-6">
                <label htmlFor="when">Depart Date</label>
                <input
                  style={{ width: "100%" }}
                  type="date"
                  placeholder="Depart"
                  name="when"
                  required
                />
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
