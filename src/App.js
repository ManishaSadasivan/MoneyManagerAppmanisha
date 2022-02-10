import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './Movies';
import AddMovies from './AddMovies';
import Home from './Home';
import MovieDetails from './MovieDetails';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import EditMovie from'./EditMovie';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

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
}));


function App() {
  const classes = useStyles();
 const [movielist,setMovielist]=useState([]);
 function getMovies(){
  fetch("https://61f66c842e1d7e0017fd6d9f.mockapi.io/movielist",{method: "GET"})
  .then((data)=>data.json()
  .then((response)=>setMovielist(response)))
 }
useEffect(getMovies,[])
 
  return (
    
   
  
    <div className="App">
       <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
      
          <Link to="Movies"><Button>Movies</Button></Link>
          <Link to="AddMovies"><Button > AddMovies</Button></Link>
         
       
        </Toolbar>
      </AppBar>
    </div>
     
      
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/Movies">
          <Movies movielist={movielist} setMovielist={setMovielist} />
        </Route>
        <Route path="/AddMovies">
<AddMovies movielist={movielist} setMovielist={setMovielist}/>
        </Route>
        <Route path="/EditMovie/:id">
<EditMovie movielist={movielist} setMovielist={setMovielist}/>
        </Route>
        <Route path="/MovieDetails/:id">
<MovieDetails movielist={movielist} setMovielist={setMovielist}/>
        </Route>
      </Switch>
     
    
    </div>
   
  );
}

export default App;
