import {React,useState} from 'react'
import Box from '@mui/material/Box';
import Item from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import frontlogin from '../Img/frontlogin.png';
// import applogo from '../Img/app-logo.png';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PricingCards from '../Components/PricingCards';
import axios from 'axios';
import BASE_URL from '../Pages/Service/BaseUrl';

  
export const Subscription = () => { 
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8080/api/v1/subscriptions/charge", {
        token: cardNumber, // Ensure token is correctly mapped here
        amount: 500, // Pass amount in cents
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      alert('Payment successful');
    } catch (error) {
      alert('Payment failed');
    }
  };
return (
  <>
  <Box sx={{width: '100vw',height: '100vh',display: 'grid',gridTemplateColumns: {xs: '1fr',   sm: '35% 65%',},}}>
    <Item sx={{ gridRow: '1', gridColumn: '1',width:"100%",display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <PricingCards/>
    </Item>
    <Item sx={{ gridRow: '1', gridColumn: '2',width:"100%",overflow: 'hidden',bgcolor: '#3AA6B9',}}>
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{  position: 'relative',}}>
    <Box
    sx={{
    my: 12,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color:"neutral",
    }}>
    </Box>
    </Box>
  <CssBaseline />
    <Box sx={{my: 17,mx: 4,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
    <Typography component="h1" variant="h4" fontWeight={"580"}  >Travel Tales</Typography>
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        // maxWidth: '80%',
        width:"700px",
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
        marginTop:'10px'
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Add new card
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card number</FormLabel>
          <Input
             value={cardNumber}
             onChange={(e) => setCardNumber(e.target.value)}
             endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input 
           value={expiryDate}
           onChange={(e) => setExpiryDate(e.target.value)}
           endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          endDecorator={<InfoOutlined />} />
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Card holder name</FormLabel>
          <Input     
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          placeholder="Enter cardholder's full name" 
          />
        </FormControl>
        <CardActions
        sx={{width: '670px',justifyContent: 'center', gap: 2,}}>
        <Button variant="outlined" sx={{width: '400px',
          color: '#ff5722', // Color of Cancel button
          borderColor: '#ff5722', // Border color for outlined button
          '&:hover': {backgroundColor: '#ffe0d6'}}}>Cancel
        </Button>
        <Button variant="solid"  sx={{
          backgroundColor: '#ff5722',color: '#ffffff',width: '400px',
          '&:hover': {backgroundColor: '#e64a19'}}} type="submit" onClick={handleSubmit}> Payment
        </Button>
        </CardActions>
        </CardContent>
    </Card>
    </Box>
    </Item>
    </Box>
</>
  )
}
export default Subscription;