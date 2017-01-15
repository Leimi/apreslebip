import React, {PropTypes} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';



/**
 *
 */
export default function Header({}) {
	return (
		<header className="Header">
			<h1><Link to="/">Après le bip</Link></h1>
			<ul>
				<li><Link to="/">Écouter un message</Link></li>
				<li><Link to="/laisserunmessage">Laisser un message</Link></li>
			</ul>
		</header>
	);
}

Header.propTypes = {
};

Header.defaultProps = {
};
