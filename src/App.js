import React,{useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES  = [
  {
    id:1,
    title:'Car Insurance',amount:233.2,date:new Date(2000,1,1) },
    {
      id:2,
    title:'Car Toilet',amount:233.22,date:new Date(2300,2,33) },
    {
      id:3,
    title:'Car Insurance',amount:233.2,date:new Date(2000,1,1) },

 ];
function App() {
  const [expenses,setExpenses]= useState(DUMMY_EXPENSES);

   const addExpenseHandler = (expense)=>{
  setExpenses((prevExpense)=>{
    return [expense,...prevExpense];
  });
   };

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
    
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
