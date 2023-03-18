import styled from 'styled-components';

export const BgImage = styled.div`
  background-position: 50%;
  background-size: cover;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
  @media (min-width: 376px) {
    background-image: url(${props => props.theme.img.bgDesktop});
    min-height: 300px;
  }
  @media (max-width: 375px) {
    background-image: url(${props => props.theme.img.bgMobile});
    min-height: 200px;
  }
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HStack = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Box = styled(HStack)`
  background-color: ${props => props.theme.colors.bgTodo};
  border-radius: 0.5rem;
  padding: 1.125rem 1.375rem;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  font-size: 1.25rem;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  width: 100%;
`;
