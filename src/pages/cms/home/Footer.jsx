import React from 'react';
import { Grid, Typography, Link,IconButton, Container } from '@mui/material';

// import {  Toolbar, Container, Link, IconButton, Box,Grid,Typography } from '@mui/material';
 import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', backgroundColor: '#17173b', color:'white',overflowX:'hidden'}}>
      <Grid container spacing={2}  justifyContent="center">
      <Grid item xs={12} md={3} justifyContent="center">
        <Link href="/" color="inherit" sx={{ marginRight: 3, '&:hover': { textDecoration: 'underline' } }}>
          Home
        </Link>
        <Link href="/about" color="inherit" sx={{ marginRight: 3, '&:hover': { textDecoration: 'underline' } }}>
          About
        </Link>
        <Link href="/services" color="inherit" sx={{ marginRight: 3, '&:hover': { textDecoration: 'underline' } }}>
          Services
        </Link>
        <Link href="/contact" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
          Contact
        </Link>
      </Grid>
        <Grid item>
         <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
           <Facebook />
         </IconButton>
         <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
           <Twitter />
         </IconButton>
         <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
           <Instagram />
         </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#0077b5' } }}>
          <LinkedIn />
          </IconButton>
      </Grid>
      </Grid>
      <hr />
      <Grid container display="flex"  justifyContent="center" marginLeft="10rem">
      <Grid item xs={12} md={4}>
          <Typography variant="h6">Company Name</Typography>
          <Typography variant="body2">
            © 2024 Company Name. All rights reserved.
          </Typography>
        </Grid>
        </Grid>
    </footer>
  );
};


// const Footer = () => {
//   return (

// <Box
//   component="footer"
//   sx={{
//     background: 'linear-gradient(to right, #3f51b5, #1a237e)',
//     color: 'white',
//     paddingTop: 2,
//     paddingBottom: 2,
//   }}
// >
//   <Container maxWidth="md">
//     <Grid container spacing={4} alignItems="center" justifyContent="space-between">
//       {/ Pages Links /}
      // <Grid item xs={12} md={3} justifyContent="center">
      //   <Link href="/" color="inherit" sx={{ marginRight: 3, '&:hover': { textDecoration: 'underline' } }}>
      //     Home
      //   </Link>
      //   <Link href="/about" color="inherit" sx={{ marginRight: 3, '&:hover': { textDecoration: 'underline' } }}>
      //     About
      //   </Link>
      //   <Link href="/services" color="inherit" sx={{ marginRight: 3, '&:hover': { textDecoration: 'underline' } }}>
      //     Services
      //   </Link>
      //   <Link href="/contact" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
      //     Contact
      //   </Link>
      // </Grid>

//       {/ Social Media Icons /}
//       <Grid item>
//         <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
//           <Facebook />
//         </IconButton>
//         <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
//           <Twitter />
//         </IconButton>
//         <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
//           <Instagram />
//         </IconButton>
//         <IconButton href="https://linkedin.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#0077b5' } }}>
//           <LinkedIn />
//         </IconButton>
//       </Grid>

//       {/ Terms and Conditions /}
//       <Grid item>
//         <Link href="/terms" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
//           Terms & Conditions
//         </Link>
//       </Grid>
//     </Grid>

//     {/ Copyright Section /}
//     <Toolbar sx={{ justifyContent: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: 2 }}>
//       <Typography variant="body2" color="inherit">
//         © 2024 Your Company. All rights reserved.
//       </Typography>
//     </Toolbar>
//   </Container>
// </Box>
//   )
// }

export default Footer;
