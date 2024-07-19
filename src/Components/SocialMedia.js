import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
const SocialMedia = () => {
  return (
    <div className="card-group" style={{ padding: '0', margin: '0 0 0 0px', width: '100%' }}>
      <Box
        height={200}
        width={"472px"}
       marginTop={"20px"}
        display="flex"
        flexDirection="column"
        gap={2}
        p={0.2}
        sx={{ border: '1px solid #eeeeee' }}
      >
        <Typography sx={{ paddingTop: "10px", fontWeight: "540" }}>Follow  me </Typography>
        <Divider sx={{ width: '100%' }} />
        <Box>
          <Grid container rowSpacing={1} columnSpacing={2}>
            <Grid item xs={6}>
            <Box display="flex" alignItems="center" gap={1} marginLeft={"30px"} >
                <FacebookRoundedIcon />
                <Typography>Facebook</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
            <Box display="flex" alignItems="center" gap={1} marginLeft={"30px"} >
                <YouTubeIcon />
                <Typography>Youtube</Typography>
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box display="flex" alignItems="center" gap={1} marginLeft={"30px"} >
                <InstagramIcon />
                <Typography>Instagram</Typography>
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box display="flex" alignItems="center" gap={1} marginLeft={"30px"} >
                <EmailIcon />
                <Typography>Instagram</Typography>
            </Box>
            </Grid>
            <Grid item xs={6}>
            <Box display="flex" alignItems="center" gap={1} marginLeft={"30px"} >
                <XIcon />
                <Typography>Twitter</Typography>
            </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default SocialMedia;
