import Http from './fetch';

const API_URL = `http://www.omdbapi.com/`;
export const MovieGet = (query) => {
	return Http(API_URL, {
		params: {
			apikey: '922db138',
			t: query,
		},
	});
};
