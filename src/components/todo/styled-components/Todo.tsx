import styled, { css, DefaultTheme } from 'styled-components';

import CrossIcon from '../../../assets/icons/CrossIcon';
import { Circle } from '../../../styled-components/todo/Input';
import { TodoContainer } from '../../../styled-components/todo/Todo';

export const Text = styled.p`
  cursor: pointer;
`;

const DeleteBtnStyles = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: auto;
  visibility: visibility;
  @media (min-width: 769px) {
    visibility: hidden;
  }
`;

export const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <DeleteBtnStyles className="deleteBtn" onClick={onClick}>
      <CrossIcon />
    </DeleteBtnStyles>
  );
};

interface Completed {
  theme: DefaultTheme;
  completed?: boolean;
}

export const Check = styled(Circle)`
  background-image: ${(props: Completed) =>
    props.completed && 'var(--checkBackground)'};
  cursor: pointer;
`;

const styleCompleted = css`
  background-image: var(--checkBackground), var(--checkBorder);
`;
const styleNotCompleted = css`
  background-image: linear-gradient(
      ${props => props.theme.colors.bgTodo},
      ${props => props.theme.colors.bgTodo}
    ),
    var(--checkBorder);
`;
const completed = css`
  color: ${props => props.theme.colors.textChecked};
  text-decoration: line-through;
`;

export const ContainerItem = styled(TodoContainer)`
  ${(props: Completed) => props.completed && completed}
  &:hover {
    .check {
      background-clip: content-box, border-box;
      border-color: transparent;
      ${(props: Completed) =>
        props.completed ? styleCompleted : styleNotCompleted}
    }
    .deleteBtn {
      visibility: visible;
    }
  }
`;
