import React, {useRef} from 'react';
import styled from "styled-components";

const StyledNewTodo = styled.div`
  box-sizing: border-box;
  margin: 2rem;
  display: flex;
  justify-content: center;

  & form {
    width: 90%;
    max-width: 40rem;
  }

  & .form-control {
    margin-bottom: 1rem;
  }

  & label, input {
    display: block;
    width: 100%;
  }

  & label {
    font-weight: bold;
  }

  & input {
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.25rem;
  }

  & input:focus {
    outline: none;
    border-color: #50005a;
  }

  & button {
    background: #50005a;
    border: 1px solid #50005a;
    color: white;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  & button:focus {
    outline: none;
  }

  & button:hover,
  & button:active {
    background: #6a0a77;
    border-color: #6a0a77;
  }


`

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <StyledNewTodo>
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </StyledNewTodo>
  );
};

export default NewTodo;
