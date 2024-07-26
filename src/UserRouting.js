import React from "react";
import FrontPage from "./userside/frontpage/FrontPage";
import Login from "./userside/loginpage/Login";
import { Route, Routes } from "react-router-dom";
import VehicleDetailPage from "./userside/vehicledeailpage/VehicleDetailPage";
import RegistrationPage from "./userside/registrationpage/RegistrationPage";
import UserProfile from "./userside/userProfile/UserProfile";
import { Fragment } from "react";
import { MainHeader } from "./userside/header/MainHeader";
import Footer from "./userside/footer/Footer";
import YourBid from "./userside/yourBid/YourBid";
function UserRouting() {
  return (
    <>

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<VehicleDetailPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/userdetail" element={<UserProfile />} />
        <Route path="/yourbid" element={<YourBid/>}/>
        {/* Other user routes */}
      </Routes>

      <Footer/>

    </>
  );
}

export default UserRouting;
