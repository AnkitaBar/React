import React, { useState } from "react";
import port1 from "../../img/port1.jpg";
import port2 from "../../img/port2.jpg";
import port3 from "../../img/port3.jpg";
import port4 from "../../img/port4.jpg";
import port5 from "../../img/port5.jpg";
import port7 from "../../img/port7.jpg";
import port8 from "../../img/port8.jpg";
import port9 from "../../img/port9.jpg";
import port6 from "../../img/port6.jpg";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Box,
  Button,
  Container,
  CardActionArea,
} from "@mui/material";
import "./Portfolio.css"; // Import the external CSS file

const portfolioItems = [
  {
    id: 1,
    category: "webdesign",
    image: 'https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/portfolio/img8.jpg',
    name: "Project Name",
  },
  {
    id: 2,
    category: "photography",
    image: 'https://webthemez.com/demo/green-corp-flat-free-responsive-mobile-website/images/portfolio/img4.jpg',
    name: "Project Name",
  },
  // {
  //   id: 3,
  //   category: "photography",
  //   image: port3,
  //   name: "Project Name",
  // },
  // {
  //   id: 4,
  //   category: "print",
  //   image: port4,
  //   name: "Project Name",
  // },
  // {
  //   id: 5,
  //   category: "photography",
  //   image: port5,
  //   name: "Project Name",
  // },
  // {
  //   id: 6,
  //   category: "webdesign",
  //   image: port6,
  //   name: "Project Name",
  // },
  // {
  //   id: 7,
  //   category: "print",
  //   image: port7,
  //   name: "Project Name",
  // },
  // {
  //   id: 8,
  //   category: "photography",
  //   image: port8,
  //   name: "Project Name",
  // },
  // {
  //   id: 9,
  //   category: "print",
  //   image: port9,
  //   name: "Project Name",
  // },
];



const Portfolio = ({setPortfolioImg,handleOpen}) => {


  const [filteredProjects, setFilteredProjects] = useState(portfolioItems);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(portfolioItems);
    } else {
      setFilteredProjects(
        portfolioItems.filter(project => project.category === category)
      );
    }
  };

  // const [showable,setShowable] = React.useState(portfolioItems);
  //   const handleFilter = (category)=>{
  //       if(category === 'webdesign'){
  //           setShowable(portfolioItems.filter(item=>item.category === 'webdesign'))
  //       }else if(category==='photography'){
  //           setShowable(portfolioItems.filter(item=>item.category === 'photography'))
  //       }else{
  //           setShowable(portfolioItems.filter(item=>item.category === 'print'))
  //       }
  //   }
    
  return (
    <>
      <div className="container">
      <div className="portfolio-container">
        <h1>Portfolio</h1>
        <p>
          At lorem Ipsum available, but the majority have suffered alteration in
          some form by injected humour.{" "}
        </p>
    </div>

        <Box className="btn"  mb={4}>
          <Button
            variant={selectedCategory === "All" ? "contained" : "outlined"}
            onClick={() => handleFilterChange("All")}
            sx={{ margin: 1 }}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "Web Design" ? "contained" : "outlined"}
            onClick={() => handleFilterChange("webdesign")}
            sx={{ margin: 1 }}
          >
            Web Design
          </Button>
          <Button
            variant={selectedCategory === "Photography" ? "contained" : "outlined"}
            onClick={() => handleFilterChange("photography")}
            sx={{ margin: 1 }}
          >
            Photography
          </Button>
          <Button
            variant={selectedCategory === "Print" ? "contained" : "outlined"}
            onClick={() => handleFilterChange("print")}
            sx={{ margin: 1 }}
          >
            Print
          </Button>
        </Box>
        <div className="div">
        <Grid item xs={12}>
        <Container>
          <Grid container spacing={3}>
            {filteredProjects.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.id}
                className={`isotopeItem ${item.category}`}
              >
                <Card className="portfolio-item">
                <CardActionArea onClick={()=>{setPortfolioImg(item.image);handleOpen()}}>
                <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    className="portfolio-image"
                  />
                </CardActionArea>
                  
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
        </Grid>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
