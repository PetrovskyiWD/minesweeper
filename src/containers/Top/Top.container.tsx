import { type FC } from 'react';

import Header, {
  type HeaderProps,
} from '../../components/Header/Header.component';
import Legend, {
  type LegendProps,
} from '../../components/Legend/Legend.component';
import styled from '@emotion/styled';

export type TopContainerType = HeaderProps & LegendProps;

const Top: FC<TopContainerType> = ({ title, ...legendProps }) => (
  <Container>
    <Header title={title} />
    <Legend {...legendProps} />
  </Container>
);

const Container = styled.div`
  text-align: center;
`;

export default Top;
