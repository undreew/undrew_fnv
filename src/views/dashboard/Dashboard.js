import React, {useState} from 'react';
import {Box} from '@chakra-ui/react';
import {assign} from 'lodash';

import {DashboardStepForm} from 'components/Dashboard';
import DashboardUserDetails from './DashboardUserDetails';
import DashboardUserAddress from './DashboardUserAddress';
import DashboardUserCredentials from './DashboardUserCredentials';
import DashboardUserAddressStatic from './DashboardUserAddressStatic';
import DashboardUserDetailsStatic from './DashboardUserDetailsStatic';
import DashboardUserCredentialsStatic from './DashboardUserCredentialsStatic';
import DashboardStepEditForm from 'components/Dashboard/DashboardStepEditForm';

const steps = ['User Details', 'User Address', 'User Credentials', 'Review'];

const createUser = async (formData) => console.log(formData);

function Dashboard() {
	const [formData, setFormData] = useState({});

	function handleNext(formData, activeStep) {
		setFormData((prev) => assign({}, prev, formData));
	}

	function handleEdit(activeStep) {
		if (1) {
			// step 2 is dependent on step 1
			// should remove form data in step 2
			// if we were to edit step 1
			// setFormData((prev) => assign({}, prev, formData));
			// setFormData({});
		}
	}

	function onSubmit() {
		createUser(formData);
	}

	return (
		<Box mt={24}>
			<DashboardStepForm
				steps={steps}
				onNext={handleNext}
				onEdit={handleEdit}
				onSubmit={onSubmit}
			>
				<DashboardUserDetails />

				<DashboardUserAddress />

				<DashboardUserCredentials />

				<Box>
					<DashboardStepEditForm title='User Details' step={0}>
						<DashboardUserDetailsStatic data={formData} />
					</DashboardStepEditForm>

					<DashboardStepEditForm title='User Address' step={1}>
						<DashboardUserAddressStatic data={formData} />
					</DashboardStepEditForm>

					<DashboardStepEditForm title='User Credentials' step={2}>
						<DashboardUserCredentialsStatic data={formData} />
					</DashboardStepEditForm>
				</Box>
			</DashboardStepForm>
		</Box>
	);
}

export default Dashboard;
