
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [enteredYear, setEnteredYear] = useState("2022");

  function YearHandler(enteredrok) {
    setEnteredYear(enteredrok);
  }

  const filterek = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  });
 
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter
        selected={enteredYear}
        onSaveYear={YearHandler}
      />
      <ExpensesChart expenses={filterek} />
      <ExpensesList items={filterek}/>
    </Card>
    </div>
  );
};


export default Expense;
