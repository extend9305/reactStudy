import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props)=>{
  const onSaveExpaenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random.toString()
    }
    console.log(expenseData);
    props.onAddExpense( ); 
    setIsEditing(false);
  }
  const [isEditing,setIsEditing] = useState(false);

  const onClickAddNewExpense = ()=>{
    setIsEditing(true);
  }
  const onClickCancelExpense = ()=>{
    setIsEditing( );
  }

  return (
    <div className="new-expense">
      {!  && <button onClick={onClickAddNewExpense}>Add  New Expenses</button>}
      {isEditing && <ExpenseForm onCancelExpense={onClickCancelExpense} onSaveExpenseData ={onSaveExpaenseDataHandler}/>}
      
    </div>
    );
}

export default NewExpense;