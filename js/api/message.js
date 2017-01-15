import {postJson, getJson} from './fetch';



/**
 *
 */
export const postMessage = (blob) => {
	return new Promise((resolve, reject) => {
		var reader = new FileReader();
		reader.onload = function(event) {
			const file = {
				fname: `${getUniqName()}.wav`,
				data: event.target.result
			};
			postJson('/laisserunmessage', file).then(response => {
				resolve(response);
			});
		};
		reader.readAsDataURL(blob);
	});
};

export const getRandomMessage = () => {
	return getJson('/unmessage').then(({file}) => {
		return file;
	});
};

/*
 *
 */
const getUniqName = () => {
	const date = new Date();
	return date.getTime();
};
