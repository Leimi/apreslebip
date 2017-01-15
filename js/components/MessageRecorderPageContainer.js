import {connect} from 'react-redux';
import {property} from 'lodash';
import {recorderStart, recorderStop} from 'react-recorder-redux/actions';
import {send, reset} from '../actions/message';
import MessageRecorderPage from './MessageRecorderPage';



/**
 *
 */
const mapStateToProps = ({recorder, message}) => ({
	isRecording: recorder.active,
	lastCommand: recorder.command,
	blobs: recorder.blobs,
	sent: message.status === 'success'
});

/**
 *
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
	onStart() {
		dispatch(reset());
		dispatch(recorderStart());
	},
	onStop() {
		dispatch(recorderStop());
	},
	onSend(blob) {
		dispatch(send(blob));
	},
	onCancel() {
		window.location.reload();
	}
});



/**
 *
 */
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageRecorderPage);
