import styled from 'styled-components';

export const BgImage = styled.div`
  background-image: url(${({ theme }) => theme.bgImg});
  background-position: 50%;
  background-size: cover;
  left: 0;
  min-height: 300px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */ // descomentar
  margin: 80px auto; // 80px o 65px
  max-width: 540px;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  color: var(--VeryLightGrayishBlue);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 14px;
`;

export const ThemeToggleIcon = styled.div`
  content: url(${({ theme }) => theme.icon});
  cursor: pointer;
  height: 28px;
  width: 28px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
`;
