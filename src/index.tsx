import { createRoot } from 'react-dom/client';

import App from './App';

import '../styles/index.scss';

const root = createRoot(document.getElementById('root') as Element);

root.render(<App />);
