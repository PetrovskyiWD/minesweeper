import styled from '@emotion/styled';

export interface HeaderProps {
  children: React.ReactNode;
}

const Header = styled.h1<HeaderProps>`
  font-size: 2em;
`;

export default Header;
