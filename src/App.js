import React from 'react';

import routes from 'routes';
import renderRoutes from 'utils/render-routes';

import {Page} from 'components/Page';

import AppProviders from 'AppProviders';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
	return (
		<AppProviders>
			<Page>
				<Router>
					<Routes>{renderRoutes(routes)}</Routes>
				</Router>
			</Page>
		</AppProviders>
	);
}

export default App;
