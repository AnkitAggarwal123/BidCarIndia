import React from "react";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00093c] to-[#2d0b00] text-white py-8">
      <div className="max-w-7xl ml-8 px-4 sm:px-6 lg:px-8 xs:flex-col mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Bid Cars India Section */}
          <div className="w-full md:w-1/4 md:mb-0 pr-14 animate__animated animate__fadeIn">
            <h3 className="text-2xl font-extrabold text-indigo-200 pb-3 transition-transform transform hover:scale-110 hover:text-sky-500 cursor-pointer">
              Bid Cars India
            </h3>
            <p className="leading-relaxed text-left text-gray-300">
              Your Trusted Partner in Salvage Car Auctions. We provide
              unparalleled service and support in the salvage car industry.
            </p>
            <p className="text-sm mt-2 text-gray-400">
              We help you dispose of all kinds of salvage (With RC & Without RC)
              & provide quotes for all kinds of vehicles, including 2 Wheeler, 4
              Wheeler, Commercial Vehicles, etc.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 mb-6 max-sm:mt-6 animate__animated animate__fadeIn">
            <h3 className="text-lg font-semibold text-indigo-200 mb-4 hover:text-sky-500 transition duration-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/service">Service</Link>
              </li>
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 animate__animated animate__fadeIn">
            <h3 className="text-lg font-semibold text-indigo-200 mb-4 hover:text-sky-500 transition duration-300">
              Imp Links
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="hover:text-gray-400 transition-all ease-in-out duration-100">
                <Link to="/">Fees & Payments</Link>
              </li>
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/">FAQ\'s</Link>
              </li>
              <li className="hover:text-gray-400 transition-all ease-in-out">
                <Link to="/">Features</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 animate__animated animate__fadeIn">
            <h3 className="text-lg font-semibold text-indigo-200 mb-4 hover:text-sky-500 transition duration-300">
              Contact Info
            </h3>
            <div className="space-y-2 cursor-pointer">
              <p className="flex items-center">
                <i className=""></i>
                West Delhi
              </p>
              <p className="flex items-center">
                <i className="text-indigo-300 hover:text-indigo-500"></i>
                auction@bidcarsindia.com
              </p>
              <p className="flex items-center">
                <i className="text-indigo-300 hover:text-indigo-500"></i>
                +91 8882451292
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
      <div className="text-center text-gray-400">
        <p>&copy; 2025 Bid Cars India, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
