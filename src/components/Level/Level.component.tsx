import styled from '@emotion/styled';
import { type FC } from 'react';

interface LevelProps {
  children: string[];
}

const Level: FC<LevelProps> = ({ children }) => (
  <Select>
    {children.map((opt) => (
      <Option key={opt}>{opt}</Option>
    ))}
  </Select>
);

const Select = styled.select`
  padding: 0.2em 0.3em;
  background-color: #ededed;
  color: blue;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const Option = styled.option`
  color: blue;
`;

export default Level;
