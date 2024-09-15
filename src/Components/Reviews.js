import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import ReviewRating from '../Components/ReviewRating'; 
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// Dummy review data
const dummyReviews = [
  {
    id: 1,
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/50',
    // rating: 4,
    date: '2024-09-01',
    description: 'Excellent service, very professional!',
  },
  {
    id: 2,
    customerName: 'Jane Doe',
    customerEmail: 'jane.doe@example.com',
    avatar: 'https://via.placeholder.com/50',
    // rating: 5,
    date: '2024-09-01',
    description: 'Outstanding work, highly recommended!',
  },
  {
    id: 3,
    customerName: 'Mike Johnson',
    customerEmail: 'mike.johnson@example.com',
    avatar: 'https://via.placeholder.com/50',
    // rating: 3,
    date: '2024-09-01',
    description: 'Good job, but there is room for improvement.',
  },
  // Add more dummy reviews as needed
];

function Reviews() {
  const [listData, setListData] = useState(dummyReviews);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Adjust this as needed

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(listData.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box sx={{ padding: '0', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="center">
          <List sx={{ width: '100%', bgcolor: 'background.paper', marginLeft: '0px', padding: "0" }}>
            {currentItems.map(item => (
              <React.Fragment key={item.id}>
                <ListItem alignItems="flex-start" sx={{ paddingY: 2, position: 'relative' }}>
                  <ListItemAvatar>
                    <Avatar alt={item.customerName} src={item.avatar} sx={{ width: 50, height: 50, marginRight: '30px' }} />
                  </ListItemAvatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: 'bold' }}>
                          {item.customerEmail}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                            {/* <ReviewRating value={item.rating} /> */}
                          </Typography>
                          {` — ${item.description}`}
                        </React.Fragment>
                      }
                    />
                  </Box>
                </ListItem>
                {/* <Divider variant="inset" component="li" /> */}
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Reviews;
