import React from 'react';
import {Container}from '@mui/system';
import{Box}from '@mui/material';
import Downloader from '../pages/Downloader';


function AppLayout() {
  return (
    <div>
        <Container component="main" maxWidth="xs">
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginTop:6}}>
               <h1>Youtube Downloader</h1>
            </Box>
            <Downloader/>
        </Container>
    </div>
  )
}

export default AppLayout