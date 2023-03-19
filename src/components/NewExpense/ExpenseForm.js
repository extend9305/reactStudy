import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput,setUserInput] = useState({
    //      enteredTitle : ""
    //     ,enteredAmount : ""
    //     ,enteredDate : ""
    // })
 

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput
        //     ,enteredTitle : event.target.value
        // })
        // 위의 방법보다 이렇게 해야한다 이유는 가장 최신의 이전 state 를 가져오는 방법이 위의 방법보다 안전함으로.. 
        // 하지만 이렇게 하는것보다 개별적으로 가져오는것이 더좋다?.
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle : event.target.value}
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput
        //     ,enteredAmount : event.target.value
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput
        //     ,enteredDate : event.target.value
        // })
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" step="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="">Add Expense</button>
            <button type="" onClick={props.onCancelExpense}>Cancel</button>
        </div>
    </form>
}

export default ExpenseForm;