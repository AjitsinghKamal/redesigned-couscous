import { css } from '@emotion/react';
import { MovieSearch } from 'components';
import useMovieSearch from 'hooks/useMovieSearch';

function HomePage(props) {
	const {
		inputValue,
		setInputValue,
		shouldSearchForTitle,
		result,
		isLoading,
		errors,
	} = useMovieSearch();
	return (
		<div
			{...props}
			css={css`
				background: var(--white400);
			`}
		>
			<MovieSearch
				value={inputValue}
				setValue={setInputValue}
				onSubmit={shouldSearchForTitle}
			/>
			<section>
				{isLoading ? (
					<small>Getting Results...</small>
				) : errors ? (
					<small>{errors.Error}</small>
				) : result ? (
					<div>
						<h1>{result.Title}</h1>
						<p>{result.Released}</p>
						<p>{result.Plot}</p>
						<div>
							<p>Genre</p>
							<ul>
								{result.Genre.split(',').map((genre) => (
									<li>{genre}</li>
								))}
							</ul>
						</div>
					</div>
				) : null}
			</section>
		</div>
	);
}

export default HomePage;
