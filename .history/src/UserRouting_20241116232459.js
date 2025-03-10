import React from "react";
import { Outlet } from "react-router-dom";
import FrontPage from "./userside/frontpage/FrontPage";
import Login from "./userside/loginpage/Login";
import { Route, Routes } from "react-router-dom";
import VehicleDetailPage from "./userside/vehicledeailpage/VehicleDetailPage";
import RegistrationPage from "./userside/registrationpage/RegistrationPage";
import UserProfile from "./userside/userProfile/UserProfile";
import Footer from "./userside/footer/Footer";
import YourBid from "./userside/yourBid/YourBid";
import About from "./userside/header/About";
import Contact from "./userside/header/Contact";
import Service from "./userside/header/Service";
import { MainHeader } from "./userside/header/MainHeader";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const AppLayout = () => {
  return (
    <div className="">
      <MainHeader />
      <Outlet />
      <Footer /> 

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
        <a
          href="https://wa.me/+917089771071"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="#top"
          className="bg-red-500 p-4 rounded-full text-white shadow-lg hover:bg-red-600 transition-transform transform hover:scale-110"
        >
          <FaArrowUp size={24} />
        </a>
      </div>
    </div>
  );
};
function UserRouting() {
  return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<FrontPage />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="detail/:id" element={<VehicleDetailPage />} />
          <Route path="signup" element={<RegistrationPage />} />
          <Route path="userdetail" element={<UserProfile />} />
          <Route path="yourbid" element={<YourBid />} />
        </Route>
      </Routes>  
  );
}

export default UserRouting;
