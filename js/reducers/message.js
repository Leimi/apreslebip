import {CURRENT, PLAY, RESET, SEND, SUCCESS, FAIL} from '../actions/message';



/**
 *
 */
const initialState = {
	blob: null,
	status: null,
	current: null,
	playing: false
};



/**
 *
 */
export default function message(state = initialState, {type, payload}) {
	switch (type) {
		case SEND:
			return {
				...state,
				blob: payload.blob
			};

		case SUCCESS:
			return {
				...state,
				status: 'success'
			};

		case FAIL:
			return {
				...state,
				status: 'fail'
			};

		case RESET:
			return {
				...state,
				status: ''
			};

		case CURRENT:
			return {
				...state,
				current: payload.filepath
			};

		case PLAY:
			return {
				...state,
				playing: true
			};

		default:
			return state;
	}
}
