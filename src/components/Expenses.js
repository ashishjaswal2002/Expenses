import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpenseList';
import ExpensesChart from './Chart/ExpensesChart';
function Expenses(props){
    const[filterYear,SetFilteredYear] = useState('2020');
   const filterChangeHandler =selectedYear=>{

    console.log('Expense');
      SetFilteredYear(selectedYear);  

   }
   const filterExpenses =  props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;
   });
  //  More Clean Code..
    

  return(
    <div>
     <li>
      <div>
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
   
        
        {/* <ExpenseItem title={props.items[0].title} amount = {props.items[0].amount} date= {props.items[0].date}/>
     <ExpenseItem title={props.items[1].title} amount = {props.items[1].amount} date= {props.items[1].date}/> */}
      <ExpensesChart expenses={filterExpenses}/>
      <ExpensesList  items={filterExpenses}/>
    </div>
    </li>

  </div>)
  
}
export default Expenses;