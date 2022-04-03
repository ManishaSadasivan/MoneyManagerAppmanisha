import React, { useState, useEffect } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddExpenses from './AddExpenses';
import OfficeExpense from'./OfficeExpense';
import Home from './Home';


import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Expenses from './Expenses';


function App() {
 
 const [expenselist,setexpenselist]=useState([]);
 function getexpenselist(){
  fetch("https://62482cce4bd12c92f40843fc.mockapi.io/expenselist").then((data)=>data.json()).then((data)=>setexpenselist(data))
}useEffect(getexpenselist,[])

const [financialexpense,setfinancialexpense]=useState([]);
function getfinancialexpense(){
 fetch("https://62491d8e20197bb4626f6f2a.mockapi.io/officeexpense").then((data)=>data.json()).then((data)=>setfinancialexpense(data))
}useEffect(getfinancialexpense,[])
  return (
    
   
    <div className="App">
     
 

     <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
            <MenuIcon />
          </IconButton>
          <Link to="/"><Button class="btn btn-light"> Money Manager</Button></Link>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="Expense"><Button class="btn btn-dark" >Personal Expenses- Dashboard</Button></Link>
          </Typography>
          <Link to="AddExpense" class="btn btn-dark">  <Button color="inherit">Add Personal /Office  Expenses</Button></Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="FinancialExpense" class="btn btn-dark"><Button color="inherit">Office Expense-Dashboard</Button></Link>
          </Typography>
  
        </Toolbar>
      </AppBar>
    
  
        
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
    <Route path="/AddExpense">
      <AddExpenses/>
    </Route>
    <Route path="/Expense">
      <Expenses expenselist={expenselist} setexpenselist={setexpenselist}/>
    </Route>
    <Route path="/FinancialExpense">
    <OfficeExpense financialexpense={financialexpense} setfinancialexpense={setfinancialexpense}/>
    </Route>
  
      </Switch>
    
    
    </div>
   
  );
}

export default App;
