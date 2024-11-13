import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../../Components/Header';
import background from "../../Images/background.jpg";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import postService from '../Service/PostService';
import { useParams } from 'react-router-dom';
import eg from '../../Images/C_Ocean.jpg'
// const itemData = [
//   // Dummy data for illustration, replace with your actual data
//   { id: 1, title: 'Lizard 1', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 1' },
//   { id: 2, title: 'Lizard 2', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 2' },
//   { id: 3, title: 'Lizard 3', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 3' },
//   { id: 4, title: 'Lizard 4', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 4' },
//   { id: 5, title: 'Lizard 5', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 5' },
//   { id: 6, title: 'Lizard 6', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 6' },
//   { id: 7, title: 'Lizard 7', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 7' },
//   { id: 8, title: 'Lizard 8', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 8' },
//   { id: 9, title: 'Lizard 9', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 9' },
//   { id: 10, title: 'Lizard 8', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 8' },
//   { id: 11, title: 'Lizard 9', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 9' },
//   { id: 12, title: 'Lizard 8', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 8' },
//   { id: 13, title: 'Lizard 9', image: '/static/images/cards/contemplative-reptile.jpg', description: 'Description 9' },

//   // Add more items as needed
// ];


export default function RoadTravel() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  };

  const [page, setPage] = React.useState(1);
  const itemsPerPage = 12;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedItems = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const postData=await postService.getByCategory(category);
        setData(postData);
      }
      catch(error){
        console.log('error fetching data ',error);
      }
    };
    fetchData();
  },[category])

  return (
    <>
      <div style={backgroundStyle}>
        <Header />
      </div>
      <div style={{ padding: "0", marginTop: '40px', textAlign: 'center', marginLeft: '190px', marginRight: '200px', height: '600px' }}>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
          {paginatedItems.map(item => (
            <Card key={item.postId} sx={{ maxWidth: 300 ,}}>
            <Link to={`/eachpost/${item.postId}`} style={{ textDecoration: 'none' }}>
            {/* <Link to={`/eachpost`} style={{ textDecoration: 'none' }}> */}
              <CardMedia
                sx={{ height: 250,
                  objectFit: 'cover',
                }}
                image={item.imageUrl}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
              </Link>
            </Card>
          ))}
        </Box>
        <div style={{ display:"flex",justifyContent:"center",textAlign: 'center', marginTop: '20px' ,}}>
          <Stack spacing={2}>
            <Pagination count={pageCount} page={page} onChange={handleChange} color="primary"/>
          </Stack>
        </div>
      </div>
    </>
  );
}
