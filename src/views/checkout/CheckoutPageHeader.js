import React from 'react';
import {HStack} from '@chakra-ui/react';

import {LinkLogo} from 'components/Links';
import {PageContainer} from 'components/Page';

function CheckoutPageHeader() {
	return (
		<PageContainer py={2}>
			<HStack>
				<LinkLogo />
			</HStack>
		</PageContainer>
	);
}

export default CheckoutPageHeader;
