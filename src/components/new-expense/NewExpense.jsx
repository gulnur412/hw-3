import React, { useState } from "react";
import { Button } from "../UI/Button";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
export const NewExpense = ({onNewExpenses}) => {
  const [state, setState] = useState(false);

  const showHandler = () => {
    setState(!state);
  };

  return (
    <div className="wrapper">
      {state ? (
        <ExpenseForm onShow={showHandler} onNewExpenses={onNewExpenses}/>
      ) : (
        <Button onClick={showHandler}>Добавить новый расход</Button>
      )}
    </div>
  );
};

export default NewExpense;
