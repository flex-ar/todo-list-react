import styled from 'styled-components';

import { Button } from './GlobalComponents';

export const Headig = styled.h1`
  color: var(--title);
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.875rem;
`;

export const ButtonToggleTheme = styled.div`
  content: url(${props => props.theme.icon});
  cursor: pointer;
  height: 1.75rem;
  width: 1.75rem;
`;

export const Logout = styled(Button)`
  background-color: ${props => props.theme.colors.bgTodo};
  box-shadow: ${props => props.theme.shadow};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 0.75rem;

  &:hover {
    background-color: var(--primary);
    color: var(--title);
  }
`;
