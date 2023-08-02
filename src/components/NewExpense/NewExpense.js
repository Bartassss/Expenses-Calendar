import React, { useState } from "react";
import ExpenseForm from "../NewExpense/ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  const [newMenu, setMenu] = useState(false);

  function setingMenu() {
    setMenu(true);
  }

  function falseMenu(){
    setMenu(false);
  } 


  if (newMenu == true) {
    return(
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} zmieniaj={falseMenu} />
      </div>
    )
    
  } else if (!newMenu === true) {
    return(
      <div className="new-expense">
        <button onClick={setingMenu}>Add new expense</button>
      </div>
    )
  }
}

export default NewExpense;

