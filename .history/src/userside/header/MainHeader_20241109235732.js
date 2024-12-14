import React, { useState } from "react";
import logo from "./BidCarsIMG-removebg-preview.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contextAuth/AuthContext"; // Adjust the path as needed
import { Menu, MenuItem, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const MainHeader = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <header className="accent-black text-blue-500 font-semibold shadow-2xl flex justify-center max-w-full top-0 left-0 box-border">
      <div className="mx-auto sm:px-6 lg:px-8 flex justify-between items-center fixed bg-white shadow-2xl rounded-br-full rounded-bl-full box-border max-w-full">
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-12 sm:h-16 lg:h-20" />
        </div>
        <div className="">
        <ul className="flex justify-center gap-10 hover:cursor-pointer">
            <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">HOME</li>
            <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">ABOUT US</li>
            <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">SERVICES</li>
            <li className="hover:text-fuchsia-800 transition-transform duration-[600ms] ease-in-out scale-100 hover:scale-125">CONTACT US</li>
          </ul>
        </div>
        
        <div className="flex items-center">
          {user ? (
            <>
              <Typography variant="body1" className="mr-2 hidden sm:block">
                Hello, {user.name}
              </Typography>
              <div className="relative">
                <IconButton
                  onClick={handleMenuOpen}
                  aria-controls="profile-menu"
                  aria-haspopup="true"
                  aria-expanded={Boolean(anchorEl) ? "true" : undefined}
                >
                  <AccountCircleIcon fontSize="large" />
                  <ArrowDropDownIcon />
                </IconButton>
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  getContentAnchorEl={null}
                  elevation={1}
                >
                  <MenuItem
                    component={NavLink}
                    to="/yourbid"
                    onClick={handleMenuClose}
                  >
                    Your Bids
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login" className="mr-2">
                <button className="text-white rounded-full px-4 sm:px-6 py-2 font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="text-white rounded-full px-4 sm:px-6 py-2 font-bold bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                  Signup
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
