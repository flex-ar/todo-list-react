import React, { createContext } from 'react';

import { Todo } from '../../models/Todo';

import { TodoAction } from './actionTypes';

interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

export default TodoContext;
