import React, {PropTypes} from 'react';
import renderIf from 'render-if';
import classNames from 'classnames';
import {Recorder} from 'react-recorder-redux';
import Page from './Page';




/**
 *
 */
export default function MessageRecorderPage({
	isRecording, lastCommand, blobs, onStart, onStop
}) {
	var url;
	if (blobs.length) {
		var url = window.URL.createObjectURL(blobs[blobs.length - 1]);
	}
	return (
		<Page className="MessageRecorderPage">
			<Recorder />
				<button type="button"
					className="MessageRecorderPage-button"
					onClick={isRecording
						? onStop
						: onStart
					}
				>
					{isRecording ? "Arrêter l\'enregistrement" : "Démarrer l\'enregistrement"}
				</button>
				<br />
				<br />
				{renderIf(!isRecording && url)(() =>
					<div>
						<audio
							type="audio/wav"
							src={url}
							controls
						/>
						<br />
						<br />
						<a href={url} download="message.wav">Télécharger</a>
					</div>
				)}
		</Page>
	);
}

MessageRecorderPage.propTypes = {
};

MessageRecorderPage.defaultProps = {
};
