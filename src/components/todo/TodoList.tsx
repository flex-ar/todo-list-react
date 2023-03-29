import { useContext } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';

import TodoContext from '../../store/TodoContext';
import { reorderTodos } from '../../store/actions';

import { DragAndDrop } from './DragAndDrop';
import { TodoFooter } from './TodoFooter';
import { TodoItem } from './TodoItem';

const Container = styled.ul`
  background-color: ${props => props.theme.colors.bgTodo};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow};
`;

export const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    if (source.index === destination.index) return;

    dispatch(
      reorderTodos({
        startIndex: source.index,
        endIndex: destination.index,
      })
    );
  };

  return (
    <Container>
      <DragAndDrop
        Component={TodoItem}
        id="TODOLIST"
        list={todos}
        onDragEnd={onDragEnd}
      />
      <TodoFooter />
    </Container>
  );
};
