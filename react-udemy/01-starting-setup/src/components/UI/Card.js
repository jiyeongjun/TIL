import "./Card.css";

function Card(props) {
    // 다른 컴포넌트에서 받은 className을 함께 지정하는 방법이다.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
