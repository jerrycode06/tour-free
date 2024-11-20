import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

//Import Image
import logoMain from "../../assets/images/logo.png";
import secondLogo from "../../assets/images/logo-2.png";

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
              <div className="col-lg-5 col-md-5 tob-contact-row">
                <div className="topbar-contact">
                  <ul>
                    <li>
                      <i className="bx bxs-phone" />
                      <a href="tel:+17632275032">+971-54-401-3834</a>
                    </li>

                    <li>
                      <i className="bx bxl-instagram" />
                      <a href="https://www.instagram.com/deserthoppers">Instagram</a>
                    </li>
                    <li>
                      <i className="bx bxl-facebook" />
                      <a href="https://www.facebook.com/share/18BQscnH9K/?mibextid=LQQJ4d">Facebook</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="topbar-social">
                  <ul>
                    <li>
                      <Link to={"https://www.instagram.com/deserthoppers"}>
                        <i className="bx bxl-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-whatsapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="custom-select languege-select">
                  <select>
                    <option value={0}>ENG</option>
                    <option value={1}>BAN</option>
                    <option value={2}>FSP</option>
                    <option value={3}>CHI</option>
                  </select>
                </div>
              </div> */}
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
                        <img src={"https://deserthoppers.com/assets/images/logo.png"} alt="" className="navbar-logo-img"/>
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
                      <img src={"https://deserthoppers.com/assets/images/logo.png"} alt="" className="img-fluid" width={130} height={80} />
                    </div>
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
                        {/* <Link to={"#"}>Home</Link>
                                            <i className="fl flaticon-plus">+</i> */}
                        {/* <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.scrollTop}>Home Page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/home-page-2`} className="sub-item" onClick={this.scrollTop}>Home Page 2</NavLink>
                                                </li>
                                            </ul> */}
                      </li>
                      {/* <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/about-us`}
                          onClick={this.scrollTop}
                        >
                          About us
                        </NavLink>
                      </li> */}
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/destination`}
                          onClick={this.scrollTop}
                        >
                          Destinations
                        </NavLink>
                      </li>
                      {/* <li className="has-child-menu">
                        <Link to={"#"}>Tour Package</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              package
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package-sidebar`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              package sidebar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package-standard`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              package standard
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/package-details`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              package details
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      {/* <li className="has-child-menu">
                        <Link to={"#"}>Pages</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/gallary`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              gallary page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/guide`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              guide page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/destination`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              destination page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/404`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              404 Page
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/faq`}
                              className="sub-item"
                              onClick={this.scrollTop}
                            >
                              FAQ page
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <NavLink
                          activeClassName="active"
                          to={`${process.env.PUBLIC_URL}/contact`}
                          onClick={this.scrollTop}
                        >
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                    <div className="sidebar-contact">
                      <ul>
                        <li className="sidebar-single-contact">
                          <i className="bx bxs-phone" />
                          <Link to={`tel:+971-54-401-3834`}>+971-54-401-3834</Link>
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
