import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import bkce from '../assets/bkce.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={bkce}
            alt="Logo"
            style={{ height: '80px', width: '320px' }} // Adjusted logo height
          />
        </Typography>

        {/* Navigation Links */}
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start', // Aligns links to the left
              flexGrow: 1,
              fontFamily: 'Merriweather, serif',
            }}
          >
            <Typography
              sx={{
                marginRight: 4, // Increased margin for larger gap
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1.2rem', // Adjust the size as needed
                textTransform: 'uppercase',
                fontWeight: 'bold', // Make the text bold
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{
                marginRight: 4,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                marginRight: 4,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              Services
            </Typography>
            <Typography
              sx={{
                marginRight: 4,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              Expertise
            </Typography>
            <Typography
              sx={{
                marginRight: 4,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              Websites Creation
            </Typography>
            <Typography
              sx={{
                marginRight: 4,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              Contact Us
            </Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
