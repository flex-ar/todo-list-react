import type { Todo } from '../models/Todo';
import type { ReorderPayload, TodoAction } from './actionTypes';

import { reorder } from '../utils/reorder';

import { TYPE_ACTION } from './actionTypes';

const saveInLocalStorage = (newState: Todo[]) => {
  localStorage.setItem(
    'todoList',
    JSON.stringify(newState.map(todo => ({ ...todo, isHidden: false })))
  );

  return newState;
};

const addTodo = (state: Todo[], payload: Todo): Todo[] => [...state, payload];

const deleteTodo = (state: Todo[], payload: string): Todo[] =>
  state.filter(({ id }) => id !== payload);

const completeTodo = (state: Todo[], payload: string): Todo[] =>
  state.map(todo =>
    todo.id === payload ? { ...todo, completed: !todo.completed } : todo
  );

const deleteCompletedTodos = (state: Todo[]): Todo[] =>
  state.filter(todo => !todo.completed);

const reorderTodos = (state: Todo[], payload: ReorderPayload): Todo[] =>
  reorder(state, payload.startIndex, payload.endIndex);

const filterAll = (state: Todo[]): Todo[] =>
  state.map(todo => ({ ...todo, isHidden: false }));

const filterActive = (state: Todo[]): Todo[] =>
  state.map(todo =>
    todo.completed ? { ...todo, isHidden: true } : { ...todo, isHidden: false }
  );

const filterCompleted = (state: Todo[]): Todo[] =>
  state.map(todo =>
    !todo.completed ? { ...todo, isHidden: true } : { ...todo, isHidden: false }
  );

export const reducerTodo = (state: Todo[], action: TodoAction): Todo[] => {
  if (action.type === TYPE_ACTION.ADD_TODO)
    return saveInLocalStorage(addTodo(state, action.payload));

  if (action.type === TYPE_ACTION.DELETE_TODO)
    return saveInLocalStorage(deleteTodo(state, action.payload));

  if (action.type === TYPE_ACTION.COMPLETE_TODO)
    return saveInLocalStorage(completeTodo(state, action.payload));

  if (action.type === TYPE_ACTION.DELETE_COMPLETED_TODOS)
    return saveInLocalStorage(deleteCompletedTodos(state));

  if (action.type === TYPE_ACTION.REORDER_TODOS)
    return saveInLocalStorage(reorderTodos(state, action.payload));

  if (action.type === TYPE_ACTION.FILTER_ALL) return filterAll(state);

  if (action.type === TYPE_ACTION.FILTER_ACTIVE) return filterActive(state);

  if (action.type === TYPE_ACTION.FILTER_COMPLETED)
    return filterCompleted(state);

  return state;
};
