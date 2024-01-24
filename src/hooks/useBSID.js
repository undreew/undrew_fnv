import {useEffect, useState} from 'react';

import Cookies from 'utils/cookies';
import loadFingerprint from 'utils/fingerprint';

function useBSID() {
	const [bsid, setBSID] = useState(Cookies.bsid || null);

	useEffect(() => {
		if (!bsid) {
			loadFingerprint().then((visitorId) => {
				Cookies.bsid = visitorId;
				setBSID(visitorId);
			});
		}
	}, [bsid]);

	return {isLoading: !bsid, bsid};
}

export default useBSID;
