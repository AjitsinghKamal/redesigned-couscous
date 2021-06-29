import qs from 'qs';
export function HttpError(statusCode, error) {
	this.statusCode = statusCode;
	this.error = error;
}

async function Http(
	url,
	config = {
		method: 'GET',
		headers: {},
	}
) {
	const { method, params, headers, paramsEncoder, body, ...rest } = config;

	const fetchOptions = {
		method: method,
		headers: {
			...headers,
		},
		...rest,
	};

	if (body) {
		fetchOptions.body = JSON.stringify(body);
	}
	const requestParams = params
		? `?${qs.stringify(params, paramsEncoder)}`
		: '';

	const requestData = await fetch(`${url}${requestParams}`, fetchOptions);

	// fetch resolves after response headers are received
	// so, response can also be of erroneous nature
	const response = await requestData.json();

	if (requestData.ok) {
		// forward to thenable only if fetch resolved with 2XX
		return response;
	} else {
		// in case of error, we throw a custom error so that
		// it can be picked up by catch block easily
		throw new HttpError(requestData.status, response);
	}
}

export default Http;
