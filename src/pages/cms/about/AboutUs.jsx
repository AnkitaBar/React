import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import Header from '../home/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCloud, faHome } from '@fortawesome/free-solid-svg-icons';
import Services from './Services';
import Portfolio from './Portfolio';
import { Backdrop, Box, Fade, Modal } from '@mui/material';

const AboutUs = () => {
  const [portfolioImg, setPortfolioImg] = React.useState('');
  const [open,setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true);
    console.log('setopen called true')
  };
  const handleClose = () => setOpen(false);

  // useEffect(()=>{
  //   console.log(portfolioImg)
  //   console.log(open)
  // },[portfolioImg,open])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height:'60vh',
    width: 'fit-content',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (

    <>
    <Header/>
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">
        At lorem ipsum available, but the majority have suffered alteration humour or randomised
      </p>
      <div className="about-grid">
        <div className="about-item">
          <div className="icon"> <FontAwesomeIcon icon={faLaptop} /></div>
          <h2>What we do?</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.
          </p>
        </div>
        <div className="about-item">
          <div className="icon"><FontAwesomeIcon icon={faCloud} /></div>
          <h2>Why choose us?</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.
          </p>
        </div>
        <div className="about-item">
          <div className="icon"><FontAwesomeIcon icon={faHome} /></div>
          <h2>Where are we?</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.
          </p>
        </div>
      </div>
    </div>
    <Services/>

    <Portfolio setPortfolioImg={setPortfolioImg} handleOpen={handleOpen}/>
    <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <img src={portfolioImg} alt="img" height='100%' />
            </Box>
          </Fade>
        </Modal>
      </div>

    </>
  );
};

export default AboutUs;
