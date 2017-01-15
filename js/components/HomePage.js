import React, {Component, PropTypes} from 'react';
import renderIf from 'render-if';
import classNames from 'classnames';
import {partial} from 'lodash';
import Page from './Page';



/**
 *
 */
export default class HomePage extends Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
	}

	render() {
		return (
			<Page className="HomePage">
				<button type="button" onClick={this.play}>Ecouter un message...</button>

				{renderIf(this.props.current)(() =>
					<audio ref="sound" style={{display: 'none'}} src={this.props.current} type="audio/wave" />
				)}
			</Page>
		);
	}

	play() {
		this.refs.sound.play();
		this.props.onPlay();
	}
}

HomePage.propTypes = {
};

HomePage.defaultProps = {
};
