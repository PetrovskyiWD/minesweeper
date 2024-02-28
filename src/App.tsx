import Scoreboard from './containers/Scoreboard/Scoreboard.container';
import Top from './containers/Top/Top.container';

export default function App(): JSX.Element {
  return (
    <>
      <Top
        title="Minesweeper"
        feature="Flag"
        firstAction="Ctrl"
        secondAction="Click"
      />
      <Scoreboard count="010" levels={['Easy', 'Medium', 'Hard']} time="00" />
    </>
  );
}
