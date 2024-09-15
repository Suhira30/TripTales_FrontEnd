
import 'bootstrap-icons/font/bootstrap-icons.css';
import background from '../Images/background.jpg'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Reviews from '../Components/Reviews';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
function Homebar() {
//   const backgroundStyle={
   
//     height: '100vh',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     overflow: 'hidden',
//     margin: 0,
//     padding: 0
//   }
const imageStyle = {
    maxWidth: '100%',        
    height: 'auto',          
  };
  const backgroundStyle = {
    backgroundColor: 'pink',
    marginTop:'0px',
    marginBottom:'250px',
    height: '480px',          
    width: '100%',   
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    margin:'0px auto',
    position:'relative'
  };
  const floatingDivStyle = {
    backgroundColor: 'lightblue',
    height: '50%', // Half of the redBackground div height
    width: '80%', // Full width
    position: 'absolute',
    top: '100%', // Start from the middle of the redBackground div
    left: '10%',
    transform: 'translateY(-50%)', // Move up by half of its own height
  };

const paragraph={
    margin:"0",
    textAlign: 'justify',
    marginTop:"150px",
    marginLeft:"150px",
    marginRight:'150px',
}
 const dividerStyle={
    marginTop:'30px'
 }
 const dividerText={
        color: 'black',  // Text color
        fontSize: '1.5rem',  // Font size
        fontWeight: '500',  // Font weight
 }
 const review={
    marginTop:'30px'
 }
  return (
<>
    <div>
    <Header/>
    <div style={backgroundStyle}>
    <div  style={floatingDivStyle}>
      <Typography variant="h1" component="h2">
        hello
      </Typography>
      <Typography variant="h5" component="h2">
        Place:
        Geographical Area :
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" sx={{ color: 'black', borderColor: 'black' }}>
        Solo trip 
      </Button>
      <Button variant="outlined" sx={{ color: 'black', borderColor: 'black' }}>
        Family trip 
      </Button>
      <Button variant="outlined" sx={{ color: 'black', borderColor: 'black' }}>
        Forest trip 
      </Button>
    </Stack>
      </Typography>
      <FavoriteIcon/>
      <ChatBubbleIcon/>
    </div>
    </div>
    <div style={paragraph}>
    <Root>
      <Divider sx={dividerText} textAlign="left" >Experience</Divider>
    </Root>
    In the heart of a bustling city, where the rhythmic pulse of urban life beats incessantly, there exists a tranquil garden that offers a respite from the chaos. Nestled between towering skyscrapers and busy streets, this hidden oasis is adorned with vibrant blooms and lush greenery. Visitors are greeted by the gentle hum of bees and the soft rustling of leaves, creating a serene ambiance that contrasts sharply with the city's frenetic energy. As the sun filters through the canopy, the garden transforms into a haven of peace, inviting all who enter to pause, reflect, and rejuvenate amidst nature's beauty. It's a reminder that even in the midst of modernity's rush, moments of calm and connection with the natural world are always within reach.
   
    <Root>
      <Divider sx={dividerText}  textAlign="left" style={dividerStyle}>Guide</Divider>
    </Root>
    In the heart of a bustling city, where the rhythmic pulse of urban life beats incessantly, there exists a tranquil garden that offers a respite from the chaos. Nestled between towering skyscrapers and busy streets, this hidden oasis is adorned with vibrant blooms and lush greenery. Visitors are greeted by the gentle hum of bees and the soft rustling of leaves, creating a serene ambiance that contrasts sharply with the city's frenetic energy. As the sun filters through the canopy, the garden transforms into a haven of peace, inviting all who enter to pause, reflect, and rejuvenate amidst nature's beauty. It's a reminder that even in the midst of modernity's rush, moments of calm and connection with the natural world are always within reach.
   <div style={review}>
   <Reviews/>
   </div>
    </div>
    </div>
      
{/* ---------------------Foooter ------------------------------------------------------- */}
  <div>
    <Footer/>
  </div> 
      
</>
  );
}

export default Homebar;