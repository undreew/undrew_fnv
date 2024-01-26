import React from 'react';
import {Box, Input} from '@chakra-ui/react';
import {DashboardStepForm} from 'components/Dashboard';

const steps = ['First Step', 'Second Step', 'Third Step'];

function Dashboard() {
	return (
		<Box mt={24}>
			<DashboardStepForm steps={steps}>
				<div>
					<Input type='text' name='name' placeholder='Name' />
				</div>

				<div>
					<Input type='email' name='email' placeholder='Email' />
				</div>

				<div>Third Step Content</div>
			</DashboardStepForm>
		</Box>
	);
}

export default Dashboard;
