import React from 'react';
import { AppBar, Container, List, Toolbar, Typography } from '@mui/material';
import PostCard from './PostCard';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fileName: 'Home Screen',
    };
  }

  render() {
    return (
      <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>
        <List>
          <PostCard />
          <PostCard />
        </List>
      </Container>
      </>
    );
  }
}
