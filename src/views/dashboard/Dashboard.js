import React, {useState} from 'react';
import {Box} from '@chakra-ui/react';
import {assign} from 'lodash';

import {DashboardStepForm} from 'components/Dashboard';
import DashboardUserDetails from './DashboardUserDetails';
import DashboardUserCredentials from './DashboardUserCredentials';
import DashboardUserDetailsStatic from './DashboardUserDetailsStatic';
import DashboardUserCredentialsStatic from './DashboardUserCredentialsStatic';
import DashboardStepEditForm from 'components/Dashboard/DashboardStepEditForm';

const steps = ['User Details', 'User Credentials', 'Review'];

const createUser = async () => null;

function Dashboard() {
	const [formData, setFormData] = useState({});

	function handleNext(formData, activeStep) {
		setFormData((prev) => assign({}, prev, formData));
	}

	function onSubmit() {
		createUser(formData);
	}

	return (
		<Box mt={24}>
			<DashboardStepForm steps={steps} onNext={handleNext} onSubmit={onSubmit}>
				<DashboardUserDetails />

				<DashboardUserCredentials />

				<Box>
					<DashboardStepEditForm title='User Details' mb={3}>
						<DashboardUserDetailsStatic data={formData} />
					</DashboardStepEditForm>

					<DashboardStepEditForm title='User Credentials'>
						<DashboardUserCredentialsStatic data={formData} />
					</DashboardStepEditForm>
				</Box>
			</DashboardStepForm>
		</Box>
	);
}

export default Dashboard;
