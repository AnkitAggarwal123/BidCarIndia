import { Box, Button, TextField } from "@mui/material";
import { Formik, FieldArray } from "formik";
import * as yup from "yup";
import axios from "axios";
import Header from "../../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, { setSubmitting }) => {
    console.log('Submitting form with values:', values); // Log form values before submission

    try {
      const response = await axios.post('http://localhost:8080/car', {
        carName: values.vehicleName,
        registrationNumber: values.registrationPage,
        ownerNumber: parseInt(values.ownershipNumber),
        modelNumber: parseInt(values.modelNumber),
        fuelType: values.fuelType,
        transmissionType: values.transmissionType,
        location: values.location,
        vehicleDetail: values.vehicleDetails,
        carImage: values.photoLinks
      });

      console.log('Response:', response.data); // Log response from the server

      // Optionally handle success, e.g., show a success message

    } catch (error) {
      console.error('Error:', error); // Log any errors
      // Optionally handle error, e.g., show an error message

    } finally {
      setSubmitting(false); // Reset submitting state
    }
  };

  const checkoutSchema = yup.object().shape({
    vehicleName: yup.string().required("Vehicle Name is required"),
    modelNumber: yup.number().required("Model Number is required"),
    fuelType: yup.string().required("Fuel Type is required"),
    transmissionType: yup.string().required("Transmission Type is required"),
    ownershipNumber: yup.number().required("Ownership Number is required"),
    location: yup.string().required("Location is required"),
    registrationPage: yup.string().required("Registration Page is required"),
    vehicleDetails: yup.string().required("Vehicle Details is required"),
    photoLinks: yup.array().of(
      yup.string().url("Must be a valid URL").required("Photo Link is required")
    ).required("Photo Links are required"),
  });

  const initialValues = {
    vehicleName: "",
    modelNumber: "",
    fuelType: "",
    transmissionType: "",
    ownershipNumber: "",
    location: "",
    registrationPage: "",
    vehicleDetails: "",
    photoLinks: [""],
  };

  return (
    <Box m="20px">
      <Header title="ADD NEW CAR" subtitle="Add New Car For Auction" />

      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Vehicle Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleName}
                name="vehicleName"
                error={!!touched.vehicleName && !!errors.vehicleName}
                helperText={touched.vehicleName && errors.vehicleName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Model Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.modelNumber}
                name="modelNumber"
                error={!!touched.modelNumber && !!errors.modelNumber}
                helperText={touched.modelNumber && errors.modelNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fuel Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fuelType}
                name="fuelType"
                error={!!touched.fuelType && !!errors.fuelType}
                helperText={touched.fuelType && errors.fuelType}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Transmission Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.transmissionType}
                name="transmissionType"
                error={!!touched.transmissionType && !!errors.transmissionType}
                helperText={touched.transmissionType && errors.transmissionType}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ownership No."
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ownershipNumber}
                name="ownershipNumber"
                error={!!touched.ownershipNumber && !!errors.ownershipNumber}
                helperText={touched.ownershipNumber && errors.ownershipNumber}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.location}
                name="location"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Registration Page"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.registrationPage}
                name="registrationPage"
                error={!!touched.registrationPage && !!errors.registrationPage}
                helperText={touched.registrationPage && errors.registrationPage}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Vehicle Details"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleDetails}
                name="vehicleDetails"
                error={!!touched.vehicleDetails && !!errors.vehicleDetails}
                helperText={touched.vehicleDetails && errors.vehicleDetails}
                sx={{ gridColumn: "span 4" }}
              />
              
              <FieldArray name="photoLinks">
                {({ push, remove }) => (
                  <Box sx={{ gridColumn: "span 4" }}>
                    {values.photoLinks.map((_, index) => (
                      <Box key={index} display="flex" alignItems="center" mb={2}>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label={`Photo Link ${index + 1}`}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.photoLinks[index]}
                          name={`photoLinks[${index}]`}
                          error={!!touched.photoLinks && !!errors.photoLinks && !!errors.photoLinks[index]}
                          helperText={touched.photoLinks && errors.photoLinks && errors.photoLinks[index]}
                          sx={{ flexGrow: 1 }}
                        />
                        <Button onClick={() => remove(index)} sx={{ ml: 2 }}>Remove</Button>
                      </Box>
                    ))}
                    <Button type="button" onClick={() => push('')} color="secondary" variant="contained">
                      Add New Photo Link
                    </Button>
                  </Box>
                )}
              </FieldArray>
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" disabled={isSubmitting}>
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
