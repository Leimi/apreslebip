import {takeLatest, takeEvery} from 'redux-saga';
import {put, call, select} from 'redux-saga/effects';
import {property} from 'lodash';
import {SEND, FETCH_RANDOM, success, fail, current} from '../actions/message';
import {postMessage, getRandomMessage} from '../api/message';



/**
 *
 */
function* sendWorker() {
	try {
		const blob = yield select(property('message.blob'));
		const response = yield call(postMessage, blob);
		if (response && response.status === 'success') {
			yield put(success());
		} else {
			yield put(fail());
		}
	} catch (e) {
		console.error(e);
	}
}

/**
 *
 */
function* fetchRandomWorker() {
	try {
		const message = yield call(getRandomMessage);
		yield put(current(message));
	} catch (e) {
		console.log(e);
	}
}


/**
 *
 */
export function* watchSend() {
	yield* takeEvery(SEND, sendWorker);
}

/**
 *
 */
export function* watchFetchRandom() {
	yield* takeEvery(FETCH_RANDOM, fetchRandomWorker);
}
