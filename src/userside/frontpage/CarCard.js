import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import TimerIcon from '@mui/icons-material/Timer';
import DescriptionIcon from '@mui/icons-material/Description'; // Icon for "Bid with Paper"
import CloudOffIcon from '@mui/icons-material/CloudOff'; // Icon for "Bid without Paper"
import axios from 'axios';

const CarCard = ({ car, handleOpenBidModal, handleOpenWithoutPaperBidModal, getBidCount, isBidLimitReached, getBidCountWithoutPaper, isBidLimitReachedWithoutPaper }) => {


  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(car.auctionEndTime));

  function calculateRemainingTime(endTime) {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const remaining = end - now;

    if (remaining <= 0) {
      return 'Auction Ended';
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(car.auctionEndTime));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden m-4 w-80">
      {car.imageUrls && car.imageUrls.length > 0 && (
        <img src={car.imageUrls[0]} alt={car.carName} className="w-full h-52 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{car.carName}</h3>
        <p className="text-gray-600 mb-2"><DirectionsCarFilledIcon /> MFG Year: {car.modelNumber}</p>
        <p className="text-gray-600 mb-2"><LocalGasStationIcon /> Fuel Type: {car.fuelType}</p>
        <p className="text-gray-600 mb-2"><SettingsApplicationsIcon /> Transmission: {car.transmissionType}</p>
        <p className="text-gray-600 mb-4"><AppRegistrationIcon /> Registration Number: {car.registrationNumber}</p>
        <div className="mt-2 mb-2">
          <TimerIcon /> Auction Ends In: {remainingTime}
        </div>
        <div className="mb-2">
          <button
            className={`bg-red-600 text-white rounded-full px-4 py-2 flex items-center mb-2 justify-center w-full hover:bg-red-700 ${isBidLimitReached(car.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleOpenBidModal(car)}
            disabled={isBidLimitReached(car.id)}
          >
            <DescriptionIcon className="mr-2" /> Bid with Paper - {getBidCount(car.id)}/20
          </button>
          <button
            className={`bg-blue-600 text-white rounded-full px-4 py-2 flex items-center justify-center w-full hover:bg-blue-700 ${isBidLimitReachedWithoutPaper(car.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleOpenWithoutPaperBidModal(car)}
            disabled={isBidLimitReachedWithoutPaper(car.id)}
          >
            <CloudOffIcon className="mr-2" /> Bid without Paper - {getBidCountWithoutPaper(car.id)}/20
          </button>
        </div>
        <NavLink to={`/detail/${car.id}`} state={{ car }} className="flex justify-center">
          <button className="bg-blue-600 text-white rounded-full px-6 py-2 font-bold hover:bg-blue-700">See More</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CarCard;
