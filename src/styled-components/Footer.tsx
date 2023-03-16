import styled, { DefaultTheme } from 'styled-components';

export const TodoFooter = styled.div`
  color: ${({ theme }) => theme.colors.smallText};
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  width: 100%;
`;

export const FiltersContainer = styled.div`
  column-gap: 16px;
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }
`;

// export const FiltersContainerMobile = styled.div`
//   colomn-gap: 16px;
//   display: none;
//
//   @media (max-width: 500px) {
//     display: flex;
//   }
// `;

interface FooterTextProps {
  selected?: boolean;
  theme: DefaultTheme;
}

export const FooterText = styled.p`
  color: ${({ selected }: FooterTextProps) => selected && 'var(--BrightBlue)'};
  cursor: pointer;
  &:hover {
    color: ${({ selected, theme }: FooterTextProps) =>
      !selected && theme.colors.text};
  }
`;
