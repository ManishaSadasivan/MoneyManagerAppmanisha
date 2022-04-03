import React ,{ useState }  from 'react';

import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';



export default function AddExpenses() {

  const history=useHistory();
  const [expense,setexpense]=useState()
  const [cost,setCost]=useState()
  const [id,setid]=useState()
  const[date,setdate]=useState()

  const [Officeexpense,setofficeexpense]=useState()
  const [officecost,officesetCost]=useState()
  const [officeid,setofficeid]=useState()

  return (
    <div > <br></br>
<div class="row">

<div class="col-md-6">
<Container maxWidth="sm" >
<h1> <span class="badge badge-secondary">Add new expense below</span></h1>
       <TextField  label="id" value={id}onChange={(event)=>{setid(event.target.value)}}/><br></br>
  <TextField label="expense" value={expense}onChange={(event)=>{setexpense(event.target.value)}} id="rating"/><br></br>
  <TextField  label="cost"  value={cost}onChange={(event)=>{setCost(event.target.value)}}/><br></br>
<br></br>
<InputLabel >Select Date</InputLabel>
  <TextField  value={date} type="date" onChange={(event)=>setdate(event.target.value)} ></TextField>

   <br></br>
  
  <Button class="btn btn-dark"  onClick={()=>{
          const newexpense={
            id:id,
            expense:expense,
            cost:cost,
            date:date
        };

       fetch("https://62482cce4bd12c92f40843fc.mockapi.io/expenselist",{
        method: "POST",
        body:JSON.stringify(newexpense),
        headers:{
          "Content-Type": "application/json"
        },

       }).then(()=>history.push("/Expense"));
        // setMovielist([...movielist,newMovie])
     
        // console.log(newMovie);
        // console.log(movielist);

    }}
  
  
>Submit</Button>

</Container>
</div>

<div class="col-md-6">
<h1> <span class="badge badge-secondary">Add new Office expense below</span></h1>
<Container maxWidth="sm" >
       <TextField  label="id" value={officeid}onChange={(event)=>{setofficeid(event.target.value)}}/><br></br>
  <TextField label="expense" value={Officeexpense}onChange={(event)=>{setofficeexpense(event.target.value)}} id="rating"/><br></br>
  <TextField  label="cost"  value={officecost}onChange={(event)=>{officesetCost(event.target.value)}}/><br></br>

  <InputLabel >Select Date</InputLabel>
  <TextField  value={date} type="date" onChange={(event)=>setdate(event.target.value)} ></TextField>
   <br></br>
    
  <Button class="btn btn-dark"  onClick={()=>{
          const newexpense={
            id:officecost,
            expense:Officeexpense,
            cost:officecost,
            date:date
        };

       fetch("https://62491d8e20197bb4626f6f2a.mockapi.io/officeexpense",{
        method: "POST",
        body:JSON.stringify(newexpense),
        headers:{
          "Content-Type": "application/json"
        },

       }).then(()=>history.push("/FinancialExpense"));
        // setMovielist([...movielist,newMovie])
     
        // console.log(newMovie);
        // console.log(movielist);

    }}
  
  
>Submit</Button>

</Container>
</div>
</div>
    </div>
  )
}
