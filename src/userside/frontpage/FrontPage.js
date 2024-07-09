import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box, Link, Modal, Backdrop, TextField, Fade } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import '@fontsource/source-sans-pro/400.css'; // Importing specific font weights
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import { NavLink } from 'react-router-dom';
import logo from './image.png';

const cars = [
  { id: 1, name: 'Puch', modelNumber: '2023', carNumber: 'ABC123', image: 'https://www.bmw-bavariamotors.in/sites/default/files/sliders/i4.jpg', description: 'Description of Puch.', details: 'Detailed information about Puch.' },
  { id: 2, name: 'Carnival', modelNumber: '2022', carNumber: 'DEF456', image: 'https://www.bmw-bavariamotors.in/sites/default/files/sliders/i4.jpg', description: 'Description of Carnival.', details: 'Detailed information about Carnival.' },
  { id: 3, name: 'Charger', modelNumber: '2023', carNumber: 'GHI789', image: 'https://www.bmw-bavariamotors.in/sites/default/files/sliders/i4.jpg', description: 'Description of Charger.', details: 'Detailed information about Charger.' },
  { id: 4, name: 'Mustang', modelNumber: '2022', carNumber: 'JKL012', image: 'https://www.bmw-bavariamotors.in/sites/default/files/sliders/i4.jpg', description: 'Description of Mustang.', details: 'Detailed information about Mustang.' },
  { id: 5, name: 'Bronco', modelNumber: '2023', carNumber: 'MNO345', image: 'https://www.bmw-bavariamotors.in/sites/default/files/sliders/i4.jpg', description: 'Description of Bronco.', details: 'Detailed information about Bronco.' },
  { id: 6, name: 'Wrangler', modelNumber: '2022', carNumber: 'PQR678', image: 'https://www.bmw-bavariamotors.in/sites/default/files/sliders/i4.jpg', description: 'Description of Wrangler.', details: 'Detailed information about Wrangler.' },
];

const styles = {
  hero: {
    position: 'relative',
    backgroundImage: 'url(https://www.infinity-group.in/wp-content/uploads/2021/07/5-Benefits-of-Buying-A-Pre-Owned-Luxury-Car.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity for better text visibility
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#ffffff',
    color: '#3f51b5',
  },
  loginButton: {
    backgroundColor: '#3f51b5',
    color: '#ffffff',
    borderRadius: '20px',
    padding: '6px 20px',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#ff4081',
      color: '#ffffff',
    },
  },
  card: {
    width: '70%', // Adjusted width for responsiveness
    height: '100%', // Adjusted height for responsiveness
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adding box shadow
    transition: 'transform 0.3s, box-shadow 0.3s',
    backgroundColor: '#ffffff', // Background color
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
    //   transform: 'scale(1.03)',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)', // Enhance shadow on hover
    },
  },
  cardMedia: {
    flex: '1 0 auto',
    maxHeight: '200px', // Maximum height for the image
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0', // Rounded corners at the top
  },
  cardContent: {
    padding: '16px', // Padding inside the card content
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '20px 0',
    marginTop: '40px',
  },
  socialIcons: {
    color: 'white',
    marginLeft: '10px',
    marginRight: '10px',
  },
  logo: {
    height: '100px', // Increase the height of the logo
    maxHeight: '100%', // Ensure logo stays within bounds
  },
  welcomeMessage: {
    fontSize: '2.5rem', // Adjust font size for a prominent look
    fontWeight: 'bold',
    marginTop: '20px', // Add spacing between logo and message
    animation: 'fadeIn 1s ease-in-out', // Apply the fadeIn animation
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Center align items horizontally
    marginTop: '10px', // Push buttons to the bottom
    
  },
  bidButton: {
    flex: '1 0 auto',
    marginRight: '8px', // Provide spacing between buttons
    backgroundColor: '#991b1b',
    color: '#ffffff'
  },
  seeMoreButton: {
backgroundColor: '#3b82f6', // Background color for "See More" button
    color: '#ffffff',
    whiteSpace: 'nowrap', // Prevent text wrapping
    padding: '6px 16px', // Add padding for better appearance
    border: '1px solid #3b82f6', // Add border to simulate outlined variant
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalContent: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '20px',
    outline: 'none',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  modalTextField: {
    width: '100%',
    marginBottom: '20px',
  },
  modalButton: {
    backgroundColor: '#3f51b5',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#ff4081',
    },
  },
};

const FrontPage = () => {
  const [openBidModal, setOpenBidModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bidAmount, setBidAmount] = useState('');

  const handleOpenBidModal = (car) => {
    setSelectedCar(car);
    setOpenBidModal(true);
  };

  const handleCloseBidModal = () => {
    setOpenBidModal(false);
    setBidAmount('');
  };

  const handleBidSubmit = (event) => {
    event.preventDefault();
    // Perform bid submission logic here
    console.log(`Bid submitted for ${selectedCar.name} with amount ${bidAmount}`);
    handleCloseBidModal();
  };

  return (
    <Box sx={{ fontFamily: 'Source Sans Pro, sans-serif', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <AppBar position="static" sx={styles.header}>
        <Toolbar>
          <img src={logo} alt="Company Logo" style={styles.logo} />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6" component="div" sx={styles.welcomeMessage}>
              Welcome to Car Auctions
            </Typography>
          </Box>
          <NavLink to="/login">
            <Button sx={styles.loginButton}>Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box sx={styles.hero}>
        <Box sx={styles.heroOverlay} />
        <Box sx={styles.heroContent}>
          <Typography variant="h2" component="div">
            Welcome to Car Auctions
          </Typography>
          <Typography variant="h6" component="div">
            Discover, Bid, and Win Your Dream Car
          </Typography>
        </Box>
      </Box>
      <Container sx={{ marginTop: 4, marginBottom:20}}>
        <Grid container columnSpacing={2} rowSpacing={5}>
          {cars.map((car) => (
            
            <Grid item key={car.id} xs={12} sm={6} md={4}>
              <Card sx={styles.card}>
                <CardMedia
                  component="img"
                  className={styles.cardMedia}
                  image={car.image}
                  alt={car.name}
                />
                <CardContent sx={styles.cardContent}>
                <Typography variant="h5" component="div">
                   {car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Model Number: {car.modelNumber} {/* Add model number */}
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                     Car Number: {car.carNumber} {/* Add car number */}
                 </Typography>
                 <Typography variant="body2" color="text.secondary" >
                   {car.description}
                    </Typography>
                  <Box sx={styles.buttonContainer}>
                    <Button variant="contained" sx={styles.bidButton} onClick={() => handleOpenBidModal(car)}>Bid Now</Button>
                        <NavLink to="/detail">
                     <Button variant="contained" sx={styles.seeMoreButton}>See More</Button>
                     </NavLink>
                   </Box>
                  </CardContent>
              </Card>
            </Grid>
          
          ))}
        
        </Grid>
      </Container>
      <Box component="footer" sx={styles.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            Email: contact@company.com | Phone: +123 456 7890
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Link href="https://www.facebook.com" target="_blank" sx={styles.socialIcons}>
              <Facebook />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" sx={styles.socialIcons}>
              <Twitter />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" sx={styles.socialIcons}>
              <Instagram />
            </Link>
          </Box>
        </Container>
      </Box>
      {/* Bidding Modal */}
      <Modal
        open={openBidModal}
        onClose={handleCloseBidModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={styles.modal}
      >
        <Fade in={openBidModal}>
          <Box sx={styles.modalContent}>
            <Typography variant="h6" component="h2" sx={styles.modalTitle}>
              Bid for {selectedCar ? selectedCar.name : ''}
            </Typography>
            <TextField
              label="Bid Amount"
              type="number"
              variant="outlined"
              fullWidth
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              sx={styles.modalTextField}
            />
            <Button
              variant="contained"
              onClick={handleBidSubmit}
              sx={styles.modalButton}
            >
              Submit Bid
            </Button>
          </Box>
        </Fade>
      </Modal>

    </Box>
  );
};

export default FrontPage;
