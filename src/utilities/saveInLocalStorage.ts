import { Todo } from '../models';

export const saveInLocalStorege = (todoList: Todo[]) => {
  localStorage.setItem(
    'todoList',
    JSON.stringify(todoList.map(todo => ({ ...todo, isHidden: false })))
  );
};
