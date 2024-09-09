import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import MyMap from "./MyMap.jsx";
import Header from '../home/Header.jsx';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '1rem', // Adjust padding to ensure it looks good on smaller screens
      }}>
        <Container maxWidth="md" style={{ padding: '2rem', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Grid container spacing={4}>
            {/* Contact Form Section */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                  </Typography>
                  <form onSubmit={handleSubmit} className='contact'>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          fullWidth
                          multiline
                          rows={4}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>

            {/* Map Section */}
            <Grid item xs={12} md={6}>
              <Card style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <div style={{ height: '300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <MyMap />
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
