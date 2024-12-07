import React, { Component } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-datepicker/dist/react-datepicker.css";
import Enquiry from "./Enquiry";
import "../../../assets/css/style.css";
import bannerVideo from '../../../assets/images/dubai/banner.MP4';

class MainBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
        startDate:new Date(),
    };
  }

  changeDatepickerHandeller=(date)=>{
        this.setState({ startDate: date });
  }

  render() {

      const mainBannerOptions = {
          items: 1,
          loop: true,
          margin:0,
          smartSpeed: 700,
          dots: false,
          nav: false,
          autoplay: false,
          autoplayTimeout:4000,
          autoplayHoverPause:true,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          navText : [],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              600:{
                  items:1,
                  nav:false,
                  dost : false,
              },
              1000:{
                  items:1,
                  nav:false,
                  loop:false
              },
          }
      };

      const startDate =this.state.startDate;
      return (
        <>
          {/* ===============  Main banner area start =============== */}
          <div className="main-banner">
            <section className="hero">
              {/* Video as background */}
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
      
              {/* Overlay Content */}
              <div className="overlay-content">
                <div className="slider-item slider-item-1">
                  <div className="container">
                    <div
                      className="slider-content wow fadeInLeft animated"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      {/* Enquiry Component */}
                      <Enquiry />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* ===============  Main banner area end =============== */}
        </>
      );
      
  }
}

export default MainBanner;
