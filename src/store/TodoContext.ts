import type { Todo } from '../models/Todo';
import type { TodoAction } from './actionTypes';

import { createContext, Dispatch } from 'react';

interface TodoContextType {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

export default TodoContext;
