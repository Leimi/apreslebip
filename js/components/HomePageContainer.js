import {connect} from 'react-redux';
import {play, fetchRandom} from '../actions/message';
import HomePage from './HomePage';



/**
 *
 */
const mapStateToProps = ({message}) => ({
	current: message.current,
	play: message.playing
});

/**
 *
 */
const mapDispatchToProps = (dispatch) => ({
	onPlay() {
		dispatch(play());
		dispatch(fetchRandom());
	}
});



/**
 *
 */
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
