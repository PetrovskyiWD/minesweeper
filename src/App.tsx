import Top from './containers/Top/Top.container';

export default function App(): JSX.Element {
  return (
    <div>
      <Top
        title="Minesweeper"
        feature="Flag"
        firstAction="Ctrl"
        secondAction="Click"
      />
    </div>
  );
}
