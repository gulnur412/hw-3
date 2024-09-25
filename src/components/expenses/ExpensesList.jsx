import { Card } from "../UI/Card";
import { ExpensesItem } from "./ExpensesItem";

export const ExpensesList = ({ expenses = [] }) => {
  return (
    <Card>
      {expenses.map((item) => (
        <ExpensesItem key={item.id} {...item} />
      ))}
    </Card>
  );
};
