import { Todo } from '../models';

const defaultState: Todo[] = [
  {
    id: 1,
    textContent: 'Complete online JavaScript course',
    completed: true,
    isHidden: false,
  },
  {
    id: 2,
    textContent: 'Jog around the park 3x',
    completed: false,
    isHidden: false,
  },
  {
    id: 3,
    textContent: '10 minutes meditation',
    completed: false,
    isHidden: false,
  },
  {
    id: 4,
    textContent: 'Read for 1 hour',
    completed: false,
    isHidden: false,
  },
  {
    id: 5,
    textContent: 'Pick up Grocerries',
    completed: false,
    isHidden: false,
  },
  {
    id: 6,
    textContent: 'Complete Todo App on Fronted Mentor',
    completed: false,
    isHidden: false,
  },
];

export const initialState = (): Todo[] => {
  const todoList =
    JSON.parse(localStorage.getItem('todoList') ?? 'null') ?? defaultState;

  return todoList;
};
