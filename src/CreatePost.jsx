import { Button, IconButton, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ImageIcon from '@mui/icons-material/Image';
import { v4 as uuid } from 'uuid';

export default class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postContent: "",
    };
  }

  constructPost() {
    const post = {
      id: uuid(),
      userName: "User Name",  // TODO: change this when Firebase is ready
      content: this.state.postContent,
    };

    if (this.validate(post)) {
      this.props.sendPost(post);
    }
  }

  validate(post) {
    return post.content !== "" && post.content.length <= 200;
  }

  render() {
    return (
      <Box sx={{margin: 2}}>
        <Stack direction="row" spacing={2}>
          <TextField
            onChange={(event) => this.setState({
              postContent: event.target.value,
            })}
            label="What's on your mind?"
            variant="outlined"
            multiline
            fullWidth
            autoFocus
          />
          <IconButton>
            <ImageIcon />
          </IconButton>
          <Button onClick={() => this.constructPost()}>Send</Button>
        </Stack>
      </Box>
    );
  }
}