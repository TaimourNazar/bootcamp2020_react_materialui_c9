import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  testButton:{
    backgroundColor: "red"
  },
  testAppbar:{
    backgroundColor: "lightblue"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    
    <div>
      <AppBar position="static" className={classes.testAppbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" className={classes.testButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          Hello World 1
        </Grid>
        <Grid item xs={6}>
          Hello World 2
        </Grid>
        <Grid item xs={6}>
          Hello World 3
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"red"}}>
          Hello World 4
        </Grid>
        <Grid item xs={8} style={{backgroundColor:"green"}}>
          Hello World 5
        </Grid>
        <Grid item xs={2} style={{backgroundColor:"blue"}}>
          Hello World 6
        </Grid>
      </Grid>

      <br/>
      <br/>
      <Button variant="contained" color="primary">Hello Button</Button>
      <Button variant="outlined" color="secondary">Hello Button</Button>
      <Button variant="text" color="secondary">Hello Button</Button>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default App;
