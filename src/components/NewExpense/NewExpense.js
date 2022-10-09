import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense =(props)=>{
  const [isEditing,setisEditing]=   useState(false);   

    const saveExpenseDataHandler   = (enteredexpenseData)=>{
       const expenseData = {
        ...enteredexpenseData,
        id:Math.random().toString(),
       };
      props.onAddExpense(expenseData);
      setisEditing(false);
    
    };
     
    const starteEditingHandler =()=>{
         setisEditing(true);
     }

     const stopEditingHandler =()=>{
      setisEditing(false);
     }
  
  return (<div className='new-expense'>
    {/* If is Editing is False then show form then Starting Handler Funciton Executes*/}
  
  {!isEditing &&
   < button onClick={starteEditingHandler}>Add New Expense</button>
  }
  {/* after Executing starhandler function it set the state the true and form is shown */}
  {isEditing &&  
  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}

      
  </div>);
}

export default NewExpense;