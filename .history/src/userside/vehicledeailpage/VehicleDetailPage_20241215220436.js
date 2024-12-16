import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Typography, Paper, Box, Button, CircularProgress } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { LocationOn, Commute, LocalGasStation, AccountBalance, Details, GetApp } from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../../contextAuth/AuthContext';
import { BASE_URL } from '../../config/Config';
import jsPDF from 'jspdf';

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
  downloadButton: {
    marginTop: '20px',
  },
};

const VehicleDetailPage = () => {
  const location = useLocation();
  const { car } = location.state;
  const { user, bidCounts, setBidCounts, bidCountWithoutPaper, setBidCountWithoutPaper } = useAuth();
  const navigate = useNavigate();

  const [openBidModal, setOpenBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  const [isBidWithPaper, setIsBidWithPaper] = useState(true); // Track bid type
  const [maxBid, setMaxBid] = useState('');
  const [loading, setLoading] = useState(false); // State for loading


  const handleOpenBidModal = (withPaper) => {
    if (user) {
      setIsBidWithPaper(withPaper);
      setOpenBidModal(true);
    } else {
      navigate('/login');
    }
  };

  const handleCloseBidModal = () => {
    setOpenBidModal(false);
    setBidAmount('');
    setMaxBid('');
  };

  const handleBidSubmit = async (event) => {
    event.preventDefault();

    setMaxBid('');

    const token = localStorage.getItem('jwtToken');
    const url = isBidWithPaper ? `${BASE_URL}/bids` : `${BASE_URL}/bids/withoutPaper`;

    try {
      const response = await axios.post(
        url,
        {
          carId: car.id,
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
        ele.carId === car.id ? { ...ele, bidCount: ele.bidCount + 1 } : ele
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

  const isBidLimitReached = () => getBidCount() >= 20;
  const isBidLimitReachedWithoutPaper = () => getBidCountWithoutPaper() >= 20;

  const getBidCount = () => {
    const bidCountObj = bidCounts.find(item => item.carId === car.id);
    return bidCountObj ? bidCountObj.bidCount : 0;
  };

  const getBidCountWithoutPaper = () => {
    const bidCountObj = bidCountWithoutPaper.find(item => item.carId === car.id);
    return bidCountObj ? bidCountObj.bidCount : 0;
  };

  // New PDF download function
  const handleDownloadPDF = async () => {
    const doc = new jsPDF('p', 'mm', 'a4'); // A4 size in mm (portrait)
    const pageWidth = doc.internal.pageSize.getWidth(); // Page width in mm
    const pageHeight = doc.internal.pageSize.getHeight(); // Page height in mm
    const margin = 10; // Margin on each side in mm
    const availableWidth = pageWidth - 2 * margin; // Available width after margins
    let currentYPosition = margin; // Starting Y position for the first image
  
    // Load images and add to PDF in sequence
    for (let i = 0; i < car.imageUrls.length; i++) {
      const imgUrl = car.imageUrls[i];
  
      // This function handles loading and adding each image
      await loadAndAddImageToPDF(imgUrl);
    }
  
    // Save the PDF after all images are added
    doc.save(`${car.registrationNumber}_photos.pdf`);
  
    // Function to handle loading and adding image to the PDF
    async function loadAndAddImageToPDF(imgUrl) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imgUrl;
  
        img.onload = function () {
          const imgAspectRatio = img.naturalWidth / img.naturalHeight;
          const imgHeight = availableWidth / imgAspectRatio; // Scale height based on available width
          const imgWidth = availableWidth; // Image width (fits within the available width)
  
          // Calculate the X position to center the image horizontally
          const centerXPosition = (pageWidth - imgWidth) / 2;
  
          // Check if the image fits on the current page, else add a new page
          if (currentYPosition + imgHeight > pageHeight - margin) {
            doc.addPage();
            currentYPosition = (pageHeight - imgHeight) / 2; // Center vertically on the new page
          } else {
            currentYPosition = (pageHeight - imgHeight) / 2; // Center vertically for the first image
          }
  
          // Add the image to the PDF at the calculated center position
          doc.addImage(img, 'PNG', centerXPosition, currentYPosition, imgWidth, imgHeight);
  
          // Update Y position for the next image
          currentYPosition += imgHeight + 5; // Add 5mm space between images
  
          resolve();
        };
  
        img.onerror = function () {
          reject(new Error(`Failed to load image: ${imgUrl}`));
        };
      });
    }
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
            onClick={() => handleOpenBidModal(true)}
            disabled={isBidLimitReached()}
            style={{ marginRight: '10px' }}
          >
            Bid with Paper ({getBidCount()}/20)
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleOpenBidModal(false)}
            disabled={isBidLimitReachedWithoutPaper()}
          >
            Bid without Paper ({getBidCountWithoutPaper()}/20)
          </Button>
          {/* New Download Button */}
          <Button
            variant="contained"
            color="success"
            onClick={handleDownloadPDF}
            style={{ marginLeft: '10px' }}
          >
            Download All Photos
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
              <div className="flex justify-between">
                <Button type="button" variant="contained" color="secondary" onClick={handleCloseBidModal}>
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                  Submit Bid
                </Button>
              </div>
              <div className="text-center mt-4 text-gray-700 font-semibold">{maxBid}</div>
            </form>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default VehicleDetailPage;