import React from 'react';
import { Box, Typography, Divider, TextField ,Button ,Checkbox } from '@mui/material';


const Subscription = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="card-group" style={{ padding: '0', marginTop: '20px', width: '100%' ,backgroundColor:"#3AA6B9",color:"white"}}>
      <Box
        height={400}
        width={"472px"}
        display="flex"
        flexDirection="column"
        gap={2}
        p={0.2}
        sx={{ border: '1px solid #eeeeee' }}
  
      >
        <Typography sx={{ padding: "10px 0 0 10px", fontWeight: "540" }}>Subscribe Today ! </Typography>
        <Divider sx={{ width: '100%' }} />
       <Typography sx={{textAlign:"justify",paddingLeft:"30px",paddingRight:"30px"}}>
       Stay Updated!
        Subscribe to our page for the latest blog posts, expert tips, personal travel guides, 
        and live chats. Don't miss out on exciting updates and valuable information!
        You can get the feature of chat box for the live chating.Stay Updated!
       </Typography>
       <Box sx={{  justifyContent: "center", padding: "0 30px 10px 30px" }}>
          <TextField 
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            sx={{ 
              backgroundColor: 'white', 
              borderRadius: '4px', 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#eeeeee',
                },
                '&:hover fieldset': {
                  borderColor: '#3AA6B9',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3AA6B9',
                },
              },
            }}
          />
          <Box>
          <Typography sx={{textAlign:"justify",paddingLeft:"0px",}}>
          <Checkbox {...label} defaultChecked color="default" /> 

          Agree with your terms and conditions
          </Typography>
          </Box>
            <Box>
            <Button 
          variant="contained"
            sx={{ 
              backgroundColor: 'white', 
              color: '#3AA6B9', 
              borderRadius: '4px', 
              padding: '10px 20px', 
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            }}
          >
            Subscribe
          </Button>
            </Box>
          
        </Box>
      </Box>
    </div>
  );
};

export default Subscription;
