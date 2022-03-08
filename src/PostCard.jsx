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
          <Typography>{this.props.content}</Typography>
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