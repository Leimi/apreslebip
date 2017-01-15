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
			<p><strong>Un gros désolé : temps limité oblige, vous ne pouvez PAS laisser de message avec Chrome ! Lancez Firefox, merci beaucoup :)</strong></p>
			<button type="button"
				className="Button MessageRecorderPage-button"
				onClick={isRecording
					? onStop
					: onStart
				}
			>
				{isRecording ? "Arrêter l\'enregistrement" : "Laisser un message"}
			</button>
			<br />
			<br />
			{renderIf(!isRecording && url && !sent)(() =>
				<div>
					<p>Vérifiez avant d'envoyer &nbsp; <audio
						type="audio/wav"
						src={url}
						controls
					/></p>
					<button type="button" className="Button mb-15" onClick={partial(onSend, toSend)}>Envoyer le message</button>&nbsp;
					<button type="button" className="Button mb-15" onClick={onCancel}>Annuler</button>
				</div>
			)}
			{renderIf(!isRecording && url && sent)(() =>
				<p>Message envoyé !</p>
			)}
			<img src={isRecording ? "/telephone-2.png" : "/telephone.png"} alt="Téléphone" />
		</Page>
	);
}

MessageRecorderPage.propTypes = {
};

MessageRecorderPage.defaultProps = {
};
