import React from 'react';
import {Box} from '@chakra-ui/react';

import LandingHero from './LandingHero';
import LandingSection from './LandingSection';
import LandingModiweek from './LandingModiweek';
import LandingFollowUs from './LandingFollowUs';
import LandingBestSellers from './LandingBestSellers';
import LandingSustainability from './LandingSustainability';

function Landing() {
	return (
		<Box>
			<LandingHero />

			<LandingSection title='Best Sellers' action>
				<LandingBestSellers />
			</LandingSection>

			<LandingSection title='Collection'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius distinctio
				saepe nobis laudantium ratione perspiciatis cumque quidem! Incidunt
				omnis dolor similique, nesciunt molestias aliquam quas fugiat, magni
				animi sequi obcaecati repellendus quidem, numquam doloremque? Officiis
				quae dicta, id dolore reiciendis consectetur facere eum, odit facilis
				dolorem incidunt commodi libero quam eveniet ullam excepturi aut aliquid
				quas voluptas nam aperiam quidem! Veritatis, magni error dignissimos
				aspernatur quasi et voluptatum fuga autem commodi ipsum ab recusandae.
				Dolores eligendi nemo alias voluptatem laboriosam consectetur excepturi
				voluptates veritatis perferendis itaque, fugit id perspiciatis ut
				eveniet asperiores officiis iusto similique provident temporibus nulla
				ducimus quo fugiat? Ea porro cumque quisquam perferendis laboriosam
				ipsum vel aspernatur ducimus sunt consequuntur ab delectus quaerat modi,
				incidunt nihil labore! Laudantium, ab nisi praesentium placeat voluptate
				corrupti harum nulla fugiat fugit, culpa, minus eum dolorum id nobis ex
				debitis quas impedit accusamus veniam dolor! Delectus, similique? Ab
				odit quam et hic consequatur quidem molestiae soluta doloremque fuga ea
				perferendis, sapiente atque numquam vero placeat totam reiciendis
				dolorem reprehenderit fugiat, similique quisquam! Perferendis
				temporibus, odit sunt repellendus neque dolores magnam quisquam,
				assumenda numquam exercitationem labore mollitia excepturi culpa vitae.
				Accusamus, repellendus sapiente vitae similique ducimus non maxime aut
				tempore nobis earum.
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
