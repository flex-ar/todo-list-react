import { useReducer } from 'react';

import TodoContext from '../store/TodoContext';
import { reducerTodo } from '../store/reducerTodo';
import { initialState } from '../store/initialState';

import { Footer } from './todo/Footer';
import { TodoList } from './todo/TodoList';
import { TodoInput } from './todo/TodoInput';

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducerTodo, initialState());

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoInput />
      <TodoList />
      <Footer />
    </TodoContext.Provider>
  );
};
