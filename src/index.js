import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.scss';

import AppRouter from 'pages/Router';

ReactDOM.render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
	document.getElementById('root')
);
