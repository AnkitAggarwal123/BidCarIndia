import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { LocationOn, Commute, LocalGasStation, AccountBalance, Details } from '@mui/icons-material';

const dummyVehicle = {
  vehicleName: 'Toyota Camry',
  modelNumber: 'CAM2023',
  fuelType: 'Gasoline',
  transmissionType: 'Automatic',
  ownershipNumber: '12345',
  location: 'New York, USA',
  registrationNumber: 'NYC-1234',
  vehicleDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula velit nec justo faucibus, vitae mollis ex scelerisque.'
};

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
  return (
    <Paper elevation={3} style={styles.paper}>
      <Grid container spacing={3}>
        {/* Carousel for Images */}
        <Grid item xs={12} style={styles.carouselContainer}>
          <Box style={{ width: '100%', maxWidth: 800 }}>
            <Carousel>
              <img src="https://via.placeholder.com/800x400" alt="Vehicle" style={styles.carouselImage} />
              <img src="https://via.placeholder.com/800x400" alt="Vehicle" style={styles.carouselImage} />
              <img src="https://via.placeholder.com/800x400" alt="Vehicle" style={styles.carouselImage} />
            </Carousel>
          </Box>
        </Grid>

        {/* Vehicle Information */}
        <Grid item xs={12}>
          <Typography variant="h4" style={styles.title}>{dummyVehicle.vehicleName}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <Commute style={styles.icon} /> Model Number: {dummyVehicle.modelNumber}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <LocalGasStation style={styles.icon} /> Fuel Type: {dummyVehicle.fuelType}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <Commute style={styles.icon} /> Transmission Type: {dummyVehicle.transmissionType}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <AccountBalance style={styles.icon} /> Ownership Number: {dummyVehicle.ownershipNumber}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <LocationOn style={styles.icon} /> Location: {dummyVehicle.location}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={styles.iconText}>
            <Details style={styles.icon} /> Registration Number: {dummyVehicle.registrationNumber}
          </Typography>
        </Grid>

        {/* Vehicle Details */}
        <Grid item xs={12}>
          <Typography variant="body1" style={styles.detailText}>
            <strong>Vehicle Details:</strong> {dummyVehicle.vehicleDetails}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VehicleDetailPage;
