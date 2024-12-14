// import React, { useState } from "react";
// import logo from "./BidCarsIMG-removebg-preview.png";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../contextAuth/AuthContext"; // Adjust the path as needed
// import { Menu, MenuItem, IconButton, Typography } from "@mui/material";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// export const MainHeader = () => {
//   const { user, logout } = useAuth();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//   };

//   return (
//     <header className="accent-black text-blue-500 font-semibold shadow-2xl flex justify-center max-w-full">
//       <div className="mx-auto sm:px-6 lg:px-8 flex justify-between items-center fixed bg-white shadow-2xl rounded-br-full rounded-bl-full box-border max-w-full">
//         <div className="flex items-center">
//           <img src={logo} alt="Company Logo" className="h-12 sm:h-16 lg:h-20" />
//         </div>
//         <div className="">
//         <ul className="flex justify-center gap-10 hover:cursor-pointer">
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">HOME</li>
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">ABOUT US</li>
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">SERVICES</li>
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">CONTACT US</li>
//           </ul>
//         </div>
        
//         <div className="flex items-center">
//           {user ? (
//             <>
//               <Typography variant="body1" className="mr-2 hidden sm:block">
//                 Hello, {user.name}
//               </Typography>
//               <div className="relative">
//                 <IconButton
//                   onClick={handleMenuOpen}
//                   aria-controls="profile-menu"
//                   aria-haspopup="true"
//                   aria-expanded={Boolean(anchorEl) ? "true" : undefined}
//                 >
//                   <AccountCircleIcon fontSize="large" />
//                   <ArrowDropDownIcon />
//                 </IconButton>
//                 <Menu
//                   id="profile-menu"
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                   anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//                   transformOrigin={{ vertical: "top", horizontal: "right" }}
//                   getContentAnchorEl={null}
//                   elevation={1}
//                 >
//                   <MenuItem
//                     component={NavLink}
//                     to="/yourbid"
//                     onClick={handleMenuClose}
//                   >
//                     Your Bids
//                   </MenuItem>
//                   <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                 </Menu>
//               </div>
//             </>
//           ) : (
//             <>
//               <NavLink to="/login" className="mr-2">
//                 <button className="text-white rounded-full px-4 sm:px-6 py-2 font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
//                   Login
//                 </button>
//               </NavLink>
//               <NavLink to="/signup">
//                 <button className="text-white rounded-full px-4 sm:px-6 py-2 font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
//                   Signup
//                 </button>
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };




import React from 'react';

function Header() {
  return (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Contact Information */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <i className="fas fa-phone-alt mr-2"></i>
            <span>+91 99530 98590</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            <span>auction@spartansalvage.com</span>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      {/* Navigation Bar */}
      <div className="bg-white text-black py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" alt="Spartan Salvage" className="h-10 mr-2" />
            <span className="text-xl font-bold">Spartan Salvage</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex space-x-8">
            <a href="#" className="hover:text-red-600">Home</a>
            <a href="#" className="hover:text-red-600">About Us</a>
            <a href="#" className="hover:text-red-600">Services</a>
            <a href="#" className="hover:text-red-600">Career</a>
            <a href="#" className="hover:text-red-600">Contact Us</a>
            <a href="#" className="hover:text-red-600">Register / Login</a>
          </nav>
          {/* Contact Button */}
          <a href="#" className="bg-red-600 text-white py-2 px-4 rounded-lg">Contact Now</a>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <main className="relative">
      {/* Background Image */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('car.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-xl uppercase tracking-widest">Discover Hidden Treasures</h2>
          <h1 className="text-5xl font-bold mt-4">Our Today's Auctions</h1>
          <p className="text-lg mt-4">Elevate Your Business Source Quality Assets Through Spartan</p>
        </div>
      </div>
      {/* WhatsApp Button */}
      <a href="https://wa.me/919953098590" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4">
        <img src="whatsapp-icon.png" alt="WhatsApp" className="w-12 h-12" />
      </a>
    </main>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}
