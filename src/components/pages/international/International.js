import React, { useEffect } from "react";
import BreadCrumb from "../dubai/BreadCrumb";
import International from "../home/International";

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
      <International />
    </>
  );
};

export default InternationalPackages;
