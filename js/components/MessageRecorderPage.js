import React, {PropTypes} from 'react';
import renderIf from 'render-if';
import classNames from 'classnames';
import {partial} from 'lodash';
import {Recorder} from 'react-recorder-redux';
import Page from './Page';



/**
 *
 */
export default function MessageRecorderPage({
	isRecording, lastCommand, blobs, onStart, onStop, onSend, onCancel, sent
}) {
	var url;
	if (blobs.length) {
		var url = window.URL.createObjectURL(blobs[blobs.length - 1]);
		var toSend = blobs[blobs.length - 1];
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
				{renderIf(!isRecording && url && !sent)(() =>
					<div>
						<audio
							type="audio/wav"
							src={url}
							controls
						/>
						<br />
						<br />
						<button type="button" onClick={partial(onSend, toSend)}>Envoyer le message</button>
						<button type="button" onClick={onCancel}>Annuler</button>
					</div>
				)}
				{renderIf(!isRecording && url && sent)(() =>
					<p>Message envoyé !</p>
				)}
		</Page>
	);
}

MessageRecorderPage.propTypes = {
};

MessageRecorderPage.defaultProps = {
};
