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
    <header className="accent- text-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-12 sm:h-16 lg:h-20" />
        </div>
        <div className="py-">
          <h1 className="font-serif lg:text-xl font-bold text-">
            Welcome to Salvage Car Auctions
          </h1>
        </div>
        <ul className="flex gap-2 justify-end">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>CONTACT US</li>
          </ul>
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
                <button className="bg-blue-600 text-white rounded-full px-4 sm:px-6 py-2 font-bold hover:bg-pink-500">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="bg-blue-600 text-white rounded-full px-4 sm:px-6 py-2 font-bold hover:bg-pink-500">
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
