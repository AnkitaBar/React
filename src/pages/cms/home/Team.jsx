
import React from 'react';
import './Team.css';
import James from "../../img/james.jpg"
import Kris from "../../img/kris.jpg"
import Johana from "../../img/johana.jpg"
import Bruce from "../../img/bruce.jpg"

import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Team = () => {
  const teamMembers = [
    {
      name: "James Rally",
      title: "CEO",
      img: James, // Replace with actual image URL
     
    },
    {
      name: "Kristen Viller",
      title: "TRAINER",
      img: Kris, // Replace with actual image URL
      
    },
    {
      name: "Johanna Care",
      title: "TRAINER",
      img: Johana, // Replace with actual image URL
     
    },
    {
      name: "Bruce Willamson",
      title: "TRAINER",
      img: Bruce, // Replace with actual image URL
      
    },
  ];

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <div className="grid">
        {teamMembers.map((member, index) => (

            <div className="team-card" key={index}>

            <img src={member.img} alt={member.name} />

            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <div className="social-icons">
            <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
           <Facebook />
         </IconButton>
         <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
           <Twitter />
         </IconButton>
         <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
           <Instagram />
         </IconButton>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
