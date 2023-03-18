import { Todo } from '../../models/Todo';

import { TodoAction, TYPE_ACTION } from './actionTypes';

const saveInLocalStorage =
  (modifier: (state: Todo[], payload: any) => Todo[]) =>
  (state: Todo[], payload: any): Todo[] => {
    const newState = modifier(state, payload);

    localStorage.setItem(
      'todoList',
      JSON.stringify(newState.map(todo => ({ ...todo, isHidden: false })))
    );

    return newState;
  };

const addTodo = (state: Todo[], payload: Todo) => [...state, payload];

const deleteTodo = (state: Todo[], payload: string) =>
  state.filter(({ id }) => id !== payload);

const completeTodo = (state: Todo[], payload: string) =>
  state.map(todo =>
    todo.id === payload ? { ...todo, completed: !todo.completed } : todo
  );

const deleteCompletedTodos = (state: Todo[]) =>
  state.filter(todo => !todo.completed);

const reorderTodos = (_: any, payload: Todo[]) => [...payload];

const filterAll = (state: Todo[]) =>
  state.map(todo => ({ ...todo, isHidden: false }));

const filterActive = (state: Todo[]) =>
  state.map(todo =>
    todo.completed ? { ...todo, isHidden: true } : { ...todo, isHidden: false }
  );

const filterCompleted = (state: Todo[]) =>
  state.map(todo =>
    !todo.completed ? { ...todo, isHidden: true } : { ...todo, isHidden: false }
  );

export const reducerTodo = (
  state: Todo[],
  { type, payload }: TodoAction
): Todo[] => {
  const REDUCER = {
    [TYPE_ACTION.ADD_TODO]: saveInLocalStorage(addTodo),
    [TYPE_ACTION.DELETE_TODO]: saveInLocalStorage(deleteTodo),
    [TYPE_ACTION.COMPLETE_TODO]: saveInLocalStorage(completeTodo),
    [TYPE_ACTION.DELETE_COMPLETED_TODOS]:
      saveInLocalStorage(deleteCompletedTodos),
    [TYPE_ACTION.REORDER_TODOS]: saveInLocalStorage(reorderTodos),
    [TYPE_ACTION.FILTER_ALL]: filterAll,
    [TYPE_ACTION.FILTER_ACTIVE]: filterActive,
    [TYPE_ACTION.FILTER_COMPLETED]: filterCompleted,
  };

  return REDUCER[type](state, payload as any);
};
