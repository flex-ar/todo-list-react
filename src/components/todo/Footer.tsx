import styled from 'styled-components';

import { FiltersMobile } from '../../styled-components/Footer';
import { Box } from '../../styled-components/GlobalComponents';

import { Filters } from './Filters';

const FilterBox = styled(Box)`
  color: ${props => props.theme.colors.smallText};
  justify-content: center;
`;

const Text = styled.p`
  color: ${props => props.theme.colors.smallText};
  font-size: 1rem;
  margin: 1.875rem auto 0;
`;

export const Footer = () => {
  return (
    <>
      <FiltersMobile>
        <FilterBox>
          <Filters />
        </FilterBox>
      </FiltersMobile>
      <Text>Drag and drop to reorder list</Text>
    </>
  );
};
