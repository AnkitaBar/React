import React from 'react';
import GoogleMapReact from 'google-map-react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper
} from '@mui/material';

// Marker Component for the Google Map
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactWithMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted');
  };

  return (
    <>
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Grid container spacing={4} alignItems="stretch">
        {/ Contact Form /}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/ Name Field /}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                {/ Email Field /}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                {/ Subject Field /}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                  />
                </Grid>
                {/ Message Field /}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                {/ Submit Button /}
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/ Google Map /}
        <Grid item xs={12} md={6}>
          <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}  // Add your Google Maps API key here
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default ContactWithMap;
