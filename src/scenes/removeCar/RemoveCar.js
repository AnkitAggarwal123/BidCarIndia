import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
  Grid,
  CardActions,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { styled } from "@mui/system";

const initialCars = [
  { id: 1, name: "Toyota Camry", model: "2022", fuelType: "Gasoline", transmission: "Automatic" },
  { id: 2, name: "Honda Accord", model: "2021", fuelType: "Gasoline", transmission: "CVT" },
  { id: 3, name: "Ford Mustang", model: "2020", fuelType: "Gasoline", transmission: "Manual" },
  { id: 4, name: "Chevrolet Camaro", model: "2019", fuelType: "Gasoline", transmission: "Automatic" },
  { id: 5, name: "Dodge Charger", model: "2018", fuelType: "Gasoline", transmission: "Automatic" },
  { id: 6, name: "Tesla Model 3", model: "2021", fuelType: "Electric", transmission: "Automatic" },
];

const RemoveCar = () => {
  const [cars, setCars] = useState(initialCars);

  const handleRemoveCar = (carId) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Cars
      </Typography>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid item key={car.id} xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={`https://via.placeholder.com/300x140?text=${car.name}`}
                alt={car.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {car.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Model: {car.model}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fuel Type: {car.fuelType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Transmission: {car.transmission}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button variant="contained" color="primary">
                  View Details
                </Button>
                <IconButton onClick={() => handleRemoveCar(car.id)} color="secondary">
                  <DeleteOutline />
                </IconButton>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

export default RemoveCar;
