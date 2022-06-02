import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  // map활용
  const ExpenseItemList = props.items.map((el) => (
    <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
  ));

  return <Card className="expenses">{ExpenseItemList}</Card>;
}

export default Expenses;
