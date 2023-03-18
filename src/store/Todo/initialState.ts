import { Todo } from '../../models/Todo';

const defaultState: Todo[] = [
  {
    id: '1',
    text: 'Complete online JavaScript course',
    completed: true,
    isHidden: false,
  },
  {
    id: '2',
    text: 'Jog around the park 3x',
    completed: false,
    isHidden: false,
  },
  {
    id: '3',
    text: '10 minutes meditation',
    completed: false,
    isHidden: false,
  },
  {
    id: '4',
    text: 'Read for 1 hour',
    completed: false,
    isHidden: false,
  },
  {
    id: '5',
    text: 'Pick up Grocerries',
    completed: false,
    isHidden: false,
  },
  {
    id: '6',
    text: 'Complete Todo App on Fronted Mentor',
    completed: false,
    isHidden: false,
  },
];

export const initialState = (): Todo[] => {
  const todos = localStorage.getItem('todoList');

  return todos !== null ? JSON.parse(todos) : defaultState;
};
