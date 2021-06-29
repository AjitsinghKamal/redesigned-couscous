import { css } from '@emotion/react';

function AppShellLayout({ children }) {
	return (
		<main
			css={css`
				height: 100vh;
				width: 100vw;
				overflow-x: hidden;
				overflow-y: auto;
			`}
		>
			{children}
		</main>
	);
}

export default AppShellLayout;
