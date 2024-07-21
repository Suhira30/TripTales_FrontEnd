import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterImg from "../Images/FooterImg.png";
import Button from '@mui/joy/Button'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { responsiveFontSizes } from '@mui/material';

export default function Footer() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        bgcolor: '#071952', 
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
        marginTop:"50px"
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2,}}>
        {/* <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton> */}
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton variant="plain">
        <YouTubeIcon />
        </IconButton>
        <IconButton variant="plain">
        <InstagramIcon/>
        </IconButton>
        {/* <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        /> */}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Card
          variant="soft"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src={FooterImg} />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Am i helping you ?</Typography>
            <Typography level="body-xs">Is it useful</Typography>
            <Button
      variant="solid"
      color="neutral" // Predefined gray color
      sx={{ 
        mt: 1, 
        alignSelf: 'center',
        width: '100px' // Adjust the width as needed
      }}
    >
          {/* <FavoriteBorderIcon/> */}
          <Typography sx={{ fontSize: '12px' }}>
        Learn more
      </Typography>
        </Button>
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            level="h6"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Let's start on something great! Join with me
          </Typography>
          <Typography
            level="body1"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            Travel over 10 years
          </Typography>
        </Box>
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Get in touch</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>About me</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Contact me</ListItemButton>
              </ListItem>
              
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Blogs</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Popular</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Lateast</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Favourite</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
