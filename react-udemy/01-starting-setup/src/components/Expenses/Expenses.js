import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // map활용
  const ExpenseItemList = props.items.map((el, key) => (
    <ExpenseItem key={key} title={el.title} amount={el.amount} date={el.date} />
  ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {ExpenseItemList}
      </Card>
    </div>
  );
}

export default Expenses;
