import { Button, IconButton, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ImageIcon from '@mui/icons-material/Image';

export default class PostCard extends React.Component {
  render() {
    return (
      <Box sx={{margin: 2}}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="What's on your mind?"
            variant='outlined'
            multiline
            fullWidth
          />
          <IconButton>
            <ImageIcon />
          </IconButton>
          <Button>Send</Button>
        </Stack>
      </Box>
    );
  }
}