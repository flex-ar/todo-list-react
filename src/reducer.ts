import { TYPE_ACTION } from './utilities/enum';
import { Action, Todo } from './models/interfaces';
import { initialState, saveInLocalStorege } from './utilities';

export const reducer = (
  state: Todo[] = initialState(),
  { type, payload, completed }: Action
) => {
  const REDUCER = {
    [TYPE_ACTION.ADD_TODO]: (): Todo[] => {
      const newState = [...state, payload as Todo];

      saveInLocalStorege(newState);

      return newState;
    },

    [TYPE_ACTION.TODO_COMPLETED]: (): Todo[] => {
      const newState = state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );

      saveInLocalStorege(newState);

      return newState;
    },

    [TYPE_ACTION.DELETE_TODO]: (): Todo[] => {
      const newState = state.filter(todo => todo.id !== payload);

      saveInLocalStorege(newState);

      return newState;
    },

    [TYPE_ACTION.CLEAR_COMPLETED_TODOS]: (): Todo[] => {
      const newState = initialState().filter(todo => !todo.completed);

      saveInLocalStorege(newState);

      return completed ? [] : newState;
    },

    [TYPE_ACTION.REORDER_TODOS]: (): Todo[] => {
      const newState = payload as Todo[];

      saveInLocalStorege(newState);

      return newState;
    },

    [TYPE_ACTION.FILTER_ALL]: (): Todo[] => initialState(),

    [TYPE_ACTION.FILTER_ACTIVE]: (): Todo[] =>
      state.map(todo =>
        todo.completed
          ? { ...todo, isHidden: true }
          : { ...todo, isHidden: false }
      ),

    [TYPE_ACTION.FILTER_COMPLETED]: (): Todo[] =>
      state.map(todo =>
        !todo.completed
          ? { ...todo, isHidden: true }
          : { ...todo, isHidden: false }
      ),
  };

  return REDUCER[type]();
};
