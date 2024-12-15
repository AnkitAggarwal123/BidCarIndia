// import React, { useState } from "react";
// import logo from "./BidCarsIMG-removebg-preview.png";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../contextAuth/AuthContext"; // Adjust the path as needed
// import { Menu, MenuItem, IconButton, Typography } from "@mui/material";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Link } from "react-router-dom";

// const MainHeader = () => {
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
//     <header className="accent-black text-blue-500 font-semibold shadow-2xl flex justify-center">
//       <div className="w-full top-0 left-0 sm:px-6 lg:px-8 flex justify-between items-center fixed bg-white shadow-2xl rounded-br-full rounded-bl-full">
//         <div className="hover:cursor-pointer">
//           <img src={logo} alt="Company Logo" className="h-12 sm:h-16 lg:h-20" />
//         </div>
//         <div className="">
//           <ul className="flex justify-center gap-10 hover:cursor-pointer">
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">
//               <Link to="/">HOME</Link>
//             </li>
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">
//               <Link to="/about">ABOUT US</Link>
//             </li>
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">
//               <Link to="/service">SERVICES</Link>
//             </li>
//             <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">
//               <Link to="/contact">CONTACT US</Link>
//             </li>
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

// export default MainHeader;





import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./userside/frontpage/FrontPage";
import Login from "./userside/loginpage/Login";
import VehicleDetailPage from "./userside/vehicledeailpage/VehicleDetailPage";
import RegistrationPage from "./userside/registrationpage/RegistrationPage";
import UserProfile from "./userside/userProfile/UserProfile";
import Footer from "./userside/footer/Footer";
import YourBid from "./userside/yourBid/YourBid";
import About from "../header/About";
import Contact from "../header/Contact";
import Service from "../header/Service";
import MainHeader from "../header/MainHeader";

const AppLayout = () => {
  return (
    <div className="app">
      <MainHeader />
      <Outlet /> {/* This will render the matched child route's element */}
      <Footer /> {/* Footer will appear on all pages */}
    </div>
  );
};

function UserRouting() {
  return (
    <BrowserRouter>
      <AppLayout />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<VehicleDetailPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/userdetail" element={<UserProfile />} />
        <Route path="/yourbid" element={<YourBid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UserRouting;