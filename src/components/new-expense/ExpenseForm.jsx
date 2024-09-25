import { useState } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/Forminput";
import "./ExpenseForm.css";
export const ExpenseForm = ({ onShow, onNewExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmout] = useState("");
  const [date, setDate] = useState("");

  const handeleTitleXCange = (event) => {
    setTitle(event.target.value);
  };
  const handeleAmountCange = (event) => {
    setAmout(event.target.value);
  };
  const handeleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      id: Date.now().toString(),
      title: title,
      amount:Namber( amount),
      date: new Date(date),
    };
    onNewExpenses(newExpense);
    setTitle("");
    setAmout("");
    setDate("");
  };
  // State batching
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="form-second">
        <FormInput
          inputType="text"
          labelText={"Заголовок"}
          onChange={handeleTitleXCange}
          value={title}
        />
        <div className="form-second">
          <FormInput
            inputType="number"
            labelText={"Количество"}
            onChange={handeleAmountCange}
            value={amount}
          />
        </div>
        </div>
        <div className="form-two">
        <FormInput
          inputType="date"
          labelText={"Датировать"}
          onChange={handeleDateChange}
          value={date}
        />
          </div>

      </div>
      <div className="button-head">
        <Button className="button-first" type={"button"} onClick={onShow}>
          отмена
        </Button>
        <Button className="button-second" type={"submit"}>Добавить расход</Button>
      </div>
    </form>
  );
};
