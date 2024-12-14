import React from "react";
import logo from "./BidCarsIMG-removebg-preview.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <img src={logo} alt="Spartan Salvage Logo" className="mb-4" />
             <h3 className="text-lg font-bold pb-4">Bid Cars India</h3>
             <p className="mt-2 leading-relaxed">
               Your Trusted Partner in Salvage Car Auctions. We provide
               unparalleled service and support in the salvage car industry.
             </p>
             <p className="text-sm mt-1">
               We help you dispose of all kinds of salvage (With RC & Without RC)
               & provide quotes for all kinds of vehicles, including 2 Wheeler, 4
               Wheeler, Commercial Vehicles, etc.
             </p>
             <p>Contact: +91 8882451292</p>
             <p>Email: auction@bidcarsindia.com</p>
           </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About us</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">Career</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Imp Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Fees & Payments</a></li>
              <li><a href="#" className="hover:text-gray-400">FAQ's</a></li>
              <li><a href="#" className="hover:text-gray-400">Features</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Contact Info</h3>
            <p className="mt-2"><i className="fas fa-map-marker-alt"></i> West Delhi</p>
            <p className="mt-2"><i className="fas fa-envelope"></i> Auction@Spartansalvage.com</p>
            <p className="mt-2"><i className="fas fa-phone"></i> +91 99530 98590</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
