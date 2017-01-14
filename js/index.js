import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import store from './store';



/**
 *	Wraps the application with data and intl providers.
 */
const app = (
	<Provider store={store}>
		{routes}
	</Provider>
);



/**
 *	Renders the application on #app.
 */
render(app, document.getElementById('app'));
