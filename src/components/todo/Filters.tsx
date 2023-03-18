import { useContext, useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';

import {
  filterActive,
  filterAll,
  filterCompleted,
} from '../../store/Todo/actions';
import TodoContext from '../../store/Todo/TodoContext';
import { FiltersContainer } from '../../styled-components/Footer';

interface Props {
  selected?: boolean;
  theme: DefaultTheme;
}

const Text = styled.p`
  color: ${(props: Props) => props.selected && 'var(--primary)'};
  cursor: pointer;
  &:hover {
    color: ${(props: Props) => !props.selected && props.theme.colors.text};
  }
`;

interface selectedType {
  [x: string]: boolean;
}
export const Filters = () => {
  const { dispatch } = useContext(TodoContext);
  const [selected, setSelected] = useState<selectedType>({
    All: true,
    Active: false,
    Completed: false,
  });

  const toggleSelected = ({ textContent }: HTMLParagraphElement) =>
    setSelected(state =>
      Object.entries(state).reduce(
        (acc, [key]) =>
          key === textContent
            ? { ...acc, [key]: true }
            : { ...acc, [key]: false },
        {}
      )
    );

  return (
    <FiltersContainer>
      <Text
        selected={selected.All}
        onClick={e => {
          dispatch(filterAll());
          toggleSelected(e.target as HTMLParagraphElement);
        }}
      >
        All
      </Text>
      <Text
        selected={selected.Active}
        onClick={e => {
          dispatch(filterActive());
          toggleSelected(e.target as HTMLParagraphElement);
        }}
      >
        Active
      </Text>
      <Text
        selected={selected.Completed}
        onClick={e => {
          dispatch(filterCompleted());
          toggleSelected(e.target as HTMLParagraphElement);
        }}
      >
        Completed
      </Text>
    </FiltersContainer>
  );
};
