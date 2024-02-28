import { type FC } from 'react';
import styled from '@emotion/styled';

import Counter from '../../components/Counter/Counter.component';
import Level from '../../components/Level/Level.component';
import Reset from '../../components/Reset/Reset.component';

interface ScoreboardProps {
  count: string;
  levels: string[];
  time: string;
  onReset?: () => void;
}

const Scoreboard: FC<ScoreboardProps> = ({ count, levels, time, onReset }) => {
  return (
    <Container>
      <Counter>{count}</Counter>
      <Level>{levels}</Level>
      <Reset handleReset={onReset} />
      <Counter>{time}</Counter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Scoreboard;
