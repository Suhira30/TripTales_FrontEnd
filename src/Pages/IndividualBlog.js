
import 'bootstrap-icons/font/bootstrap-icons.css';
import background from '../Images/background.jpg'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Reviews from '../Components/Reviews';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect ,useState} from 'react';
import PostService from './Service/PostService';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Opacity } from '@mui/icons-material';
import { DailogBox } from '../Components/DailogBox';

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
const [data, setData] = useState([]);
const{postId} =useParams();
const [openDialog, setOpenDialog] = useState(false);
const fetchData=async(postId)=>{
  try{
    const eachPostData=await PostService.fetchEachPostData(postId);
    setData(eachPostData);
  }
  catch(error){
    console.log('error fetching data ', error);
  }
};

useEffect(()=>{
  fetchData(postId);
},[postId]);
 
const handleOpenDailog=()=>{
  setOpenDialog(true);
}
const handleCloseDailog=()=>{
  setOpenDialog(false);
}
const imageStyle = {
    maxWidth: '100%',        
    height: 'auto',          
  };
  const backgroundStyle = {
    backgroundImage:data.imageUrl?`url(${data.imageUrl})` : '',
    marginTop:'0px',
    marginBottom:'250px',
    height: '560px',          
    width: '100%',   
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    margin:'0px auto',
    position:'relative'
  };
  const floatingDivStyle = {
     backgroundColor: 'rgba(173, 216, 230)',
    height: '33%', // Half of the redBackground div height
    width: '50%', // Full width
    position: 'absolute',
    top: '100%', // Start from the middle of the redBackground div
    left: '25%',
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
      <Typography variant="h3" component="h6" sx={{textAlign:"center"}}>
        {data.title||""}
      </Typography>
      <Typography variant="h5" component="h2"sx={{marginLeft:5}}>
      Continent :{data.continent||"continent not available "}<br/>
      Location :{data.location||"location doesn't mentioned"}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="92%" sx={{marginLeft:5,marginTop:1}}>
  <Stack direction="row" spacing={2}>
    {data.category && data.category.map((category, index) => (
      <Button key={index} variant="outlined" sx={{ color: 'black', borderColor: 'black' }}>
        {category}
      </Button>
    ))}
  </Stack>

  <Box>
    {/* <FavoriteIcon sx={{ marginLeft: 4, cursor: 'pointer' }} /> */}
    <ShareOutlinedIcon sx={{ marginLeft: 2, cursor: 'pointer' }}/>
    <ChatBubbleOutlineOutlinedIcon sx={{ marginLeft:2,marginRight:2, cursor: 'pointer' }} onClick={handleOpenDailog} />
    <DailogBox open={openDialog} onClose={handleCloseDailog} postId={postId}/>
  </Box>
</Box>
    </div>
    </div>
    <div style={paragraph}>
    <Root>
      <Divider sx={dividerText} textAlign="left" >Experience</Divider>
    </Root>
   {data.experience || "not mentioned"}
    <Root>
      <Divider sx={dividerText}  textAlign="left" style={dividerStyle}>Guide</Divider>
    </Root>
   {data.guide ||"not mentioned"}

   <div style={review}>
   <Reviews postId={postId}/>
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