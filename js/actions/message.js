/**
 *
 */
export const SEND = 'message/SEND';
export const SUCCESS = 'message/SUCCESS';
export const FAIL = 'message/FAIL';
export const RESET = 'message/RESET';
export const FETCH_RANDOM = 'message/FETCH_RANDOM';
export const CURRENT = 'message/CURRENT';
export const PLAY = 'message/PLAY';



/**
 *
 */
export const send = (blob) => ({
	type: SEND,
	payload: {
		blob
	}
});

/**
 *
 */
export const success = () => ({
	type: SUCCESS,
	payload: {}
});

/**
 *
 */
export const fail = () => ({
	type: FAIL,
	payload: {}
});

/**
 *
 */
export const reset = () => ({
	type: RESET,
	payload: {}
});

/**
 *
 */
export const fetchRandom = () => ({
	type: FETCH_RANDOM,
	payload: {}
});

/**
 *
 */
export const current = (filepath) => ({
	type: CURRENT,
	payload: {
		filepath
	}
});

/**
 *
 */
export const play = () => ({
	type: PLAY,
	payload: {}
});
