import styled from '@emotion/styled';
import { type FC } from 'react';

interface CounterProps {
  children: string;
}

const Counter: FC<CounterProps> = ({ children }) => <Frame>{children}</Frame>;

const Frame = styled.span`
  padding: 0.2em 0.3em;
  background-color: #ededed;
  color: blue;
  border: 1px solid #ccc;
`;

export default Counter;
