import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contextAuth/AuthContext';
import CarCard from './CarCard';
import { MainHeader } from '../header/MainHeader';

const FrontPage = () => {
  const [cars, setCars] = useState([]);
  const [openBidModal, setOpenBidModal] = useState(false);
  const [openBidModelWithoutPaper, setOpenBidModelWithoutPaper] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const { user, bidCounts, setBidCounts, bidCountWithoutPaper, setBidCountWithoutPaper } = useAuth();
  const [maxBid, setMaxBid] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://192.168.1.5:8080/api/car');
        const visibleCars = response.data.filter(car => car.visible === true);
        setCars(visibleCars);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };
    fetchData();
  }, []);

  const handleOpenBidModal = (car) => {
    if (user && new Date(car.auctionEndTime).getTime() > new Date().getTime()) {
      setSelectedCar(car);
      setOpenBidModal(true);
    } else {
      if (!user) {
        navigate('/login');
      } else {
        console.log('Auction time has ended for this car.');
      }
    }
  };

  const handleOpenWithoutPaperBidModal = (car) => {
    if (user && new Date(car.auctionEndTime).getTime() > new Date().getTime()) {
      setSelectedCar(car);
      setOpenBidModelWithoutPaper(true);
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
    setOpenBidModelWithoutPaper(false);
    setBidAmount('');
    setMaxBid('');
    setSelectedCar(null);
  };
  const token = localStorage.getItem('jwtToken');

  const handleBidSubmit = async (event) => {
    event.preventDefault();
  
    // Retrieve the JWT token from localStorage or wherever it's stored
     // Adjust this according to your token storage method
  
    try {
      const response = await axios.post('https://192.168.1.5:8080/bids', {
        carId: selectedCar.id,
        amount: bidAmount
      }, {
        headers: {
          'Authorization': `Bearer ${token}` // Include the token in the header
        }
      });
  
      console.log('Bid submitted:', response.data);
  
      // Update the bid count in the local state
      bidCounts.forEach((ele) => {
        if (ele.carId === selectedCar.id) {
          ele.bidCount++;
        }
      });
  
      setBidCounts([...bidCounts]);
      handleCloseBidModal();
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  const handleBidSubmitWithoutPaper = async (event) => {
    event.preventDefault();
    
    // Retrieve the JWT token from local storage or another secure location
    const token = localStorage.getItem('jwtToken');
  
    try {
      const response = await axios.post(
        'https://192.168.1.5:8080/bids/withoutPaper',
        {
          carId: selectedCar.id,
          amount: bidAmount
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the Authorization header with the JWT token
            'Content-Type': 'application/json' // Optional: Specify the content type if needed
          }
        }
      );
  
      console.log('Bid submitted:', response.data);
  
      bidCountWithoutPaper.forEach((ele) => {
        if (ele.carId === selectedCar.id) {
          ele.bidCount++;
        }
      });
  
      setBidCountWithoutPaper([...bidCountWithoutPaper]);
      handleCloseBidModal();
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  const isBidLimitReached = (carId) => getBidCount(carId) >= 20;
  const isBidLimitReachedWithoutPaper = (carId) => getBidCountWithoutPaper(carId) >= 20;

  const maximumBid = async (e) => {
    const bidAmount = e.target.value;
    setBidAmount(bidAmount);

    try {
        const response = await axios.get(`https://192.168.1.5:8080/maximum/amount/${selectedCar.id}/${bidAmount}`, {
            headers: {
                'Authorization': `Bearer ${token}` // Include the token in the header
            }
        });

        // Assuming response.data is what you need to determine if it's the maximum bid
        setMaxBid(response.data ? "true" : "false");
    } catch (error) {
        console.error("Error fetching maximum bid amount:", error);
    }
};

  return (
    <div className="font-source-sans-pro bg-white min-h-screen">
    <MainHeader/>
      
      <section className="bg-cover bg-center h-96 bg-no-repeat relative" style={{ backgroundImage: 'url(https://www.infinity-group.in/wp-content/uploads/2021/07/5-Benefits-of-Buying-A-Pre-Owned-Luxury-Car.jpg)' }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="flex flex-col justify-center items-center text-white text-center relative z-10 h-full">
          <h2 className="text-6xl font-bold">Welcome to Bid Cars India</h2>
          <p className="text-xl">Bid With Us, Grow With Us</p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cars.length > 0 ? (
          <div className="flex flex-wrap justify-center -m-4">
            {cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                handleOpenBidModal={handleOpenBidModal}
                getBidCount={getBidCount}
                isBidLimitReached={isBidLimitReached}
                handleOpenWithoutPaperBidModal={handleOpenWithoutPaperBidModal}
                getBidCountWithoutPaper={getBidCountWithoutPaper}
                isBidLimitReachedWithoutPaper={isBidLimitReachedWithoutPaper}
              />
            ))}
          </div>
        ) : (
          <div className='text-black text-center text-2xl'>No car listed</div>
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
                  onChange={maximumBid}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="button" className="bg-gray-500 text-white rounded-full px-4 py-2 mr-2" onClick={handleCloseBidModal}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700">Submit Bid</button>
              </div>
              <div>{maxBid}</div>
            </form>
          </div>
        </div>
      )}

      {openBidModelWithoutPaper && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-8 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Place Your Bid for {selectedCar.carName}</h2>
            <form onSubmit={handleBidSubmitWithoutPaper}>
              <div className="mb-4">
                <label htmlFor="bidAmount" className="block text-gray-700 font-bold mb-2">Bid Amount</label>
                <input
                  type="number"
                  id="bidAmount"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="button" className="bg-gray-500 text-white rounded-full px-4 py-2 mr-2" onClick={handleCloseBidModal}>Cancel</button>
                <button type="submit" className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700">Submit Bid</button>
              </div>
              <div>{maxBid}</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPage;
