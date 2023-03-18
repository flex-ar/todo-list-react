import styled from 'styled-components';

import { HStack } from './GlobalComponents';

export const FiltersContainer = styled(HStack)`
  font-weight: bold;
  gap: 1rem;
`;

export const FiltersDesktop = styled.div`
  @media (max-width: 599px) {
    display: none;
    visibility: hidden;
  }
`;

export const FiltersMobile = styled.div`
  @media (min-width: 600px) {
    display: none;
    visibility: hidden;
  }
`;
