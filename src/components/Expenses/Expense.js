import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expense = (props) => {
  const [filterYear, setSelectedYear] = useState("2020");
  
  const onSelectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter(item=>{
    return item.date.getFullYear() == filterYear
  });
  let expenseContent = <p>No Expense found.</p>
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => ( 
      <ExpenseItem
        key ={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      /> 
    ));
  }
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSelectedYear={onSelectedYearHandler}
      />
      <h2>Let's get started!</h2>
      {expenseContent}
     </Card>
  );
};
export default Expense;
