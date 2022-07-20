import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../static/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      "https://mobile.facebook.com/events/1072789436680896?__referral_info_referrer_type=dashboard&__referral_info_mechanism=home_tab_hero_events&_rdc=1&_rdr"
    );
  };
  return (
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-black relative flex items-center w-full justify-between">
      <div className="w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center px-3">
          <button
            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <Link className="navbar-brand text-blue-600" to="/">
            <img alt="logo" src={logo} className="h-14 md:h-20" />
          </Link>
        </div>
        <div
          className="navbar-collapse collapse grow navbar-center"
          id="navbarSupportedContentY"
        >
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            <li className="nav-item">
              <a
                className="nav-link block pr-2 lg:px-2 py-2 text-green-400 hover:text-green-700 focus:text-green-700 transition duration-150 ease-in-out"
                href="#segments"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Segments
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link block pr-2 lg:px-2 py-2 text-green-400 hover:text-green-700 focus:text-green-700 transition duration-150 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Rule Book
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end  lg:ml-auto lg:w-1/4">
          <button
            onClick={handleClick}
            type="button"
            className="btn inline-block px-6 py-2.5 bg-red-600 text-white font-bold text-sm lg:text-xl leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}
