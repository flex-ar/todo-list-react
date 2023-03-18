import styled from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  border: none;
  caret-color: var(--primary);
  color: ${props => props.theme.colors.text};
  font-size: 1.125rem;
  outline: none;
  width: 100%;
`;

export const Circle = styled.div`
  align-items: center;
  background-origin: border-box;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  display: flex;
  height: 1.625rem;
  justify-content: center;
  min-width: 1.625rem;
`;
