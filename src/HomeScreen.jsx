import React from 'react';
import { AppBar, Container, List, Toolbar, Typography } from '@mui/material';
import PostCard from './PostCard';
import CreatePost from './CreatePost';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  sendPost(post) {
    const newPosts = [...this.state.posts];
    newPosts.push(post);
    this.setState({
      posts: newPosts,
    });
  }

  renderPosts() {
    // TODO: add more here when user data from Firebase is available
    return this.state.posts.map((post) => {
      return <PostCard key={post.id} content={post.content} />
    });
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
        <CreatePost sendPost={(content) => this.sendPost(content)} />
        <List>
          {this.renderPosts()}
        </List>
      </Container>
      </>
    );
  }
}
