import styled from '@emotion/styled';
import { type FC } from 'react';

export interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => <Title>{title}</Title>;

const Title = styled.h1`
  font-size: 2em;
`;

export default Header;
