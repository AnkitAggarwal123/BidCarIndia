import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contextAuth/AuthContext";
import CarCard from "./CarCard";
import { MainHeader } from "../header/MainHeader";
import { BASE_URL } from "../../config/Config";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
// import logo from ".car-auction.jpg";

const FrontPage = () => {
  const [cars, setCars] = useState([]);
  const [openBidModal, setOpenBidModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [isBidWithPaper, setIsBidWithPaper] = useState(true); // Track bid type
  const [maxBid, setMaxBid] = useState("");
  const [showAllCars, setShowAllCars] = useState(false); // Track if user is logged in and wants to see all cars
  const {
    user,
    bidCounts,
    setBidCounts,
    bidCountWithoutPaper,
    setBidCountWithoutPaper,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/car`);
        const visibleCars = response.data.filter((car) => car.visible === true);
        setCars(visibleCars);
      } catch (error) {
        console.error("Error fetching car data:", error);
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
        navigate("/login");
      } else {
        console.log("Auction time has ended for this car.");
      }
    }
  };

  const getBidCount = (carId) => {
    const bidCountObj = bidCounts.find((item) => item.carId === carId);
    return bidCountObj ? bidCountObj.bidCount : 0;
  };

  const getBidCountWithoutPaper = (carId) => {
    const bidCountObj = bidCountWithoutPaper.find(
      (item) => item.carId === carId
    );
    return bidCountObj ? bidCountObj.bidCount : 0;
  };

  const handleCloseBidModal = () => {
    setOpenBidModal(false);
    setBidAmount("");
    setMaxBid("");
    setSelectedCar(null);
  };

  const handleBidSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("jwtToken");
    const url = isBidWithPaper
      ? `${BASE_URL}/bids`
      : `${BASE_URL}/bids/withoutPaper`;

    try {
      const response = await axios.post(
        url,
        {
          carId: selectedCar.id,
          amount: bidAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Bid submitted:", response.data);

      const updatedBidCounts = isBidWithPaper
        ? bidCounts
        : bidCountWithoutPaper;
      const updateBidCounts = updatedBidCounts.map((ele) =>
        ele.carId === selectedCar.id
          ? { ...ele, bidCount: ele.bidCount + 1 }
          : ele
      );

      if (isBidWithPaper) {
        setBidCounts(updateBidCounts);
      } else {
        setBidCountWithoutPaper(updateBidCounts);
      }

      const isMaxBid = response.data.isMaxBid;
      if (isMaxBid) {
        setMaxBid(
          `🎉 Congratulations! You are currently winning this car with a bid of ${bidAmount}! 🚗👑`
        );
      } else {
        setMaxBid(
          `📉 Your bid of ${bidAmount} was placed, but you are not currently winning this car. 😔`
        );
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      setMaxBid("❌ There was an error placing your bid. Please try again. 🔄");
    }
  };

  const isBidLimitReached = (carId) => getBidCount(carId) >= 20;
  const isBidLimitReachedWithoutPaper = (carId) =>
    getBidCountWithoutPaper(carId) >= 20;

  return (
    <div className="font-source-sans-pro bg-white min-h-screen">
      <MainHeader />
      <section
        className="bg-cover bg-center h-screen bg-no-repeat box-border"
        style={{
          backgroundImage:
            'url("https://www.infinity-group.in/wp-content/uploads/2021/07/5-Benefits-of-Buying-A-Pre-Owned-Luxury-Car.jpg")',
        }}
      >
        {/* <div className="top-0 left-0 right-0 bottom-0"></div> */}
        <div className="flex flex-col justify-center items-center text-black h-full">
          <h2 className="text-6xl font-bold">Welcome to Bid Cars India</h2>
          <p className="text-xl">Bid With Us, Grow With Us</p>
        </div>
      </section>
      <div className="bg-black text-white py-16 px-8 flex gap-11">
        <div className="max-w-7xl mx-auto items-start">
          <h3 className="text-red-500 text-lg font-semibold uppercase">
            Who We Are ?
          </h3>
          <h1 className="text-5xl font-bold mt-4">Welcome to Bid Cars India</h1>
          <p className="mt-6 font-bold text-gray-300 max-w-3xl mx-auto">
            At Spartan Salvage, we are pioneers in the realm of salvage
            auctions, dedicated to providing a platform where individuals and
            businesses can find remarkable deals on salvage vehicles. With a
            commitment to transparency, integrity, and excellence, we offer a
            unique marketplace where buyers can bid confidently. Our team is
            passionate about connecting buyers and sellers, fostering fair
            competition. Spartan Salvage is your trusted partner in the world of
            salvage auctions.
          </p>
        </div>

        {/* Vehicle Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="bg-white text-center py-8 rounded-lg shadow-lg">
            <img
              src="https://images.tv9hindi.com/wp-content/uploads/2022/05/kia-sedan-car.jpg"
              alt="Sedan"
              className="mx-auto "
            />
            <h2 className="text-xl font-semibold">Sedan</h2>
          </div>
          <div className="bg-white text-center py-8 rounded-lg shadow-lg">
            <img
              src="https://path/to/ertiga-image.png"
              alt="Ertiga"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Ertiga</h2>
          </div>
          <div className="bg-white text-center py-8 rounded-lg shadow-lg">
            <img
              src="https://path/to/cabriolet-image.png"
              alt="Cabriolet"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Cabriolet</h2>
          </div>
          <div className="bg-white text-center py-8 rounded-lg shadow-lg">
            <img
              src="https://path/to/cabriolet-image.png"
              alt="Cabriolet"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Cabriolet</h2>
          </div>
          <div className="bg-white text-center py-8 rounded-lg shadow-lg">
            <img
              src="https://path/to/cabriolet-image.png"
              alt="Cabriolet"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Cabriolet</h2>
          </div>
          <div className="bg-white text-center py-8 rounded-lg shadow-lg">
            <img
              src="https://path/to/cabriolet-image.png"
              alt="Cabriolet"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">Cabriolet</h2>
          </div>
        </div>

        {/* Floating Buttons */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
          <a
            href="7089771071"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-4 rounded-full text-white shadow-lg"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="#top"
            className="bg-red-500 p-4 rounded-full text-white shadow-lg before: -z-10"
          >
            <FaArrowUp size={24} />
          </a>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`flex flex-wrap justify-center -m-4 ${
            !user && !showAllCars ? "blur-sm" : ""
          }`}
        >
          {(user || showAllCars ? cars : cars.slice(0, 6)).map((car) => (
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
            <button
              onClick={() => (window.location.href = "/login")}
              className="text-white rounded-full px-4 sm:px-6 py-2 font-bold bg-blue-800 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            >
              View All Cars
            </button>
          </div>
        )}
      </main>

      {openBidModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-8 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">
              Place Your Bid for {selectedCar.carName}
            </h2>
            <form onSubmit={handleBidSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="bidAmount"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Bid Amount
                </label>
                <input
                  type="number"
                  id="bidAmount"
                  value={bidAmount}
                  onChange={(e) => {
                    setBidAmount(e.target.value);
                  }}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 text-white rounded-full px-4 py-2 mr-2"
                  onClick={handleCloseBidModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700"
                >
                  Submit Bid
                </button>
              </div>
              <div className="text-center mt-4 text-gray-700 font-semibold">
                {maxBid}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPage;
