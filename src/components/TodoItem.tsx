import CheckIcon from '../assets/icons/CheckIcon';
import CrossIcon from '../assets/icons/CrossIcon';
import { TodoItemProps } from '../models';
import {
  Circle,
  DeleteButton,
  Divider,
  TodoContainer,
  TodoText,
} from '../styled-components';
import { TYPE_ACTION } from '../utilities';

export const TodoItem = ({
  id,
  textContent,
  completed,
  dispatch,
  isHidden,
}: TodoItemProps) => {
  return (
    <div
      style={{
        display: `${isHidden ? 'none' : 'block'}`,
      }}
    >
      <TodoContainer completed={completed}>
        <Circle
          className="circle"
          onClick={() =>
            dispatch({
              type: TYPE_ACTION.TODO_COMPLETED,
              payload: id,
            })
          }
        >
          {completed && <CheckIcon />}
        </Circle>
        <TodoText
          className="todoText"
          onClick={() =>
            dispatch({
              type: TYPE_ACTION.TODO_COMPLETED,
              payload: id,
            })
          }
        >
          {textContent}
        </TodoText>
        <DeleteButton
          className="delete"
          onClick={() =>
            dispatch({
              type: TYPE_ACTION.DELETE_TODO,
              payload: id,
            })
          }
        >
          <CrossIcon />
        </DeleteButton>
      </TodoContainer>
      <Divider />
    </div>
  );
};
