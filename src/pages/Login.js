import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";

const Login = () => {

  const GoogleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
      await signInWithPopup(auth, GoogleProvider)
  }

  return (
      <Container maxWidth="sm" sx={{ pt: 5 }}>
          <Paper elevation={3} sx={{ py: 4, px: 2, mt: 10, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                好きなアカウントでのログインを行なってください
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                  <Button
                    onClick={signInWithGoogle}
                    variant="outlined"
                    sx={{
                      maxWidth: '200px',
                      backgroundColor: 'yellow',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: 'lightyellow',
                      }
                    }}
                  >
                    Googleでログイン
                  </Button>
              </Box>
          </Paper>
      </Container>
  )
}

export default Login;
