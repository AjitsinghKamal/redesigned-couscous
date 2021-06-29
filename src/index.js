import { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles/reset.css';
import './styles/index.scss';

import AppRouter from 'pages/Router';

render(
	<StrictMode>
		<AppRouter />
	</StrictMode>,
	document.getElementById('root')
);
