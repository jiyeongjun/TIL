import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      // title이 변경될 때, 다른 데이터들의 이전 값도 기억하기 위해 넣어준다.
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      // title이 변경될 때, 다른 데이터들의 이전 값도 기억하기 위해 넣어준다.
      enteredTitle: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      // title이 변경될 때, 다른 데이터들의 이전 값도 기억하기 위해 넣어준다.
      enteredTitle: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tilte</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
