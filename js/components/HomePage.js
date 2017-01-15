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
				<p><strong>Un gros désolé : faute de temps, le site ne semble pas super bien fonctionner sur Safari ou iOS... Utilisez Firefox pour contribuer, voire Chrome pour seulement écouter.</strong></p>
				<p ref="time">Un message arrive dans 3...</p>
				{/*<audio ref="bip" style={{display: 'none'}} src={this.props.current} type="audio/wave" />*/}

				{renderIf(this.props.current)(() =>
					<div>
						<audio
							ref="sound"
							controls
 							style={{display: 'none', margin: 'auto'}}
						>
							<source src={this.props.current} type="audio/wav" />
						</audio>
						<br />
					</div>
				)}
				<img onClick={this.toggle} ref="img" src="/telephone.png" alt="Téléphone" />
			</Page>
		);
	}

	componentDidMount() {
		this.play();
	}

	componentDidUpdate() {
		this.play();
	}

	play() {
		if (this.props.current) {
			// setTimeout((function() {
			// 	this.refs.bip.play();
			// }).bind(this), 2000);
			setTimeout(function() {
				if (this.refs.sound) {
					this.refs.sound.play();
					this.refs.sound.style.display = 'block';
					this.refs.img.src = "/telephone-2.png";
				}
			}.bind(this), 3000);
			setTimeout(function() {
				if (this.refs.time)
					this.refs.time.innerHTML = "Un message arrive dans 2...";
			}.bind(this), 1000);
			setTimeout(function() {
				if (this.refs.time)
					this.refs.time.innerHTML = "Un message arrive dans 1...";
			}.bind(this), 2000);
			setTimeout(function() {
				if (this.refs.time)
					this.refs.time.innerHTML = "Allô ?";
			}.bind(this), 3000);
		}
	}
}

HomePage.propTypes = {
};

HomePage.defaultProps = {
};
