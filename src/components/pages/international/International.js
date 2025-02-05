import React, { useEffect } from "react";
import BreadCrumb from "../dubai/BreadCrumb";
import International from "../home/International";
import { data } from "../../../json/international_packages";
import { Link } from "react-router-dom";


const InternationalPackages = () => {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <BreadCrumb />

      <div className="container mt-4">
        <div className="row">
          {data
            .sort((a, b) => parseInt(a.Price.replace(/\D/g, "")) - parseInt(b.Price.replace(/\D/g, "")))
            .map((item, index) => (

              <div key={item.ID} className="col-12 col-md-6 col-lg-4 mb-4">

                <div className="package-card">
                  <div className="package-thumb">
                    <Link to={`${process.env.PUBLIC_URL}/package-details/${item.name.replace(/\s+/g, "-").toLowerCase()}`}>
                      {/* <Link to={`${process.env.PUBLIC_URL}/package-details/I${index+1}`}> */}
                      <img src={require(`../../../assets/images/international/${item.image}.jpeg`)} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    <div className="package-info">
                      <h5>
                        <span>{item.Price}</span>/Per Person <br /> (Cost Based on 2 Pax)
                      </h5>
                      <h5>
                        <i className="flaticon-calendar" />{item.Nights}
                      </h5>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link to={`${process.env.PUBLIC_URL}/package-details/${item.name.replace(/\s+/g, "-").toLowerCase()}`}>
                        {item.name}
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
                    </div>
                  </div>
                </div>

              </div>
            ))}

        </div>
      </div>

      {/* <International /> */}
    </>
  );
};

export default InternationalPackages;
