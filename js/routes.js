import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import {fetchRandom} from './actions/message';
import MessageRecorderPageContainer from './components/MessageRecorderPageContainer';
import HomePageContainer from './components/HomePageContainer';



/*
 *
 */
const onHomePageEnter = () =>
	store.dispatch(fetchRandom());

/**
 * Application routes.
 */
const routes = (
	<Router history={browserHistory}>
		<Route
			path="/"
			component={HomePageContainer}
			onEnter={onHomePageEnter}
		/>
		<Route
			path="/laisserunmessage"
			component={MessageRecorderPageContainer}
		/>
	</Router>
);



export default routes;
