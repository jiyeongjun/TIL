import {useSelector, useDispatch} from 'react-redux';

import {counterActions, ReducerType} from '../store/index'

import styled from "styled-components";
import Button from "../style/Button";

const StyledCounter = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;

  & h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1rem;
  }

  .value {
    font-size: 2rem;
    color: #3c0080;
    margin: 2rem 0;
    font-weight: bold;
  }

  Button {
    margin: 1rem;
  }
`

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: ReducerType) => state.count);
  const show = useSelector((state: ReducerType) => state.showCounter);

  const countHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(counterActions.counter(Number(e.currentTarget.value)));
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <StyledCounter>
      <h1>Redux Counter</h1>
      {show && <div className="value">{counter}</div>}
      <div>
        <Button value={-5} onClick={event => countHandler(event)} fontSize="sm">Decrement by -5</Button>
        <Button value={-1} onClick={event => countHandler(event)} fontSize="sm">Decrement</Button>
        <Button value={1} onClick={event => countHandler(event)} fontSize="sm">Increment</Button>
        <Button value={5} onClick={event => countHandler(event)} fontSize="sm">Increase by 5</Button>
      </div>
      <Button onClick={toggleCounterHandler}>Toggle Counter</Button>
    </StyledCounter>
  );
};

export default Counter;
