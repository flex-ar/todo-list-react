import { Todo } from '../../models/Todo';

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

export interface TodoAction {
  type: TYPE_ACTION;
  payload?: Todo | Todo[] | string;
}
