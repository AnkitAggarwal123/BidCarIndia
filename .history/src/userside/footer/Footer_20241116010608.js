// import React from 'react'

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-bold">Bid Cars India</h3>
//             <p>Contact: +91 8882451292</p>
//             <p>Email: auction@bidcarsindia.com</p>
//           </div>
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-bold">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-gray-400">Facebook</a>
//               <a href="#" className="hover:text-gray-400">Twitter</a>
//               <a href="#" className="hover:text-gray-400">Instagram</a>
//               <a href="#" className="hover:text-gray-400">LinkedIn</a>
//             </div>
//           </div>
//           <div className="w-full md:w-full mt-6 md:mt-0">
//             <h3 className="text-lg font-bold mt-3">About Us</h3>
//             <p className="text-sm mt-1">
//               Bid Cars India - Your Trusted Partner in Salvage Car Auctions. We are a leading auction service company specializing in salvage accidental cars. With years of experience and a commitment to excellence, we strive to provide our clients with unparalleled service and support in the salvage car industry.
//             </p>
//             <p className="text-sm mt-1">
//               We help you to dispose of all kinds of salvage (With RC & Without RC) & provide quotes for all kinds of vehicles, including 2 Wheeler, 4 Wheeler, Commercial Vehicles, etc.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 flex flex-wra">
      <div className="max-w-fll mx-auto sm:px-6 lg:px-8 leading-relaxed ">
        <div className="flex pr-10">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold pb-4">Bid Cars India</h3>
            <p>
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
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pb">
            <h3 className="text-lg font-bold pb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold pb-4">Important Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Fees & Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold pb-4">Contact Info</h3>
            <p className="text-sm mt-1">
              <i className="fas fa-map-marker-alt"></i> West Delhi
            </p>
            <p className="text-sm mt-1">
              <i className="fas fa-envelope"></i> auction@bidcarsindia.com
            </p>
            <p className="text-sm mt-1">
              <i className="fas fa-phone"></i> +91 8882451292
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
