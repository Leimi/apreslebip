/**
 *
 */
const parseJson = (response) =>
	response.json();

/**
 *
 */
export const getJson = (url, options = {}) =>
	fetch(url, {
		credentials: 'include',
		...options
	}).then(parseJson);

/**
 *
 */
export const postJson = (url, data, options = {}) =>
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		credentials: 'include',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		...options
	}).then(parseJson);
