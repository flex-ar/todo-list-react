import styled from 'styled-components';

import { VStack } from '../styled-components/GlobalComponents';

import { Header } from './Header';
import { TodoApp } from './todo/TodoApp';

const ContainerStyle = styled(VStack)`
  gap: 1.5rem;
  margin: 3.125rem auto;
  max-width: 33.75rem;
`;

interface Props {
  toggleTheme: () => void;
}
export const Container = ({ toggleTheme }: Props) => {
  return (
    <ContainerStyle>
      <Header toggleTheme={toggleTheme} />
      <TodoApp />
    </ContainerStyle>
  );
};
