import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Teavel Tor</Button>
            </Link>
          </Typography>

          <Button style={{ textDecoration: 'none', color: "black" }} color="inherit">
            Signed In as: <a style={{ textDecoration: 'none', color: "black" }} href="#login">{user?.displayName} </a>
          </Button>

          <Link to="/alllocation">
            <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">All Place</Button>
          </Link>
          <Link to="/register">
            <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Register</Button>
          </Link>
          
          <Link to="/myorderHome">
            <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">My Order</Button>
          </Link>
          <Link to="/addService">
            <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Add Service</Button>
          </Link>


          {
            user?.email ?

              <Box>

                <Button onClick={logout} color="inherit">Logout</Button>
              </Box>
              :
              <Link to="/login">
                <Button style={{ textDecoration: 'none', color: "white" }} color="inherit">Login</Button>
              </Link>
          }


        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;