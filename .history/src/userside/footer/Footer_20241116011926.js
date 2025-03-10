
// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="max-w-fll mx-auto sm:px-6 lg:px-8 leading-relaxed">
//         <div className="flex">
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
            // <h3 className="text-lg font-bold pb-4">Bid Cars India</h3>
            // <p className="">
            //   Your Trusted Partner in Salvage Car Auctions. We provide
            //   unparalleled service and support in the salvage car industry.
            // </p>
//             <p className="text-sm mt-1">
//               We help you dispose of all kinds of salvage (With RC & Without RC)
//               & provide quotes for all kinds of vehicles, including 2 Wheeler, 4
//               Wheeler, Commercial Vehicles, etc.
//             </p>
//             <p>Contact: +91 8882451292</p>
//             <p>Email: auction@bidcarsindia.com</p>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0 pb">
//             <h3 className="text-lg font-bold pb-4">Quick Links</h3>
//             <ul>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   About us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Career
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Contact us
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-lg font-bold pb-4">Important Links</h3>
//             <ul>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Fees & Payments
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   FAQ's
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   Features
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-lg font-bold pb-4">Contact Info</h3>
//             <p className="text-sm mt-1">
//               <i className="fas fa-map-marker-alt"></i> West Delhi
//             </p>
//             <p className="text-sm mt-1">
//               <i className="fas fa-envelope"></i> auction@bidcarsindia.com
//             </p>
//             <p className="text-sm mt-1">
//               <i className="fas fa-phone"></i> +91 8882451292
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;






import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="/path/to/logo.png" alt="Spartan Salvage Logo" className="mb-4" /> {/* Replace with your logo path */}
            <h3 className="text-lg font-bold">Spartan Salvage</h3>
            <p className="mt-2 leading-relaxed">
              A startup, serving online-auction amenities to our clients with an eminence and trustworthy consumer base. Been in this domain for half a decade, we have mastered the skill offline and now have arrived into the online space.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
             <h3 className="text-lg font-bold pb-4">Bid Cars India</h3>
             <p className="">
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
