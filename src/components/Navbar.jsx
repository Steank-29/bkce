import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import bkce from '../assets/bkce.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));  

  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(34,129,161,1) 53%, rgba(0,212,255,1) 98%)', width: '100%' }}> 
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          <img
            src={bkce}
            alt="Logo"
            style={{ height: '80px', width: '320px' }} 
          />
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              sx={{color: 'white'}} 
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
              <Box
                sx={{ width: '100vw', paddingTop: '20px' , }}
                role="presentation"
                onKeyDown={() => toggleDrawer(false)}
              >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}> {/* Flexbox to align right */}
                  <IconButton
                    sx={{
                      color: '#54ABBE', 
                      margin: 1, 
                      fontSize: '2.2rem', 
                    }}
                    onClick={() => toggleDrawer(false)}
                  >
                    <CloseIcon sx={{ fontSize: '2.2rem' }} />
                  </IconButton>
                </Box>
                <List >
                  <ListItem button sx={{
                  '&:hover': {
                  backgroundColor: 'skyblue',
                  },
                  }} 
                  >
                    <ListItemText primary="Home" 
                    sx={{
                    cursor: 'pointer',
                    textAlign: 'center', 
                    marginTop: 3.5, marginBottom: 3.5, 
                    fontFamily: 'Merriweather, serif',
                    color: 'black',
                    fontSize: '1rem',  
                    textTransform: 'uppercase',
                    fontWeight: 'bold',}} />
                  </ListItem>
                  <ListItem button sx={{
                  '&:hover': {
                  backgroundColor: 'skyblue',
                  },
                  }}>
                    <ListItemText primary="About Us" 
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center', 
                      marginTop: 3.5, marginBottom: 3.5, 
                      fontFamily: 'Merriweather, serif',
                      color: 'black',
                      fontSize: '1rem',  
                      textTransform: 'uppercase',
                      fontWeight: 'bold',}}/>
                  </ListItem>
                  <ListItem button sx={{
                  '&:hover': {
                  backgroundColor: 'skyblue',
                  },
                  }}>
                    <ListItemText primary="Services" 
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center', 
                      marginTop: 3.5, marginBottom: 3.5, 
                      fontFamily: 'Merriweather, serif',
                      color: 'black',
                      fontSize: '1rem',  
                      textTransform: 'uppercase',
                      fontWeight: 'bold',}}/>
                  </ListItem>
                  <ListItem button sx={{
                  '&:hover': {
                  backgroundColor: 'skyblue',
                  },
                  }}>
                    <ListItemText primary="Expertise" 
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center', 
                      marginTop: 3.5, marginBottom: 3.5, 
                      fontFamily: 'Merriweather, serif',
                      color: 'black',
                      fontSize: '1rem',  
                      textTransform: 'uppercase',
                      fontWeight: 'bold',}}/>
                  </ListItem>
                  <ListItem button sx={{
                  '&:hover': {
                  backgroundColor: 'skyblue',
                  },
                  }}>
                    <ListItemText primary="Websites Creation" 
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center', 
                      marginTop: 3.5, marginBottom: 3.5, 
                      fontFamily: 'Merriweather, serif',
                      color: 'black',
                      fontSize: '1rem',  
                      textTransform: 'uppercase',
                      fontWeight: 'bold',}}/>
                  </ListItem>
                  <ListItem button sx={{
                  '&:hover': {
                  backgroundColor: 'skyblue',
                  },
                  }}>
                    <ListItemText primary="Contact Us"
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center', 
                      marginTop: 3.5, marginBottom: 3.5, 
                      fontFamily: 'Merriweather, serif',
                      color: 'black',
                      fontSize: '1rem',  
                      textTransform: 'uppercase',
                      fontWeight: 'bold',}}/>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : isTablet ? (
          // On tablet-sized screens, show "Home" and the other menu items inside "What We Provide"
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                marginRight: 2,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1rem',  
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              Home
            </Typography>
            <Typography
              onClick={handleMenuClick}
              sx={{
                marginRight: 2,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1rem',  
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              What We Provide
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
              <MenuItem onClick={handleMenuClose}>Services</MenuItem>
              <MenuItem onClick={handleMenuClose}>Expertise</MenuItem>
              <MenuItem onClick={handleMenuClose}>Websites Creation</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
            </Menu>
          </Box>
        ) : (
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexGrow: 1,
              fontFamily: 'Merriweather, serif',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                marginRight: 4,
                cursor: 'pointer',
                fontFamily: 'Merriweather, serif',
                color: 'black',
                fontSize: '1rem',  
                textTransform: 'uppercase',
                fontWeight: 'bold',
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
                fontSize: '1rem',  
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
                fontSize: '1rem',  
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
                fontSize: '1rem',  
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
                fontSize: '1rem',  
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
                fontSize: '1rem',  
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
