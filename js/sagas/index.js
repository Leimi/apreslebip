import {watchSend, watchFetchRandom} from './message';


/**
 *	Exports all sagas of the application.
 */
export default function* sagas() {
	yield [
		watchSend(),
		watchFetchRandom()
	];
}
