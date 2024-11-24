import React, { Component } from "react";

class Achievement extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
       <>
           {/* =============== achievement area start =============== */}
           <div className="achievement-area p-80 mt-100">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-30">
                               <h5>Why Desert Hoppers?</h5>
                               <h4>Why you are travel with Desert Hoppers?</h4>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated animated-card" data-wow-duration="1500ms" data-wow-delay="0ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                                   <i className="flaticon-guide" />
                               </div>
                               <h5>Have worldwide
                                   guide</h5>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated animated-card" data-wow-duration="1500ms" data-wow-delay="200ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                                   <i className="flaticon-trust" />
                               </div>
                               <h5>Trusted travel agency</h5>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated animated-card" data-wow-duration="1500ms" data-wow-delay="400ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                                   <i className="flaticon-experience" />
                               </div>
                               <h5>Travel Experience</h5>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated animated-card" data-wow-duration="1500ms" data-wow-delay="600ms">
                           <div className="achievement-card mt-30">
                               <div className="achievement-icon">
                                   <i className="flaticon-traveller" style={{ transform: 'scale(0.3)' }}/>
                               </div>
                               <h5>Satisfied Travellers</h5>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* =============== achievement area end =============== */}
       </>
    );
  }
}

export default Achievement;
