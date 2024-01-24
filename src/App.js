import React from 'react';

import routes from 'routes';
import renderRoutes from 'utils/render-routes';

import {Page} from 'components/Page';

import AppProviders from 'AppProviders';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

import 'utils/axios-config';
import useBSID from 'hooks/useBSID';

function App() {
	const {isLoading} = useBSID();
	if (isLoading) return 'Loading...';

	return (
		<AppProviders>
			<Router>
				<Page>
					<Routes>{renderRoutes(routes)}</Routes>
				</Page>
			</Router>
		</AppProviders>
	);
}

export default App;
