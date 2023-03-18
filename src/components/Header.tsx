import styled from 'styled-components';

import { HStack } from '../styled-components/GlobalComponents';
import { ButtonToggleTheme, Headig } from '../styled-components/Header';

const HeaderStyle = styled(HStack)`
  align-items: baseline;
  justify-content: space-between;
`;

interface Props {
  toggleTheme: () => void;
}
export const Header = ({ toggleTheme }: Props) => {
  return (
    <div>
      <HeaderStyle>
        <Headig>TODO</Headig>
        <ButtonToggleTheme onClick={toggleTheme} />
      </HeaderStyle>
    </div>
  );
};
