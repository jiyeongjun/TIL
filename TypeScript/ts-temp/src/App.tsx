import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import Backgound from "./style/background";
import {Todo} from './todo.model';

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Toggle from "./components/Toggle";
import {useDarkMode} from "./hooks/useDarkMode";
import {dark, light, fontSizes, fontWeights} from "./style/theme";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [themeMode, toggleTheme] = useDarkMode();


  const theme =
    themeMode === "light"
      ? {mode: light, fontSizes, fontWeights}
      : {mode: dark, fontSizes, fontWeights};


  const todoAddHandler = (text: string) => {
    console.log(todos);
    setTodos(prevTodos => [...prevTodos,
      {id: Math.random().toString(), text: text}]);
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Backgound>
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        <Toggle themeMode={themeMode} toggleTheme={toggleTheme}/>
      </Backgound>
    </ThemeProvider>
  );
}

export default App;
