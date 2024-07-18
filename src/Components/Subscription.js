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
const Subscription = () => {
  return (
    <div className="card-group" style={{ padding: '0', margin: '0 0 0 0px', width: '100%' ,backgroundColor:"#3AA6B9",color:"white"}}>
      <Box
        height={400}
        width={"472px"}
       
        display="flex"
        flexDirection="column"
        gap={2}
        p={0.2}
        sx={{ border: '1px solid #eeeeee' }}
      >
        <Typography sx={{ padding: "10px", fontWeight: "540" }}>Subscribe Today ! </Typography>
        <Divider sx={{ width: '100%' }} />
       <Typography sx={{justifyContent:"center"}}>
       Stay Updated!
        Subscribe to our page for the latest blog posts, expert tips, personal travel guides, 
        and live chats. Don't miss out on exciting updates and valuable information!
        You can get the feature of chat box for the live chating.Stay Updated!
       </Typography>
      </Box>
    </div>
  );
};

export default Subscription;
