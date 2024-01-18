import {withRouteLayout} from 'components/Route';
import {Route} from 'react-router-dom';

function hasChildRoutes(item) {
	const {children: childRoutes} = item || {};
	if (!childRoutes) return;
	return renderRoutes(childRoutes);
}

function renderRoutes(routes) {
	return (routes || []).map((route, index) => {
		const {path, element, ...rest} = route || {};

		const RouteComponent = withRouteLayout(element);

		return (
			<Route
				key={index}
				path={path}
				element={<RouteComponent {...rest} />}
				{...rest}
			>
				{hasChildRoutes(route)}
			</Route>
		);
	});
}

export default renderRoutes;
