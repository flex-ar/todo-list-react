import { useContext } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Circle, Input } from '../../styled-components/todo/Input';
import { TodoContainer } from '../../styled-components/todo/Todo';
import TodoContext from '../../store/Todo/TodoContext';
import { addTodo } from '../../store/Todo/actions';

const Container = styled(TodoContainer)`
  box-shadow: ${props => props.theme.shadow};
`;

export const TodoInput = () => {
  const { dispatch } = useContext(TodoContext);

  const handlerAddTodo = (target: HTMLInputElement) => {
    const text = target.value.trim();

    if (text.length > 3) {
      dispatch(
        addTodo({
          id: uuidv4(),
          text: text,
          completed: false,
        })
      );
      target.value = '';
    }
  };

  return (
    <Container>
      <Circle />
      <Input
        placeholder="Create a new todo..."
        onKeyUp={e =>
          e.key === 'Enter' && handlerAddTodo(e.target as HTMLInputElement)
        }
      />
    </Container>
  );
};
