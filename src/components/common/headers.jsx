import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//Import Image
import logoMain from "../../assets/images/logo.png";
class Headers extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        {/* =============== Topbar area start =============== */}
        <div className="topbar-area">
          <div className="container">
            <div className="row">
              <div className="tob-contact-row">
                <div className="topbar-contact">
                  <ul>
                    <li>
                      <i className="bx bxs-phone" />
                      <a href="tel:+17632275032">+971-54-401-3834</a>
                    </li>

                    <li>
                      <i className="bx bxl-instagram" />
                      <a href="https://www.instagram.com/deserthoppers">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <i className="bx bxl-facebook" />
                      <a href="https://www.facebook.com/share/18BQscnH9K/?mibextid=LQQJ4d">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <i className="bx bxl-whatsapp" />
                      <a
                        href={`https://wa.me/+971544013834?text=${encodeURIComponent(
                          "Hello, I would like to enquire about your services."
                        )}`}
                      >
                        Whatsapp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============== Topbar area end =============== */}

        {/* ===============  header area start =============== */}
        <header className="navbar-header">
          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                  <div className="navbar-wrap">
                    <div className="logo d-flex justify-content-between">
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        className="navbar-brand"
                        onClick={this.scrollTop}
                      >
                        <div style={{ display: "flex" }}>
                          <img
                            src={logoMain}
                            alt=""
                            className="navbar-logo-img"
                          />
                          <span className="lg:block self-center pl-2">
                            <h1 style={{fontWeight: "bolder"}} className="lg:text-[50px] text-[20px]">
                              DESERTHOPPERS<span style={{color: "#ffa500"}}>.COM</span>
                            </h1>
                          </span>

                        </div>
                      </Link>
                    </div>
                    <div className="navbar-icons">
                      <div className="mobile-menu d-flex ">
                        <div className="top-search-bar m-0 d-block d-xl-none"></div>
                        <Link to={"#"} className="hamburger d-block d-xl-none">
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <nav className="main-nav">
                    <div className="navber-logo-sm">
                      <img
                        src={logoMain}
                        alt=""
                        className="img-fluid navbar-logo-img"
                      />
                    </div>
                    {/* NAVIGATION LINKS */}
                    <ul>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/`}
                          className="sub-item"
                          onClick={this.scrollTop}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/bothDestinaton`}
                          onClick={this.scrollTop}
                        >
                          Destinations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/blog`}
                          onClick={this.scrollTop}
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/contact`}
                          onClick={this.scrollTop}
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      {/* <li style={{ verticalAlign: "middle" }}>
                        <a href="tel:+17632275032">
                          <span>
                            <h2 style={{ color: "#386641", fontSize: "34px", fontWeight: "bold", fontFamily: "fantasy" }}>
                              <i className="bx bxs-phone" style={{ verticalAlign: "text-bottom", color: "" }} />
                              <span>+971-54-401-3834</span>
                            </h2>
                          </span>
                        </a>
                      </li> */}
                    </ul>
                    <div className="sidebar-contact">
                      <ul>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <Link to={`tel:+971-54-401-3834`}>
                            +971-54-401-3834
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <form>
              <div className="main-searchbar">
                <div className="searchbar-close">
                  <i className="bx bx-x" />
                </div>
                <input type="text" placeholder="Search Here......" />
                <div className="searchbar-icon">
                  <i className="bx bx-search" />
                </div>
              </div>
            </form>
          </div>
        </header>
        {/* ===============  header area end =============== */}
      </>
    );
  }
}

export default Headers;
