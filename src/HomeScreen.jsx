import React from 'react';
import { AppBar, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
      <List>
        <ListItem>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText>Hello!</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Hello!</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Hello!</ListItemText>
        </ListItem>
      </List>
      </>
    );
  }
}
