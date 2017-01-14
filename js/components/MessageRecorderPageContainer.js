import {connect} from 'react-redux';
import MessageRecorderPage from './MessageRecorderPage';
import {property} from 'lodash';
import {recorderStart, recorderStop} from 'react-recorder-redux/actions';



/**
 *
 */
const mapStateToProps = ({recorder}) => ({
	isRecording: recorder.active,
	lastCommand: recorder.command,
	blobs: recorder.blobs
});

/**
 *
 */
const mapDispatchToProps = (dispatch) => ({
	onStart() {
		dispatch(recorderStart());
	},
	onStop() {
		dispatch(recorderStop());
	}
});



/**
 *
 */
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageRecorderPage);
