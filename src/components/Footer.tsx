import { Dispatch } from 'react';

import { useToggleSelected } from '../hooks';
import { Action, Todo } from '../models';
import {
  FiltersContainer,
  FooterText,
  TodoContainer,
  TodoFooter,
} from '../styled-components';
import { TYPE_ACTION } from '../utilities';

interface FooterProps {
  todoList: Todo[];
  dispatch: Dispatch<Action>;
}

export const Footer = ({ todoList, dispatch }: FooterProps) => {
  const { isSelected, toggleSelected } = useToggleSelected({
    All: true,
    Active: false,
    Completed: false,
  });

  return (
    <TodoContainer>
      <TodoFooter>
        <p>
          {todoList.reduce((acc, todo) => (!todo.isHidden ? acc + 1 : acc), 0) +
            ' items left'}
        </p>
        <FiltersContainer>
          <FooterText
            selected={isSelected.All}
            onClick={e => {
              dispatch({
                type: TYPE_ACTION.FILTER_ALL,
              });
              toggleSelected(e);
            }}
          >
            All
          </FooterText>
          <FooterText
            selected={isSelected.Active}
            onClick={e => {
              dispatch({ type: TYPE_ACTION.FILTER_ACTIVE });
              toggleSelected(e);
            }}
          >
            Active
          </FooterText>
          <FooterText
            selected={isSelected.Completed}
            onClick={e => {
              dispatch({ type: TYPE_ACTION.FILTER_COMPLETED });
              toggleSelected(e);
            }}
          >
            Completed
          </FooterText>
        </FiltersContainer>
        <FooterText
          onClick={() =>
            dispatch({
              type: TYPE_ACTION.CLEAR_COMPLETED_TODOS,
              completed: isSelected.Completed,
            })
          }
        >
          Clear Completed
        </FooterText>
      </TodoFooter>
    </TodoContainer>
  );
};
