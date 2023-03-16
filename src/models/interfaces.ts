import { TYPE_ACTION } from '../utilities';

export interface Todo {
  id: number;
  textContent: string;
  completed: boolean;
  isHidden: boolean;
}

export interface Action {
  type: TYPE_ACTION;
  payload?: Todo | Todo[] | number;
  completed?: boolean;
}

export interface TodoItemProps extends Todo {
  dispatch: (value: Action) => void;
}
