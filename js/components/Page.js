import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Header from './Header';


/**
 *
 */
export default function Page({className, children}) {
	return (
		<div>
			<Header />

			<main className={classNames("Page", className)}>
				{children}
			</main>
		</div>
	);
}

Page.propTypes = {
};

Page.defaultProps = {
};
