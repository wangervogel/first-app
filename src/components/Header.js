import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../App.css';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="wangel_logo.jpeg" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '20px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            装備管理Todo
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
