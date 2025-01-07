import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import svg1 from "../../assets/images/links/facebook-176-svgrepo-com.svg";
import svg2 from "../../assets/images/links/instagram-svgrepo-com.svg";
import svg3 from "../../assets/images/links/linkedin-svgrepo-com.svg";
import svg4 from "../../assets/images/links/whatsapp-svgrepo-com.svg";
import svg5 from "../../assets/images/links/address-location-map-svgrepo-com.png";
import svg6 from "../../assets/images/links/phone-call-svgrepo-com.png";
import svg7 from "../../assets/images/links/mail-svgrepo-com.png";
import PackagesData from "../../dessert-hopper-data.json";

class Footers extends Component {
  //Inherited Parent options.
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Init Js Scripts
  componentDidMount() {
    this.intiScripts();
  }

  intiScripts() {
    $(document).ready(function () {
      //  custom select input
      var x, i, j, l, ll, selElmnt, a, b, c;
      x = document.getElementsByClassName("custom-select");
      l = x.length;
      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML === this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
          /*when the select box is clicked, close any other select boxes,
                    and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      }
      function closeAllSelect(elmnt) {
        var x,
          y,
          i,
          xl,
          yl,
          arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt === y[i]) {
            arrNo.push(i);
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      document.addEventListener("click", closeAllSelect);

      // mobile menu
      $(".hamburger").on("click", function (event) {
        $(this).toggleClass("h-active");
        $(".main-nav").toggleClass("slidenav");
      });

      $(".header-home .main-nav ul li  a").on("click", function (event) {
        $(".hamburger").removeClass("h-active");
        $(".main-nav").removeClass("slidenav");
      });

      $(".main-nav .fl").on("click", function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find(".sub-menu").slideUp();
        $(this)
          .parent()
          .siblings()
          .find(".fl")
          .addClass("flaticon-plus")
          .text("+");
        if ($fl.hasClass("flaticon-plus")) {
          $fl.removeClass("flaticon-plus").addClass("flaticon-minus").text("-");
        } else {
          $fl.removeClass("flaticon-minus").addClass("flaticon-plus").text("+");
        }
        $fl.next(".sub-menu").slideToggle();
      });

      //account dropdown
      var accountCard = document.querySelectorAll(".account-dropdown");
      var userIcon = document.querySelectorAll(".user-dropdown-icon i");

      userIcon.forEach((el) => {
        el.addEventListener("click", () => {
          accountCard.forEach((element) => {
            element.classList.toggle("activeCard");
          });
        });
      });

      // Search Bar js
      var searchOpen = document.querySelectorAll(".searchbar-open i");
      var searchCard = document.querySelectorAll(".main-searchbar");
      var searchClose = document.querySelectorAll(".searchbar-close i");

      searchOpen.forEach((el) => {
        el.addEventListener("click", () => {
          searchCard.forEach((el) => {
            el.classList.add("activeSearch");
          });
        });
      });
      searchClose.forEach((el) => {
        el.addEventListener("click", () => {
          searchCard.forEach((el) => {
            el.classList.remove("activeSearch");
          });
        });
      });

      window.onclick = function (event) {
        searchCard.forEach((el) => {
          if (event.target === el) {
            el.classList.remove("activeSearch");
          }
        });
        if (!event.target.matches(".user-dropdown-icon i")) {
          accountCard.forEach((element) => {
            if (element.classList.contains("activeCard")) {
              element.classList.remove("activeCard");
            }
          });
        }
      };

      // sticky navabr js
      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
      });

      $(".preloader").delay(1000).fadeOut("slow");
    });
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const handleWhatsAppClick = () => {
      const phoneNumber = "+971544013834"; // Replace with the WhatsApp number
      const message = "Hello, I would like to enquire about your services."; // Default message
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    };
    return (
      <>
        {/* ===============  Newsletter area start =============== */}
        {/* <div className="newsletter-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="newsletter-wrapper">
                  <h2>Terms and Conditions</h2>
                  <div className="new-social-container">
                    <ol type="a">
                      <li>1)	This is only land package and price are subject to availability, Package price may change during peak seasons & if dates & schedules change. </li>
                      <li>2)	Offered Packages are as per the current promotions.</li>
                      <li>3)	Booking will be consider confirmed as per the payment policy.</li>
                      <li>4)	Final vouchers will be issued only once we has received the full payment.</li>
                      <li>5)	The booking is deemed cancelled if full payment is not received within 15 days prior to departure.</li>
                      <li>6)	The customer hereby agrees that customized package is as per his/her will and choice & final price is as per inclusions selected by the customers, in case the customer has changed any component, the same will be updated in the final price.</li>
                      <li>7)	Customers’ final confirmation will have exact components which were selected and reviewed by the customer while booking the package.</li>
                      <li>8)	Mentioned itineraries are tentative & may change as per the real time scenario’s.</li>
                      <li>9)	The prices displayed have been calculated as per the rate of exchange prevailing at the time of costing.</li>
                      <li>10)	Desert Hoppers Tourism LLC reserves the right to amend the hotels on similar category in case of Non-Availability.</li>
                      <li>11)	Desert Hoppers Tourism LLC reserves the right to change the prices in case of currency fluctuations, changes in the various gross rates of exchange, special/high season charge levied by the suppliers, hike in rail charges before the date of departure and to surcharge accordingly. All such increases in price must be paid in full before the departure by the client.</li>
                      <li>12)	Any Visa cost fluctuations will have to be borne by the passenger.</li>
                      <li>13)	For late night or early morning airport transfers supplements would be applicable.</li>
                      <li>14)	Standard check in / out time is 1500 hrs / 1100 hrs for all international hotels, no guarantee for early check in & late checkout. For Guaranteed check in / out, supplement charges will be applicable.</li>
                      <li>15)	100% cancellations will be applicable once the Booking is re- confirmed.</li>
                      <li>16)	The Credit Note for the remaining amount after all applicable cancellations would be shared with you which could be utilize against your next booking with us.</li>
                      <li>17)	In case seat in coach (sharing basis tours/transfer) the client should follow the timing on the ground. If any transfer is missed, Desert Hoppers Tourism LLC will not be responsible, and the client will bear the extra cost.</li>
                      <li>18)	The passport must be valid for at least 6 months from the return date of departure. Client’s responsibility to obtain correct, current, and valid passports and re-entry permits where required. Please reach out to our team if you need any help with this.</li>
                      <li>19)	Desert Hoppers Tourism LLC will not be responsible if in case the passenger could not travel due to any circumstances, cancellation policy will be applicable accordingly.</li>



                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="terms-container">
          <div className="terms-content">
            <h1 className="terms-title">Terms and Conditions</h1>
            <ol className="terms-list">
              <li>This is only a land package and prices are subject to availability. Package prices may change during peak seasons or if dates or schedules change.</li>
              <li>Offered packages are as per the current promotions.</li>
              <li>Booking will be considered confirmed as per the payment policy.</li>
              <li>Final vouchers will be issued only once full payment has been received.</li>
              <li>The booking is deemed cancelled if full payment is not received within 15 days prior to departure.</li>
              <li>The customer agrees that the customized package is as per their will and choice. The final price reflects the inclusions selected by the customer. Any changes will be reflected in the final price.</li>
              <li>Customers’ final confirmation will include exact components selected and reviewed by the customer during booking.</li>
              <li>Mentioned itineraries are tentative and may change based on real-time scenarios.</li>
              <li>The displayed prices are calculated as per the prevailing exchange rate at the time of costing.</li>
              <li>Desert Hoppers Tourism LLC reserves the right to amend hotels to a similar category in case of non-availability.</li>
              <li>Prices are subject to changes due to currency fluctuations, supplier charges, or rail charge hikes. These changes must be paid in full before departure.</li>
              <li>Any visa cost fluctuations will be borne by the passenger.</li>
              <li>Late-night or early-morning airport transfers will incur additional charges.</li>
              <li>Standard check-in/out times for hotels are 3:00 PM/11:00 AM. Early check-in/out is subject to additional charges.</li>
              <li>100% cancellation fees apply once the booking is confirmed.</li>
              <li>Credit notes for remaining amounts after cancellations can be used for future bookings.</li>
              <li>For seat-in-coach (sharing basis) tours, clients must adhere to the provided timing. Missed transfers are the client’s responsibility, and additional costs will apply.</li>
              <li>Passports must be valid for at least six months from the return date of departure. Clients must ensure valid documentation.</li>
              <li>Desert Hoppers Tourism LLC is not responsible if passengers cannot travel due to circumstances. The cancellation policy will apply.</li>
            </ol>
          </div>
        </div> */}

        {/* ===============  Newsletter area end =============== */}

        {/* =============== Footer Area Start ================= */}


        {/* COMMENTED CODE FOR FOOTER */}
        {/* <div className="bg-black  text-white flex justify-center py-[70px]">
          <div className="w-[80%] flex flex-col items-center gap-3">
            <h1 className="text-3xl font-extrabold">
              Desert <span className="text-orange-300">Hoppers</span>
            </h1>
            <h2
              className="text-xl text-white"
              style={{ fontFamily: "Oswald", fontWeight: "600" }}
            >
              FOLLOW US
            </h2>
            <div className="flex gap-2  max-[650px]:justify-evenly max-[650px]:w-full ">
              <a
                className="bg-orange-300 p-2 rounded-lg "
                href="https://www.facebook.com/share/18BQscnH9K/?mibextid=LQQJ4d"
              >
                <img
                  src={svg1}
                  alt=""
                  height={20}
                  width={20}
                  className="filter invert"
                />
              </a>
              <a
                className="bg-orange-300 p-2 rounded-lg"
                href="https://www.instagram.com/deserthoppers"
              >
                <img
                  src={svg2}
                  alt=""
                  height={20}
                  width={20}
                  className="filter invert"
                />
              </a>
              <span className="bg-orange-300 p-2 rounded-lg">
                <img
                  src={svg3}
                  alt=""
                  height={20}
                  width={20}
                  className="filter invert"
                />
              </span>
              <button
                className="bg-orange-300 p-2 rounded-lg"
                onClick={handleWhatsAppClick}
              >
                <img
                  src={svg4}
                  alt=""
                  height={20}
                  width={20}
                  className="filter invert"
                />
              </button>
            </div>
            <h2
              className="text-xl text-white"
              style={{ fontFamily: "Oswald", fontWeight: "600" }}
            >
              GET IN TOUCH
            </h2>
            <span className="text-center text-sm flex relative max-[650px]:w-[95%]">
              <img
                src={svg5}
                alt=""
                height={18}
                width={18}
                className="absolute left-6"
              />{" "}
              C13-28-370 Hamsah A Building <br />
              Al Karama Dubai, United Arab Emirates (87556)
            </span>
            <span className="text-center text-sm flex gap-2">
              <img src={svg6} alt="" height={18} width={18} />{" "}
              <a href="tel:+971-54-401-3834">+971-54-401-3834</a>
            </span>
            <span className="text-center text-sm flex gap-2">
              <img src={svg7} alt="" height={18} width={18} />{" "}
              <a href="mailto:enquiry@deserthoppers.com">
                enquiry@deserthoppers.com
              </a>
            </span>
            <div className="flex gap-[100px] max-[650px]:block">
              <div className="flex flex-col pb-3">
                <h5
                  className="text-2xl font-bold pb-3"
                  style={{ fontFamily: "Oswald", fontWeight: "600" }}
                >
                  Popular Packages
                </h5>
                <ul className="flex flex-col text-orange-300 font-bold ">
                  <li className="">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details/10`}
                      onClick={this.scrollTop}
                    >
                      Hotel With Burj Khalifa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details/18`}
                      onClick={this.scrollTop}
                    >
                      Abu Dhabi City Tour
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details/19`}
                      onClick={this.scrollTop}
                    >
                      Burj Khalifa and Abu Dhabi
                    </Link>

                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/package-details/33`}
                        onClick={this.scrollTop}
                      >
                        Dubai Basic City Tour
                      </Link>
                    </li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/package-details/11`}
                      onClick={this.scrollTop}
                    >
                      Hotel Without Burj Khalifa
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2
                  className="text-xl text-white pb-3 "
                  style={{ fontFamily: "Oswald", fontWeight: "600" }}
                >
                  QUICK LINKS
                </h2>
                <ul className="text-orange-300 font-bold ">
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}`}
                      onClick={this.scrollTop}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/contact`}
                      onClick={this.scrollTop}
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/contact`}
                      onClick={this.scrollTop}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${process.env.PUBLIC_URL}/bothDestinaton`}
                      onClick={this.scrollTop}
                    >
                      Destinations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        {/* Footer added by Raza A Naqvi */}
        <div className="bg-black text-white p-3" style={{fontFamily:'Quicksand'}}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h1 className="text-xl font-bold mb-4">
                DESERTHOPPERS <span className="text-orange-300">.COM</span>
              </h1>
              <p className="text-sm text-white">
                Experience the beauty of Dubai and beyond with our exclusive travel
                packages. Your adventure awaits!
              </p>
            </div>

            <hr className="block lg:hidden" />

            {/* Popular Packages Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "Quicksand" }}>
                POPULAR PACKAGES
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/package-details/10", text: "Hotel With Burj Khalifa" },
                  { href: "/package-details/18", text: "Abu Dhabi City Tour" },
                  { href: "/package-details/19", text: "Burj Khalifa and Abu Dhabi" },
                  { href: "/package-details/33", text: "Dubai Basic City Tour" },
                  { href: "/package-details/11", text: "Hotel Without Burj Khalifa" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} onClick={this.scrollTop} className="hover:underline">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="block lg:hidden" />

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "Quicksand" }}>
                QUICK LINKS
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/", text: "Home" },
                  { href: "/contact", text: "Contact Us" },
                  { href: "/blog", text: "Blog" },
                  { href: "/bothDestinaton", text: "Destinations" },
                  { href: "/tnc", text: "Terms & Conditions" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} onClick={this.scrollTop} className="hover:underline">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="block lg:hidden" />

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "Quicksand" }}>
                GET IN TOUCH
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <img src={svg5} alt="Location" width={16} height={16} />
                  C13-28-370 Hamsah A Building, Al Karama, Dubai, UAE (87556)
                </li>
                <li className="flex items-center gap-2">
                  <img src={svg6} alt="Phone" width={16} height={16} />
                  <a href="tel:+971-54-401-3834" className="hover:underline">
                    +971-54-401-3834
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <img src={svg7} alt="Email" width={16} height={16} />
                  <a href="mailto:enquiry@deserthoppers.com" className="hover:underline">
                    enquiry@deserthoppers.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-4 border-t border-gray-700 pt-4 text-center text-xs">
            © {new Date().getFullYear()} Desert Hoppers. All Rights Reserved.
          </div>
        </div>



        {/* ==============  Footer area end================= */}
      </>
    );
  }
}

export default Footers;
