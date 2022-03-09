import React from 'react';
import { Stack, AppBar, Button, Container, List, Toolbar, Typography, Avatar } from '@mui/material';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isAuthenticated: false,
      userInfo: {
        firstName: "",
        lastName: "",
      }
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

  renderAuthInformation() {
    if (this.state.isAuthenticated) {
      return (
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar />
          <Typography>
            {this.state.userInfo ? this.state.userInfo.firstName : ""}
            {" "}
            {this.state.userInfo ? this.state.userInfo.lastName : ""}
          </Typography>
        </Stack>
      );
    } else {
      return (
        <>
          <Button href="/login" color="inherit">Login</Button>
          <Button href="/register" color="inherit">Register</Button>
        </>
      );
    }
  }

  signOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.setState({
        isAuthenticated: false,
      });
      console.log("Signed out successfully.");
    }).catch((error) => {
      console.log(`Could not sign out. ${error.message}`);
    });
  }

  updateUserInfo(user) {
    const db = getDatabase(this.props.firebaseApp);
    const userRef = ref(db, `users/${user.uid}`)
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({
        userInfo: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      });
    });
  }

  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
        });
        this.updateUserInfo(user);
      } else {
        this.setState({
          isAuthenticated: false,
          userInfo: {firstName: "", lastName: ""},
        });
      }
    });
  }

  render() {
    return (
      <>
        <AppBar position='static'>
          <Toolbar>
            <Button onClick={() => this.signOut()} color="inherit">Sign Out</Button>
            <Typography sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            {this.renderAuthInformation()}
          </Toolbar>
        </AppBar>
        <Container maxWidth='md'>
          <CreatePost sendPost={(post) => this.sendPost(post)} />
          <List>
            {this.renderPosts()}
          </List>
        </Container>
      </>
    );
  }
}
