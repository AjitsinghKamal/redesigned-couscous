import { useState, useMemo, useCallback } from 'react';
import { MovieGet } from '../apis/movie';

function useMovieSearch() {
	const [inputValue, setInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const [result, setResult] = useState(null);

	const requestMovie = async () => {
		try {
			setErrors(null);
			setIsLoading(true);
			setResult(null);
			const data = await MovieGet(inputValue);
			if (data && data.Error) {
				setErrors(data);
			} else {
				setResult(data);
			}
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	const shouldSearchForTitle = useCallback(
		(e) => {
			e.preventDefault();
			requestMovie(e);
		},
		[inputValue]
	);

	return useMemo(
		() => ({
			inputValue,
			setInputValue,
			shouldSearchForTitle,
			result,
			errors,
			isLoading,
		}),
		[
			inputValue,
			setInputValue,
			shouldSearchForTitle,
			result,
			errors,
			isLoading,
		]
	);
}

export default useMovieSearch;
