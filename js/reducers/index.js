import {combineReducers} from 'redux';
import {recorderReducer as recorder} from 'react-recorder-redux';
import message from './message';


/**
 *	Exports all reducers of the application.
 */
export default combineReducers({
	recorder,
	message
});
