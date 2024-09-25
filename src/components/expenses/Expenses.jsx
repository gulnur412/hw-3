import { useState } from "react";
import { ExpenseFilter } from "../expenses-filter/ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";

export const Expenses = ({ expenses }) => {
  const [selectValue, setSelectValue] = useState("2024");

  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };
  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === selectValue
  );
  return (
    <Card>
      <ExpenseFilter value={selectValue} onChange={selectChangeHandler} />
      {expenses.length === 0 ? (
        <h1 style={{ color: "white" }}>No Expenses</h1>
      ) : (
        <ExpensesList expenses={filteredExpenses} />
      )}
    </Card>
  );
};
