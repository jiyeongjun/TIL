import React from 'react';
import styled from "styled-components";
import {media} from '../style/util'

const StyledUl = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;


  & li {
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.bigDesktop} {
      background: red;
    }

    ${media.desktop} {
      background: #d06135;
    }

    ${media.tablet} {
      background: #bdbd3a;
    }

    ${media.mobile} {
      background: green;
    }

    ${media.smallMobile} {
      background: blue;
    }
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

interface TodoListProps {
  items: { id: string, text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList = (props: TodoListProps) => {
  return (<StyledUl>
      {props.items.map(todo =>
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE
          </button>
        </li>
      )}
    </StyledUl>
  );
};

export default TodoList;
