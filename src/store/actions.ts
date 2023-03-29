import type { ReorderPayload, TodoAction } from './actionTypes';
import type { Todo } from '../models/Todo';

import { TYPE_ACTION } from './actionTypes';

export const addTodo = (todo: Todo): TodoAction => ({
  type: TYPE_ACTION.ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todoId: string): TodoAction => ({
  type: TYPE_ACTION.DELETE_TODO,
  payload: todoId,
});

export const completeTodo = (todoId: string): TodoAction => ({
  type: TYPE_ACTION.COMPLETE_TODO,
  payload: todoId,
});

export const deleteCompletedTodos = (): TodoAction => ({
  type: TYPE_ACTION.DELETE_COMPLETED_TODOS,
});

export const reorderTodos = (payload: ReorderPayload): TodoAction => ({
  type: TYPE_ACTION.REORDER_TODOS,
  payload,
});

export const filterAll = (): TodoAction => ({
  type: TYPE_ACTION.FILTER_ALL,
});

export const filterActive = (): TodoAction => ({
  type: TYPE_ACTION.FILTER_ACTIVE,
});

export const filterCompleted = (): TodoAction => ({
  type: TYPE_ACTION.FILTER_COMPLETED,
});
