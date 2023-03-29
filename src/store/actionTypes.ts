import type { Todo } from '../models/Todo';

export const enum TYPE_ACTION {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS',
  REORDER_TODOS = 'REORDER_TODOS',
  FILTER_ALL = 'FILTER_ALL',
  FILTER_ACTIVE = 'FILTER_ACTIVE',
  FILTER_COMPLETED = 'FILTER_COMPLETED',
}

export type ReorderPayload = { startIndex: number; endIndex: number };

export type TodoAction =
  | { type: TYPE_ACTION.ADD_TODO; payload: Todo }
  | { type: TYPE_ACTION.DELETE_TODO; payload: string }
  | { type: TYPE_ACTION.COMPLETE_TODO; payload: string }
  | { type: TYPE_ACTION.DELETE_COMPLETED_TODOS }
  | { type: TYPE_ACTION.REORDER_TODOS; payload: ReorderPayload }
  | { type: TYPE_ACTION.FILTER_ALL }
  | { type: TYPE_ACTION.FILTER_ACTIVE }
  | { type: TYPE_ACTION.FILTER_COMPLETED };
