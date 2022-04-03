import React from 'react'
import Budget from './Budget'
import Balance from './Balance'
import Spent from './Spent'
export default function FinancialExpense({financialexpense,setfinancialexpense}) {
   
  return (
    <div>
      <br></br>
           <div class="row">
        <div class="col-md-4"><Budget/></div>
        <div class="col-md-4"><Balance/></div>
        <div class="col-md-4"> <Spent/></div>
      
      </div>
      <br></br>
     
      

      
      {financialexpense.map(({expense,cost,id,date})=>(
<div>
  <br></br>
   <table class="table table-dark" id="tablerow">
   
   <tbody id="tablerow" >
     <tr >
       <td>{id} </td> 
       <td>{date} </td> 
       <td>{expense}</td>
       <td>{cost}</td>

     </tr>
    
   </tbody>
 </table>
 </div>
      ))}
      
    </div>
  )
}
