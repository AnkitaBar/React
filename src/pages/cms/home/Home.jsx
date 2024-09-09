import React from 'react'
import "./home.css"

// import {  Toolbar, Container, Link, IconButton, Box } from '@mui/material';
// import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Header from './Header.jsx';
import Team from "./Team.jsx";
import Footer from "./Footer.jsx";

import Carousel from 'react-material-ui-carousel'
import image from "../../img/chess-2.jpg" 
import image1 from "../../img/windmills.jpg"
import image2 from "../../img/card.avif"
import image3 from "../../img/apple.jpg"
import image4 from "../../img/u.svg"
import image5 from "../../img/accelerate.svg"
import image6 from "../../img/mail.svg"
import image7 from "../../img/notify.svg"
import image8 from "../../img/nature4.jpg"


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
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image:image
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

    <Header/>

   <Carousel>
           {items.map((item)=>{
            return(
                <>
                
                <img src={item.image} height="50%" width="100%" loading='lazy'/>
                
                
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
          sx={{objectFit:'fit'}}
          height="140"
          image={image8}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nature
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nature is the physical world and everything that exists in it that is not created by humans. This includes the animals, plants, events, processes, and products of the Earth, such as the weather, mountains, reproduction, and growth.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        ))}
        </Grid>



        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{marginTop:'3rem'}} className='text' >
         <Grid item xs={6}  >
         <Typography variant="h6" color="text.primary" style={{marginLeft:'3rem'}} >
         Nature is the physical world and everything that exists in it that is not created by humans. This includes the animals, plants, events, processes, and products of the Earth, such as the weather, mountains, reproduction, and growth.
          </Typography>
            </Grid>

            <Grid item xs={6}  >
                <img src={image2} height="300" />
            </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} style={{marginTop:'3rem'}} className='text' >
        <Grid item xs={6}  >
                <img src={image2} height="300" />
            </Grid>
         <Grid item xs={6}  >
          
         <Typography variant="h6" color="text.primary" style={{marginRight:'5rem'}} >
         Nature is the physical world and everything that exists in it that is not created by humans. This includes the animals, plants, events, processes, and products of the Earth, such as the weather, mountains, reproduction, and growth.
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
