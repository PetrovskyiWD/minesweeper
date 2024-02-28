import { type FC } from 'react';
import styled from '@emotion/styled';

import { type Cell as CellType } from '@/helpers/field';

interface CellProps {
  children: CellType;
}

const Cell: FC<CellProps> = ({ children }) => {
  switch (children) {
    case 0:
      return <Empty />;
    case 10:
      return <Default />;
    default:
      return <Default />;
  }
};

const Default = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1d1d1;
  border: 1px solid transparent;
  border-color: #eee #bbb #bbb #eee;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

const Empty = styled(Default)`
  background-color: #f2f2f2;
  border-top-color: #ddd;
  border-left-color: #ddd;

  &:hover {
    filter: brightness(1);
  }
`;

export default Cell;
