import type { Todo } from '../../models/Todo';

import { useContext } from 'react';
import styled from 'styled-components';

import CheckIcon from '../../assets/icons/CheckIcon';
import { Divider } from '../../styled-components/GlobalComponents';
import TodoContext from '../../store/TodoContext';
import { completeTodo, deleteTodo } from '../../store/actions';

import {
  Check,
  ContainerItem,
  Text,
  DeleteButton,
} from './styled-components/Todo';

const Item = styled.li`
  list-style-type: none;
`;

export const TodoItem = ({ text, id, completed, isHidden }: Todo) => {
  const { dispatch } = useContext(TodoContext);

  if (isHidden) return <div />;

  const handlerCompleteTodo = () => dispatch(completeTodo(id));

  const handlerDeleteTodo = () => dispatch(deleteTodo(id));

  return (
    <Item>
      <ContainerItem completed={completed}>
        <Check
          className="check"
          completed={completed}
          onClick={handlerCompleteTodo}
        >
          {completed && <CheckIcon />}
        </Check>
        <Text className="isCompleted" onClick={handlerCompleteTodo}>
          {text}
        </Text>
        <DeleteButton onClick={handlerDeleteTodo} />
      </ContainerItem>
      <Divider />
    </Item>
  );
};
