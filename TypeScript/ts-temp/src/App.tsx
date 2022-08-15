import React, {useLayoutEffect, useState} from 'react';
import {ThemeProvider} from "styled-components";
import BackGround from "./style/background";
import {Todo} from './todo.model';
import styled from "styled-components";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter"
import Auth from './components/Auth';

import {useDarkMode} from "./hooks/useDarkMode";
import {dark, light, fontSizes, fontWeights} from "./style/theme";
import Header from "./components/Header";
import Text from "./style/Text";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [themeMode, toggleTheme] = useDarkMode();


  const theme =
    themeMode === "light"
      ? {mode: light, fontSizes, fontWeights}
      : {mode: dark, fontSizes, fontWeights};


  const todoAddHandler = (text: string) => {
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
      <Header themeMode={themeMode} toggleTheme={toggleTheme}/>
      <BackGround>
        <Auth/>
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        <Counter/>
      </BackGround>
    </ThemeProvider>
  );
}

export default App;
