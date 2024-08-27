import React from 'react'
import "./home.css"

// import {  Toolbar, Container, Link, IconButton, Box } from '@mui/material';
// import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

import Team from "./Team.jsx";
import Footer from "./Footer.jsx";

import Carousel from 'react-material-ui-carousel'
import image1 from "../../img/dragon-ball-landscape-m9vtdvj8wixkovhi.jpg"
import image2 from "../../img/wp3062369.webp"
import image3 from "../../img/wp3062302.webp"
import image4 from "../../img/u.svg"
import image5 from "../../img/accelerate.svg"
import image6 from "../../img/mail.svg"
import image7 from "../../img/notify.svg"


import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:image1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:image3
        }
    ]

    var cardItems = [
        {
            id: 1,
            title: "Lizard1",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: image2,
            buttonText1: "Share",
            buttonText2: "Learn More"
        },
        {
            id: 2,
            title: "Lizard2",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: image2,
            buttonText1: "Share",
            buttonText2: "Learn More"
        },
        {
            id: 3,
            title: "Lizard3",
            description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            image: image2,
            buttonText1: "Share",
            buttonText2: "Learn More"
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        
      };

  return (
   <>

   <Carousel>
           {items.map((item)=>{
            return(
                <>
                
                <img src={item.image} height="100%" width="100%"/>
                
                
                </>
            )
           })}
        </Carousel>

       
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
{cardItems.map((cardItem, index)=>(
     <Grid item xs={4} style={{display:'flex', justifyContent:'center'}}>
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{objectFit:'contain'}}
          height="140"
          image={image2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        ))}
        </Grid>



        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{marginTop:'3rem'}} className='text' >
         <Grid item xs={6}  >
         <Typography variant="h6" color="text.primary" style={{marginLeft:'3rem'}} >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
            </Grid>

            <Grid item xs={6}  >
                <img src={image3} height="300" />
            </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{marginTop:'3rem'}} className='text' >
        <Grid item xs={6}  >
                <img src={image3} height="300" />
            </Grid>
         <Grid item xs={6}  >
          
         <Typography variant="h6" color="text.primary" style={{marginRight:'5rem'}} >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
            </Grid>

            
        </Grid>
        
        
        <Container>
        <Slider {...settings}>
      <div className='img'>
        <img src={image4} height="300" width="300" />
      </div>
      <div className='img'>
      <img src={image5} height="300" width="300" />
      </div>
      <div className='img'>
      <img src={image6} height="300" width="300"/>
      </div>
      <div className='img'>
      <img src={image7} height="300" width="300"/>
      </div>
    
    </Slider>
        </Container>
    <br /><br />

    <div>
    <Team />
    </div>
    <br /><br />

    <div >
    
      <Footer />
    </div>



   </>
  )
}
