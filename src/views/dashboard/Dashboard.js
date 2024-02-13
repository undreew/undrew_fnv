import React from 'react';

import {
	DashboardBreadcrumb,
	DashboardContent,
	DashboardHeader,
	DashboardList,
} from 'components/Dashboard';
import DashboardFilters from './DashboardFilters';
import ITEMS from './data';
import {
	Badge,
	Card,
	CardFooter,
	CardHeader,
	HStack,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';

// import db from 'assets/images/dashboard.png';

function Dashboard() {
	return (
		<div>
			<DashboardBreadcrumb />
			<DashboardHeader title='Shop All' />

			{/* <Image src={db} backgroundSize='cover' /> */}
			{/* <Image
				src={db}
				bgRepeat='no-repeat'
				bgPosition='center center'
				bgSize='cover'
			/> */}

			<DashboardContent itemList>
				<DashboardFilters />

				<DashboardList>
					{(ITEMS || []).map((item, index) => {
						const {name, image, price, list_description, colors, in_wishlist} =
							item || {};

						return (
							<Card>
								<CardHeader>
									<HStack justify='space-between'>
										<Badge>New</Badge>

										{in_wishlist ? <FaHeart /> : <FaRegHeart />}
									</HStack>
								</CardHeader>

								<Image src={image} />

								<CardFooter>
									<HStack w='100%' justify='space-between'>
										<VStack alignItems='start'>
											<Text textStyle='h6'>{name}</Text>
											<Text textStyle='bodyMd'>{list_description}</Text>
											<Text textStyle='bodyMd'>{colors[0]}</Text>
										</VStack>

										<Text textStyle='h6'>{price}</Text>
									</HStack>
								</CardFooter>
							</Card>
						);
					})}
				</DashboardList>
			</DashboardContent>
		</div>
	);
}

export default Dashboard;
