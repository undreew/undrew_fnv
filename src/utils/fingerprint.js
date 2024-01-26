import FingerprintJS from '@fingerprintjs/fingerprintjs';

async function loadFingerprint() {
	const fp = await FingerprintJS.load();

	const result = await fp.get();

	return result.visitorId;
}

export default loadFingerprint;
