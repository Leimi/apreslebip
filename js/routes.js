import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import MessageRecorderPageContainer from './components/MessageRecorderPageContainer';



/**
 * Application routes.
 */
const routes = (
	<Router history={browserHistory}>
		<Route
			path="/"
			component={MessageRecorderPageContainer}
		/>
	</Router>
);



export default routes;
