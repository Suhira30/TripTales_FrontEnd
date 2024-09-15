import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function PricingCards() {
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex', // Updated layout to flex for more control over card spacing
      justifyContent: 'center', // Center the card horizontally
      padding: 3, // Add some padding around the card
    }}
  >
    <Card
      size="lg"
      variant="outlined"
      sx={{
        width: '400px', // Set the width of the card to be larger
        height: '380px', // Let the height adjust based on content, or you can set a fixed height
        padding: 3, // Increase padding inside the card
        marginTop: "20px", // Add margin for spacing around the card
      }}
    >
        <Chip size="sm" variant="outlined" color="neutral">
          BASIC
        </Chip>
        <Typography level="h2">Professional</Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Travel experience
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
           Personal travel guide
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Blog notification via mail
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Get in touch with us !
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Connect with me for instant update
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }}>
            400${' '}
            <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
              / Year
            </Typography>
          </Typography>
          {/* <Button
            variant="soft"
            color="neutral"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button> */}
        </CardActions>
      </Card>
      
    </Box>
  );
}
