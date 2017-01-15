import React, {PropTypes} from 'react';
import classNames from 'classnames';



/**
 *
 */
export default function Header({}) {
	return (
		<header className="Header">
			<h1><a href="/">Après le bip</a></h1>
			<ul>
				<li><a href="/">Écouter un message</a></li>
				<li><a href="/laisserunmessage">Laisser un message</a></li>
			</ul>
		</header>
	);
}

Header.propTypes = {
};

Header.defaultProps = {
};
