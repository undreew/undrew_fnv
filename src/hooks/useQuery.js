import {useMemo} from 'react';
import {useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import {extend} from 'lodash';
import urlJoin from 'url-join';
import cleanDeep from 'clean-deep';
import qs from 'qs';

export function queryStringify(obj, options) {
	return qs.stringify(obj, options);
}

function useQuery() {
	const [search] = useSearchParams();
	const {pathname} = useLocation();
	const navigate = useNavigate();

	function queryParse(query, options = {ignoreQueryPrefix: true}) {
		return qs.parse(query, options);
	}

	const query = useMemo(() => queryParse(search.toString()), [search]);

	function mergeQuery(objQuery) {
		return extend({}, query, objQuery);
	}

	function buildQueryURL(objQuery) {
		const cleanedQuery = cleanDeep(objQuery);
		const options = {addQueryPrefix: true};
		const strQuery = queryStringify(cleanedQuery, options);

		return urlJoin(pathname, strQuery);
	}

	function pushQuery(objQuery) {
		const url = buildQueryURL(objQuery);
		return navigate(url);
	}

	function updateQuery(objQuery) {
		let extendedQuery = mergeQuery(objQuery);
		return pushQuery(extendedQuery);
	}

	return {query, updateQuery, pushQuery, buildQueryURL};
}

export default useQuery;
