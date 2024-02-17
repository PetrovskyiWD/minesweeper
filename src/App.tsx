import Header from './components/Header/Header.component';
import Legend from './components/Legend/Legend.component';

export default function App(): JSX.Element {
  return (
    <div>
      <Header title="Minesweeper" />
      <Legend feature="Flag" firstAction="Ctrl" secondAction="Click" />
    </div>
  );
}
