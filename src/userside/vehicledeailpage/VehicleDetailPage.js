import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Typography, Paper, Box, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { LocationOn, Commute, LocalGasStation, AccountBalance, Details } from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../../contextAuth/AuthContext';

const styles = {
  paper: {
    padding: 20,
    margin: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    color: '#3b82f6',
    marginBottom: 20,
  },
  iconText: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
    color: '#3b82f6',
  },
  detailText: {
    marginTop: 20,
  },
  carouselContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
    maxHeight: 400,
    borderRadius: 8,
  },
};

const VehicleDetailPage = () => {
  const location = useLocation();
  const { car } = location.state;
  const { user, bidCounts, setBidCounts, bidCountWithoutPaper, setBidCountWithoutPaper } = useAuth();
  const navigate = useNavigate();

  const [openBidModal, setOpenBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [openBidModelWithoutPaper, setOpenBidModelWithoutPaper] = useState(false);


  const handleOpenBidModal = () => {
    if (user) {
      setOpenBidModal(true);
    } else {
      navigate('/login');
    }
  };

  const handleOpenWithoutPaperBidModal = (car) => {
    if (user) {
      setOpenBidModelWithoutPaper(true);
    } else {
        navigate('/login');
    }
  };

  const handleCloseBidModal = () => {
    setOpenBidModal(false);
    setOpenBidModelWithoutPaper(false)
    setBidAmount('');
  };

  const handleBidSubmit = async (event) => {
    event.preventDefault();
  
    // Retrieve the JWT token from local storage or another secure location
    const token = localStorage.getItem('jwtToken'); // Adjust the key if necessary
  
    try {
      // Send the request with the JWT in the header
      const response = await axios.post(
        'http://localhost:8080/bids',
        {
          carId: car.id,
          amount: bidAmount
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Add JWT token in the Authorization header
            'Content-Type': 'application/json' // Specify the content type
          }
        }
      );
  
      console.log('Bid submitted:', response.data);
  
      // Update bid count in the state
      bidCounts.forEach((ele) => {
        if (ele.carId === car.id) {
          ele.bidCount++;
        }
      });
      setBidCounts([...bidCounts]);
  
      // Close the bid modal
      handleCloseBidModal();
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  const handleBidSubmitWithoutPaper = async (event) => {
    event.preventDefault();
  
    // Retrieve the JWT token from local storage or another secure location
    const token = localStorage.getItem('jwtToken'); // Adjust the key if necessary
  
    try {
      // Send the request with the JWT in the header
      const response = await axios.post(
        'http://localhost:8080/bids/withoutPaper',
        {
          carId: car.id,
          amount: bidAmount
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the Authorization header with the JWT token
            'Content-Type': 'application/json' // Specify the content type
          }
        }
      );
  
      console.log('Bid submitted:', response.data);
  
      // Update bid count in the state
      bidCountWithoutPaper.forEach((ele) => {
        if (ele.carId === car.id) {
          ele.bidCount++;
        }
      });
      setBidCountWithoutPaper([...bidCountWithoutPaper]);
  
      // Close the bid modal
      handleCloseBidModal();
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  const   isBidLimitReached = () => {
    return getBidCount() >= 20;
  };

  const isBidLimitReachedWithoutPaper = ()=>{
    return getBidCountWithoutPaper() >= 20
  }

  const getBidCount = () => {
    const bidCountObj = bidCounts.find(item => item.carId === car.id);

    if (!bidCountObj) {
      return 0;
    } else {
      return bidCountObj.bidCount;
    }
  };

  const getBidCountWithoutPaper = () => {
    const bidCountObj = bidCountWithoutPaper.find(item => item.carId === car.id);
    return bidCountObj ? bidCountObj.bidCount : 0;
  };

  return (
    <Paper elevation={3} style={styles.paper}>
      <Grid container spacing={3}>
        {/* Carousel for Images */}
        <Grid item xs={12} style={styles.carouselContainer}>
          <Box style={{ width: '100%', maxWidth: 800 }}>
            <Carousel>
              {car.imageUrls.map((image, index) => (
                <img key={index} src={image} alt={`Vehicle ${index}`} style={styles.carouselImage} />
              ))}
            </Carousel>
          </Box>
        </Grid>

        {/* Vehicle Information */}
        <Grid item xs={12}>
          <Typography variant="h4" style={styles.title}>{car.carName}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <Commute style={styles.icon} /> Model Number: {car.modelNumber}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <LocalGasStation style={styles.icon} /> Fuel Type: {car.fuelType}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <Commute style={styles.icon} /> Transmission Type: {car.transmissionType}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <AccountBalance style={styles.icon} /> Ownership Number: {car.ownerNumber}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <LocationOn style={styles.icon} /> Location: {car.location}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <Details style={styles.icon} /> Registration Number: {car.registrationNumber}
          </Typography>
        </Grid>

        {/* Vehicle Details */}
        <Grid item xs={12}>
          <Typography variant="body1" style={styles.detailText}>
            <strong>Vehicle Details:</strong> {car.vehicleDetail}
          </Typography>
        </Grid>

        {/* Bid Buttons */}
        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenBidModal}
            disabled={isBidLimitReached()}
            style={{ marginRight: '10px' }}
          >
            Bid with Paper ({getBidCount()}/20)
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleOpenWithoutPaperBidModal(car)}
            disabled = {isBidLimitReachedWithoutPaper()}
          >
            Bid without Paper ({getBidCountWithoutPaper()}/20)
          </Button>
        </Grid>
      </Grid>

      {/* Bidding Modal */}
      {openBidModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-md p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Bid for {car ? car.carName : ''}</h2>
            <form onSubmit={handleBidSubmit}>
              <input
                type="number"
                className="border rounded-md p-2 w-full mb-4"
                placeholder="Enter Bid Amount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                required
              />
              <div className="flex justify-end">
                <Button type="button" variant="contained" color="secondary" onClick={handleCloseBidModal}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                  Submit Bid
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {openBidModelWithoutPaper && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-md p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Bid for {car ? car.carName : ''}</h2>
            <form onSubmit={handleBidSubmitWithoutPaper}>
              <input
                type="number"
                className="border rounded-md p-2 w-full mb-4"
                placeholder="Enter Bid Amount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                required
              />
              <div className="flex justify-end">
                <Button type="button" variant="contained" color="secondary" onClick={handleCloseBidModal}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                  Submit Bid
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </Paper>
  );
};

export default VehicleDetailPage;
