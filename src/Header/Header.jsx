import React from "react";
import image1 from './../image/1.jpg'
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image1}
                  className="d-block w-100 "
                  alt="..."
                  style={{
                    height: "750px",
                    backgroundSize: "cover",
                    position: "relative",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="col-12 col-auto text-end p-lg-0 p-xl-5 p-lg-3 p-sm-1"
                  style={{
                    bottom: "250px",
                    right: "9%",
                    width: "79%",
                    position: "absolute",
                  }}
                >
                  <h1
                    className=" fw-bolder text-light con-h1 pe-xl-5 pe-lg-2 pe-sm-0 "
                    style={{ fontSize: "55px" }}
                  >
                    WELCOME OUR BEFIT
                  </h1>
                  <p className=" d-flex justify-content-end text-light mt-xl-3 fs-p">
                    <span className=" w-50 pe-xl-5 pe-lg-2 pe-sm-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      acntium doemque laudantium, totam rem aperiam eaque ipsa
                      quae ab illo
                    </span>
                  </p>
                  <button
                    className="border-1 bg-transparent text-white px-3 py-2  me-3 rounded-1 mt-xl-5 mt-lg-3 btn-read"
                    style={{ border: "1px solid #fff" }}
                  >
                    Read More
                  </button>
                  <button
                    className="border-1 bg-transparent text-white px-3 py-2 me-xl-5 me-lg-2 me-sm-0 rounded-1 mt-xl-5 mt-lg-3 but-bm btn-read"
                    style={{ border: "1px solid #fff" }}
                  >
                    Contact Us
                  </button>
                </div>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="carousel-item">
                <img
                  src={image2}
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "750px",
                    backgroundSize: "cover",
                    position: "relative",
                    position: "relative",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="col-12 text-end p-xl-5 p-sm-3"
                  style={{
                    bottom: "250px",
                    right: "9%",
                    width: "79%",
                    position: "absolute",
                  }}
                >
                  <h1 className="fw-bolder text-light con-h1 pe-xl-5 pe-lg-2 pe-sm-0 fs-h1">
                    YOGA & MEDITATION
                  </h1>
                  <p className=" d-flex justify-content-end text-light mt-xl-3">
                    <span className="w-50 pe-xl-5 pe-lg-2 pe-sm-0 fs-p">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      acntium doemque laudantium, totam rem aperiam eaque ipsa
                      quae ab illo
                    </span>
                  </p>
                  <button
                    className="border-1 bg-transparent text-white px-3  py-2 me-3 rounded-1 mt-xl-5 mt-lg-3 but-bm btn-read "
                    style={{ border: "1px solid #fff" }}
                  >
                    Read More
                  </button>
                  <button
                    className="border-1 bg-transparent text-white px-3 py-2 me-xl-5 me-lg-2 me-sm-0 rounded-1 mt-xl-5 mt-lg-3 but-bm btn-read"
                    style={{ border: "1px solid #fff" }}
                  >
                    Contact Us
                  </button>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="carousel-item">
                <img
                  src={image3}
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "750px",
                    backgroundSize: "cover",
                    position: "relative",
                    position: "relative",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="col-12 text-start wd-xl p-xl-5 p-sm-3 "
                  style={{
                    bottom: "250px",
                    right: "9%",
                    width: "79%",
                    position: "absolute",
                  }}
                >
                  <h1 className="ps-xl-5 ps-lg-2 ps-sm-0 fw-bolder text-light  fs-h1">
                    YOUR HEALTH COACH
                  </h1>
                  <p className=" d-flex justify-content-start text-light mt-xl-3 ">
                    <span className="ps-xl-5  ps-lg-0 ps-sm-0 fs-p">
                      Sed parth ut perspiciatis unde omnis iste natus error sit
                      acntium doemque laudantium, totam rem aperiam eaque ipsa
                      quae ab illo
                    </span>
                  </p>
                  <button
                    className="border-1 bg-transparent text-white ps-3 py-2 ms-xl-5 ms-lg-2 ms-lg-0 rounded-1 mt-xl-5 mt-lg-3 btn-read"
                    style={{ border: "1px solid #fff" }}
                  >
                    Read More
                  </button>
                  <button
                    className="border-1  bg-transparent text-white px-3 py-2 ms-3 rounded-1 mt-xl-5 mt-lg-3 but-bm btn-read"
                    style={{ border: "1px solid #fff" }}
                  >
                    Contact Us
                  </button>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="carousel-item">
                <img
                  src={image4}
                  className="d-block w-100 "
                  alt="..."
                  style={{
                    height: "750px",
                    backgroundSize: "cover",
                    position: "relative",
                    position: "relative",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="col-12 text-start wd-xl p-xl-5 p-sm-3 "
                  style={{
                    bottom: "250px",
                    right: "9%",
                    width: "79%",
                    position: "absolute",
                  }}
                >
                  <h1 className="ps-xl-5 ps-lg-2 ps-sm-0 fw-bolder text-light coach-h1 fs-h1">
                    HEALTH & STRENGTH
                  </h1>
                  <p className=" d-flex justify-content-start text-light mt-xl-3 ">
                    <span
                      className=" ps-xl-5  ps-lg-0 ps-sm-0 fs-p"
                      style={{ width: "68%" }}
                    >
                      Sed ut perspiciatis unde omnis iste natus error sitacntium
                      doemque laudantium, totam rem aperiam eaque ipsa quae ab
                      illo
                    </span>
                  </p>
                  <button
                    className="border-1 bg-transparent btn-read text-white ps-3
                    py-2 ms-xl-5 ms-lg-2 ms-lg-0 rounded-1 mt-xl-5 mt-lg-3
                    btn-color" style={{ border: "1px solid #fff" }}>Read More
                  </button>
                  <button className="border-1 btn-read  bg-transparent text-white px-3 py-2 ms-3 rounded-1 mt-xl-5 mt-lg-3 but-bm btn-color" style={{ border: "1px solid #fff" }}>
                    Contact Us
                  </button>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
              </div>
              <div className="row px-4 py-4">
                <div
                  className="col-xl-6 col-lg-4 col-md-9 col-sm-9 col-auto ps-5 pt-3 fw-bolder text-white"
                  style={{ position: "absolute", top: "0" }}
                >
                  <h1>Befit</h1>
                </div>
                <div
                  className=" col-xl-6 col-lg-8  col-md-3  col-sm-3 col-auto pt-3 justified-content-end header-position"
                  style={{ position: "absolute", right: "0px", top: "0" }}
                >
                  <nav className="navbar navbar-expand-lg w-75">
                    <button
                      className="navbar-toggler  bg-white text-black py-2 px-3 btn btn-border"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="">Menu</span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a
                            className="nav-link active me-3 ms-1 ps-3 pe-3 text-black bg-white rounded-2 urvisha"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link me-3 ms-1 ps-3 pe-3 text-white rounded-2 parth"
                            href="#"
                          >
                            AboutUs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link me-3 ms-1 ps-3 pe-3 text-white rounded-2 parth"
                            href="#"
                          >
                            Gallery
                          </a>
                        </li>

                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white rounded-2 parth"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul
                            className="dropdown-menu bg-dark"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li>
                              <a
                                className="dropdown-item text-primary nav-link"
                                href="#"
                              >
                                Action
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-white text-color"
                                href="#"
                              >
                                Blog
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-white text-color"
                                href="#"
                              >
                                Blog details
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-white text-color"
                                href="#"
                              >
                                What We Do
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item text-white text-color"
                                href="#"
                              >
                                Testimonials
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link me-3 ms-1 ps-3 pe-3 text-white rounded-2 parth"
                            href="#"
                          >
                            ContactUs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
