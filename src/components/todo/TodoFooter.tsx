import { useContext } from 'react';
import styled from 'styled-components';

import { deleteCompletedTodos } from '../../store/actions';
import TodoContext from '../../store/TodoContext';
import { FiltersDesktop } from '../../styled-components/Footer';
import { Box } from '../../styled-components/GlobalComponents';

import { Filters } from './Filters';

const Container = styled(Box)`
  color: ${props => props.theme.colors.smallText};
  font-size: 1rem;
  justify-content: space-between;
  @media (max-width: 320px) {
    flex-direction: column;
    row-gap: 0.625rem;
  }
`;

const Text = styled.p`
  min-width: 7.25rem;
`;

const ClearButton = styled(Text)`
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

export const TodoFooter = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const handlerClearCompletedTodo = () => dispatch(deleteCompletedTodos());

  return (
    <Container>
      <Text>{todos.filter(todo => !todo.completed).length} items left</Text>
      <FiltersDesktop>
        <Filters />
      </FiltersDesktop>
      <ClearButton onClick={handlerClearCompletedTodo}>
        Clear Completed
      </ClearButton>
    </Container>
  );
};
