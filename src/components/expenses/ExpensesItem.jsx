import ExpenseDate from "./ExpenseDate";
import "./ExpensesList.css";

export const ExpensesItem = ({ title, amount, date }) => {
  return (
    <li className="li-style">
      <div className="date-title-div">
        <ExpenseDate date={date}/>
        {/* <p className="date">{date}</p> */}

        <p className="title">{title}</p>
      </div>
      <div>
        <p className="amount">${amount}</p>
      </div>
    </li>
  );
};
