import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';

function Header() {

  const [user] = useAuthState(auth)

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="wangel_logo.jpeg" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '20px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            装備管理Todo
          </Typography>
        </Link>
        <Box display="flex" alignItems="center">
          {user ? (
            <>
              <Avatar src={user.photoURL} alt="" sx={{ width: 40, height: 40, marginRight: 1 }} />
              <Button color="inherit" onClick={() => signOut(auth)}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
