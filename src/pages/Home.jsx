import { css } from '@emotion/react';

function HomePage(props) {
	return (
		<div
			{...props}
			css={css`
				background: var(--white400);
			`}
		>
			Hello
		</div>
	);
}

export default HomePage;
