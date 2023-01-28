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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSelectedYear={onSelectedYearHandler}
      />
      <h2>Let's get started!</h2>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
            amount={expense.amount}
          date={expense.date}
        /> 
      ))} 
   </Card>
  );
};
export default Expense;
