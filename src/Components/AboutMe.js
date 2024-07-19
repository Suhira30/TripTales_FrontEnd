import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Aboutme from '../Images/AboutMe.jpg'
const AboutMe = () => {
  return (
    <div className="card-group" style={{ padding: '0', margin: '0 0 0 0px', width: '100%' }}>
      <Box
        height={270}
        width={"472px"}
        my={2.5}
        display="flex"
        flexDirection="column"
        gap={2}
        p={0.2}
        sx={{ border: '1px solid #eeeeee' }}
      >
        <Box>
          <Grid container justifyContent="center" alignItems="center" height="100%">
            <Grid item>
              <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
              <Typography sx={{ padding: "10px 0 0 0", fontWeight: "540" }}>About me </Typography>
              <Divider sx={{ width: '100%' }} />
                <img 
                  src={Aboutme} 
                  alt="..." 
                  style={{ 
                    marginTop:"6px",
                    width: '110px', 
                    height: '120px', 
                    borderRadius: '50%' 
                  }} 
                />
                <Typography textAlign="justify" paddingLeft="30px" paddingRight="30px">
                  Hi, I'm Suhira Balarajan, a Sri Lankan who has been traveling the world 
                  full time for 8 years now.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
