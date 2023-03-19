
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart  from "./ExpenseChart"; 

const Expense = (props) => {
  const [filterYear, setSelectedYear] = useState("2020");
  
  const onSelectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  }; 
  const filteredExpenses = props.items.filter(item=>{
    return item.date.getFullYear() == filterYear
  });
  
  

  return (
    <li>
      <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSelectedYear={onSelectedYearHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
     </Card>
    </li>
  );
};
export default Expense;
