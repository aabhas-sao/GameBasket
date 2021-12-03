import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 text-gray-600 body-font">
      <div
        className=" px-5 py-12 mx-auto w-100 flex md:items-center lg:items-start
          md:flex-row md:flex-nowrap flex-wrap flex-col"
      >
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href=""
            className="
              flex
              title-font
              font-medium
              items-center
              md:justify-start
              justify-center
              text-gray-900
            "
          >
            <i className="fas fa-cubes fa-lg text-purple-500"></i>
            <span className="ml-3 text-xl">GameBasket</span>
          </a>
          <p className="mt-2 ml-3 text-sm text-gray-500">
            One Stop for all your gaming needs
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-5 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Supports & Services
            </h2>
            <nav className="list-none text-sm text-blue-600 mb-10">
              <li className="mt-1">
                <a href="" className="mt-1 hover:text-gray-800">
                  Visit our Support Center
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Shop with an Expert
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Schedule a Service
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Protection & Support Plans
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              Partnerships
            </h2>
            <nav className="flex flex-col list-none text-sm text-blue-600 mb-10">
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Affiliate Program
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Advertise With Us
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Developers
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
            >
              Supports & Services
            </h2>
            <nav className="list-none text-sm text-blue-600 mb-10">
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Visit our Support Center
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Shop with an Expert
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Schedule a Service
                </a>
              </li>
              <li className="mt-1">
                <a href="" className="hover:text-gray-800">
                  Protection & Support Plans
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
            >
              Supports & Services
            </h2>
            <nav className="list-none text-sm text-blue-600 mb-10">
              <li>
                <a href="" className="hover:text-gray-800">
                  Visit our Support Center
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-800">
                  Shop with an Expert
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-800">
                  Schedule a Service
                </a>
              </li>
              <li>
                <a href="" className="hover:text-gray-800">
                  Protection & Support Plans
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div
          className="
            container
            mx-auto
            py-4
            px-5
            flex flex-wrap flex-col
            sm:flex-row
          "
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Copyright:
            <a
              href="https://www.tailwind-elements.com/"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noreferrer"
            >
              GameBasket
            </a>
          </p>
          <span
            className="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-2
          justify-center
          sm:justify-start
        "
          >
            <a href="" className="text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
