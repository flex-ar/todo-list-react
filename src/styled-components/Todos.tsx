import styled, { css } from 'styled-components';

export const TodosContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTodo};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-top: 22px; // delete
`;

interface TodoContainerProps {
  completed?: boolean;
}

export const TodoContainer = styled.div`
  align-items: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  padding: 18px;
  ${({ completed }: TodoContainerProps) =>
    completed &&
    css`
      .todoText {
        color: ${({ theme }) => theme.colors.textChecked};
        text-decoration: line-through;
      }
      .circle {
        background-image: var(--CheckBackground);
      }
    `}
  &:hover {
    .circle {
      background-clip: content-box, border-box;
      border-color: transparent;
      ${({ completed }: TodoContainerProps) =>
        completed
          ? css`
              background-image: var(--CheckBackground), var(--CheckBorder);
            `
          : css`
              background-image: linear-gradient(
                  ${({ theme }) => theme.colors.bgTodo},
                  ${({ theme }) => theme.colors.bgTodo}
                ),
                var(--CheckBorder);
            `}
    }
    .delete {
      visibility: visible;
    }
  }
`;

export const TodoText = styled.p`
  cursor: pointer;
  font-size: 18px;
  margin-left: 25px;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: auto;
`;

export const InputContainer = styled(TodoContainer)`
  background-color: ${({ theme }) => theme.colors.bgTodo};
  margin-top: 24px; // delete
`;

export const FiltersContainerMobile = styled(InputContainer)`
  color: ${({ theme }) => theme.colors.smallText};
  display: none;
  font-size: 18px;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

interface CircleProps {
  noBorder?: boolean;
}

export const Circle = styled.div`
  align-items: center;
  background-origin: border-box;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  display: flex;
  height: 26px;
  justify-content: center;
  min-width: 26px;
  ${({ noBorder }: CircleProps) =>
    !noBorder &&
    css`
      cursor: pointer;
    `}
`;

export const InputTodo = styled.input`
  background-color: transparent;
  border: none;
  caret-color: var(--BrightBlue);
  color: inherit;
  font-size: 18px;
  font-weight: 400;
  outline: none;
  width: 100%;
`;
