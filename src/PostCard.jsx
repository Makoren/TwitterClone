import { Avatar, IconButton, Stack, Typography, Box } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default class PostCard extends React.Component {
  render() {
    return (
      <Box sx={{margin: 2}}>
        <Stack spacing={1}>
          <Stack direction='row' alignItems='center' spacing={2}>
            <Avatar>P</Avatar>
            <Typography>User Name</Typography>
          </Stack>
          <Typography>yo this taco is incredible rn so fire what if i just broke into a fuckin uhhh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut cursus ipsum. Sed in diam molestie, consectetur diam sed, tincidunt arcu. Mauris molestie tellus odio. Pellentesque iaculis sem a nibh ultrices tincidunt. Curabitur porta odio vel ex feugiat maximus. Vivamus tristique vitae lacus imperdiet tempor. Vivamus sed pulvinar nunc. Mauris malesuada fermentum tellus ut accumsan. Sed pulvinar ante a tellus auctor efficitur. Nam rutrum erat in ornare tempor.</Typography>
          <Stack direction='row' alignItems='center'>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography>13</Typography>
          </Stack>
        </Stack>
      </Box>
    );
  }
}