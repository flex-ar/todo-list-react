import { useReducer } from 'react';

import TodoContext from '../../store/Todo/TodoContext';
import { reducerTodo } from '../../store/Todo/reducerTodo';
import { initialState } from '../../store/Todo/initialState';

import { Footer } from './Footer';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';

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
