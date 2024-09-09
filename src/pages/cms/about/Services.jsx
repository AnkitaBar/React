import React from "react";
import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faCode,
  faLightbulb,
  faEarth,
  faMobileScreenButton,
  faTv
} from "@fortawesome/free-solid-svg-icons";
import "./Services.css"; // Optional for additional styling

const services = [
  {
    icon: <FontAwesomeIcon icon={faTv} />,
    title: "Responsive Design",
    description:
      "We create websites that look and perform beautifully on any device. Our responsive designs ensure a seamless user experience across all devices.",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "HTML5/CSS3 Dev",
    description:
      "Our team is skilled in HTML5 and CSS3, crafting clean, efficient code that brings your website to life with modern features and enhanced visual appeal.",
  },
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: "JavaScript jQuery",
    description:
      "Enhance your website's interactivity with our JavaScript and jQuery expertise. We build dynamic, feature-rich websites that provide users with an engaging experience.",
  },
  {
    icon: <FontAwesomeIcon icon={faEarth} />,
    title: "Web Designing",
    description:
      "Our web design services combine creativity and technical expertise to deliver aesthetically pleasing and user-friendly websites.",
  },
  {
    icon: <FontAwesomeIcon icon={faLaptop} />,
    title: "WordPress Dev",
    description:
      "We offer custom WordPress development to create flexible, scalable websites that are easy to manage and tailored to meet your specific requirements.",
  },
  {
    icon: <FontAwesomeIcon icon={faMobileScreenButton} />,
    title: "Mobile Dev",
    description:
      "We create responsive and intuitive mobile applications that offer seamless performance across various platforms, ensuring a consistent user experience.",
  },
];

const Services = () => {
  return (
    <>
      <div className="services">
        <h1>Services</h1>
        <p>
          At lorem Ipsum available, but the majority have suffered alteration in
          some form by injected humour.{" "}
        </p>
      </div>
      <div className="class">
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="service-item">
              
              <div className="service-icon"><h4>{service.icon}</h4></div>
              

                <Typography variant="h6" component="h3">
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Services;
