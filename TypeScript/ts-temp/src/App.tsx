import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {ReducerType} from './store/index';

import {ThemeProvider} from "styled-components";
import BackGround from "./style/background";
import {Todo} from './todo.model';
import {useDarkMode} from "./hooks/useDarkMode";
import {dark, light, fontSizes, fontWeights} from "./style/theme";

import Header from "./components/Header";
import TodoList from "./components/Todo/TodoList";
import NewTodo from "./components/Todo/NewTodo";
import Counter from "./components/Counter"
import Auth from './components/Auth/Auth';
import UserProfile from './components/Auth/UserProfile'


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [themeMode, toggleTheme] = useDarkMode();

  const isAuth = useSelector((state: ReducerType) => state.auth.isAuthenticated);


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
      <BackGround>
        <Header themeMode={themeMode} toggleTheme={toggleTheme}/>
        {!isAuth && <Auth/>}
        {isAuth && <UserProfile/>}
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        <Counter/>
      </BackGround>
    </ThemeProvider>
  );
}

export default App;
