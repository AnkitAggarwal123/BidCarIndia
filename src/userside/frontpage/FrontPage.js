import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contextAuth/AuthContext';
import CarCard from './CarCard';
import { MainHeader } from '../header/MainHeader';
import { BASE_URL } from '../../config/Config';

const FrontPage = () => {
  const [cars, setCars] = useState([]);
  const [openBidModal, setOpenBidModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [isBidWithPaper, setIsBidWithPaper] = useState(true); // Track bid type
  const [maxBid, setMaxBid] = useState('');
  const [showAllCars, setShowAllCars] = useState(false); // Track if user is logged in and wants to see all cars
  const { user, bidCounts, setBidCounts, bidCountWithoutPaper, setBidCountWithoutPaper } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/car`);
        const visibleCars = response.data.filter(car => car.visible === true);
        setCars(visibleCars);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };
    fetchData();
  }, []);

  const handleOpenBidModal = (car, withPaper) => {
    if (user && new Date(car.auctionEndTime).getTime() > new Date().getTime()) {
      setSelectedCar(car);
      setIsBidWithPaper(withPaper);
      setOpenBidModal(true);
    } else {
      if (!user) {
        navigate('/login');
      } else {
        console.log('Auction time has ended for this car.');
      }
    }
  };

  const getBidCount = (carId) => {
    const bidCountObj = bidCounts.find(item => item.carId === carId);
    return bidCountObj ? bidCountObj.bidCount : 0;
  };

  const getBidCountWithoutPaper = (carId) => {
    const bidCountObj = bidCountWithoutPaper.find(item => item.carId === carId);
    return bidCountObj ? bidCountObj.bidCount : 0;
  };

  const handleCloseBidModal = () => {
    setOpenBidModal(false);
    setBidAmount('');
    setMaxBid('');
    setSelectedCar(null);
  };

  const handleBidSubmit = async (event) => {
    event.preventDefault();
  
    const token = localStorage.getItem('jwtToken');
    const url = isBidWithPaper ? `${BASE_URL}/bids` : `${BASE_URL}/bids/withoutPaper`;
  
    try {
      const response = await axios.post(
        url,
        {
          carId: selectedCar.id,
          amount: bidAmount,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Bid submitted:', response.data);
  
      const updatedBidCounts = isBidWithPaper ? bidCounts : bidCountWithoutPaper;
      const updateBidCounts = updatedBidCounts.map((ele) =>
        ele.carId === selectedCar.id ? { ...ele, bidCount: ele.bidCount + 1 } : ele
      );

      if (isBidWithPaper) {
        setBidCounts(updateBidCounts);
      } else {
        setBidCountWithoutPaper(updateBidCounts);
      }

      const isMaxBid = response.data.isMaxBid;
      if (isMaxBid) {
        setMaxBid(`🎉 Congratulations! You are currently winning this car with a bid of ${bidAmount}! 🚗👑`);
      } else {
        setMaxBid(`📉 Your bid of ${bidAmount} was placed, but you are not currently winning this car. 😔`);
      }
    } catch (error) {
      console.error('Error submitting bid:', error);
      setMaxBid('❌ There was an error placing your bid. Please try again. 🔄');
    }
  };

  const isBidLimitReached = (carId) => getBidCount(carId) >= 20;
  const isBidLimitReachedWithoutPaper = (carId) => getBidCountWithoutPaper(carId) >= 20;

  return (
    <div className="font-source-sans-pro bg-white min-h-screen">
      <MainHeader />
      
      <section className="bg-cover bg-center h-96 bg-no-repeat relative" style={{ backgroundImage: 'url(https://www.infinity-group.in/wp-content/uploads/2021/07/5-Benefits-of-Buying-A-Pre-Owned-Luxury-Car.jpg)' }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="flex flex-col justify-center items-center text-white text-center relative z-10 h-full">
          <h2 className="text-6xl font-bold">Welcome to Bid Cars India</h2>
          <p className="text-xl">Bid With Us, Grow With Us</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`flex flex-wrap justify-center -m-4 ${!user && !showAllCars ? 'blur-sm' : ''}`}>
          {(user || showAllCars ? cars : cars.slice(0, 3)).map((car) => (
            <CarCard
              key={car.id}
              car={car}
              handleOpenBidModal={handleOpenBidModal}
              getBidCount={getBidCount}
              isBidLimitReached={isBidLimitReached}
              handleOpenWithoutPaperBidModal={handleOpenBidModal} // Modified to use the same function
              getBidCountWithoutPaper={getBidCountWithoutPaper}
              isBidLimitReachedWithoutPaper={isBidLimitReachedWithoutPaper}
            />
          ))}
        </div>
        {!user && cars.length > 2 && !showAllCars && (
          <div className="text-center mt-6">
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
            >
              View All Cars
            </a>
          </div>
        )}
      </main>

      {openBidModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-8 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Place Your Bid for {selectedCar.carName}</h2>
            <form onSubmit={handleBidSubmit}>
              <div className="mb-4">
                <label htmlFor="bidAmount" className="block text-gray-700 font-bold mb-2">Bid Amount</label>
                <input
                  type="number"
                  id="bidAmount"
                  value={bidAmount}
                  onChange={(e)=>{setBidAmount(e.target.value)}}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="button" className="bg-gray-500 text-white rounded-full px-4 py-2 mr-2" onClick={handleCloseBidModal}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700">Submit Bid</button>
              </div>
              <div className="text-center mt-4 text-gray-700 font-semibold">{maxBid}</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPage;
