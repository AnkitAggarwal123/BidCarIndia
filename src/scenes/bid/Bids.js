import { Box, Typography } from "@mui/material";

const Bids = () => {
  // Dummy data for bids
  const bids = [
    { id: 1, carId: 1, amount: 5000, bidder: "John Doe", date: new Date() },
    { id: 2, carId: 1, amount: 7000, bidder: "Jane Smith", date: new Date() },
    { id: 3, carId: 2, amount: 6000, bidder: "Michael Brown", date: new Date() },
    { id: 4, carId: 3, amount: 8000, bidder: "Emma Johnson", date: new Date() },
  ];

  // Dummy data for cars
  const cars = [
    { id: 1, name: "Toyota Camry" },
    { id: 2, name: "Honda Accord" },
    { id: 3, name: "Ford Mustang" },
  ];

  // Function to get bids for a specific car
  const getBidsForCar = (carId) => {
    return bids.filter((bid) => bid.carId === carId);
  };

  return (
    <Box m="20px">
      {cars.map((car) => (
        <Box key={car.id} mb="40px">
          <Typography variant="h4" gutterBottom>
            Bids for {car.name} (Car ID: {car.id})
          </Typography>
          <Box mb="20px">
            {getBidsForCar(car.id).length > 0 ? (
              getBidsForCar(car.id).map((bid) => (
                <Box key={bid.id} mb="10px" p="10px" border="1px solid #ccc" borderRadius="4px">
                  <Typography variant="body1">Bid Amount: ${bid.amount}</Typography>
                  <Typography variant="body2">Bidder: {bid.bidder}</Typography>
                  <Typography variant="body2">Date: {new Date(bid.date).toLocaleString()}</Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2">No bids yet for {car.name}.</Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Bids;
