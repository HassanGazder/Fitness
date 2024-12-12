import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader" />
      </div>
      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay" />
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close" />
        </div>
        <div className="canvas-search search-switch">
          <i className="fa fa-search" />
        </div>
        <nav className="canvas-menu mobile-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="#">Pages</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/About">About Us</Link>
                </li>
                <li>
                  <Link to="/class-timetable">Classes Timetable</Link>
                </li>
                <li>
                  <Link to="/bmi-calculator">BMI Calculator</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/blog">Our Blog</Link>
                </li>
                <li>
                  <Link to="/404">404</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

        </nav>
        <div id="mobile-menu-wrap" />
        <div className="canvas-social">
          <a to="#">
            <i className="fa fa-facebook" />
          </a>
          <a to="#">
            <i className="fa fa-twitter" />
          </a>
          <a to="#">
            <i className="fa fa-youtube-play" />
          </a>
          <a to="#">
            <i className="fa fa-instagram" />
          </a>
        </div>
      </div>
      {/* Offcanvas Menu Section End */}
      {/* Header Section Begin */}
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <a to="./index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li className="active">
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/About'}>About Us</Link>
                  </li>
                  <li>
                    <Link to={'/Classdetail'}>Classes</Link>
                  </li>
                  <li>
                    <Link to={'/Service'}>Services</Link>
                  </li>
                  <li>
                    <Link to={'/Team'}>Our Team</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to={'/About'}>About us</Link>
                      </li>
                      <li>
                        <Link to={'/Classtimetable'}>Classes timetable</Link>
                      </li>
                      <li>
                        <Link to={'/Bmi-Calculator'}>Bmi calculate</Link>
                      </li>
                      <li>
                        <Link to={'/Team'}>Our team</Link>
                      </li>
                      <li>
                        <Link to={'/Gallery'}>Gallery</Link>
                      </li>
                      <li>
                        <Link to={'/Blog'}>Our blog</Link>
                      </li>
                      <li>
                        <Link to={'/*'}>404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={'/Contact'}>Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-search search-switch">
                  <i className="fa fa-search" />
                </div>
                <div className="to-social">
                  <a to="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a to="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a to="#">
                    <i className="fa fa-youtube-play" />
                  </a>
                  <a to="#">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>


      {/* Header End */}
    </>
  );
}
export default Header;
