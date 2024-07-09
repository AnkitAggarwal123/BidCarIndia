import React from 'react'
import FrontPage from './userside/frontpage/FrontPage'
import Login from './userside/loginpage/Login'
import { Route, Routes } from 'react-router-dom'
import VehicleDetailPage from './userside/vehicledeailpage/VehicleDetailPage'
import RegistrationPage from './userside/registrationpage/RegistrationPage'
function UserRouting() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail" element={<VehicleDetailPage />} />
      <Route path="/signup" element={<RegistrationPage />} />
      {/* Other user routes */}
    </Routes>
  )
}

export default UserRouting