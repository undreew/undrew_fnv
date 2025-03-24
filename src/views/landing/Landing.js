import React from 'react';
import {Box} from '@chakra-ui/react';

import LandingHero from './LandingHero';
import LandingSection from './LandingSection';
import LandingModiweek from './LandingModiweek';
import LandingFollowUs from './LandingFollowUs';
import LandingBestSellers from './LandingBestSellers';
import LandingSustainability from './LandingSustainability';
import LandingCollection from './LandingCollection';

function Landing() {
	return (
		<Box>
			<LandingHero />

			<LandingSection title='Best Sellers' action>
				<LandingBestSellers />
			</LandingSection>

			<LandingSection title='Collection'>
				<LandingCollection />
			</LandingSection>

			<LandingSection title='Modiweek'>
				<LandingModiweek />
			</LandingSection>

			<LandingSustainability />

			<LandingSection title='Follow us @modimal'>
				<LandingFollowUs />
			</LandingSection>
		</Box>
	);
}

export default Landing;
