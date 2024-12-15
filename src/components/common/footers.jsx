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
      const phoneNumber = "+918447510420"; // Replace with the WhatsApp number
      const message = "Hello, I would like to enquire about your services."; // Default message
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    };
    return (
      <>
        {/* ===============  Newsletter area start =============== */}
        <div className="newsletter-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="newsletter-wrapper">
                  <h2>Terms and Conditions</h2>
                  <div className="new-social-container">
                    <ol type="a">
                      <li>1) The above rates are quoted in AED, Nett and non-commissionable to you.</li>
                      <li>2) Above is just an offer and we are not holding any booking against this query.</li>
                      <li>3) All services/rooms are subject to availability at the time of receiving final confirmation from your end.</li>
                      <li>4) The above quote is valid only for this query and may vary in case the number of passengers change.</li>
                      <li>5) Please be reminded that all special requests like early check-in, smoking, nonsmoking, views, floors, king, twin, adjoining / interconnecting rooms are strictly subject to availability upon arrival and same cannot be guaranteed prior.</li>
                      <li>6) If the Hotel or Suppliers change their Quote for the services that they offer, the same will be forwarded to your Company.</li>
                      <li>7) Burj Khalifa tour once booked cannot be cancelled, also be informed the Burj Khalifa tour charge is nonrefundable and non-transferable.</li>
                      <li>8) Kindly note that during Major Exhibitions/Events additional surcharge will be applicable, Surcharge may vary depending on the Hotels and will be advised at the time of final confirmation.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Newsletter area end =============== */}

        {/* =============== Footer Area Start ================= */}
        <div className="bg-black max-[650px]:h-screen text-white flex justify-center py-[70px]">
          <div className="w-[80%] flex flex-col items-center gap-3">
            <h1 className="text-3xl font-extrabold">
              Desert <span className="text-orange-300">Hoopers</span>
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
        </div>
        {/* ==============  Footer area end================= */}
      </>
    );
  }
}

export default Footers;
