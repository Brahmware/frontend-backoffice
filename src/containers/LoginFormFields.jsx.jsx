import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import ThickPaddedCard from '../components/cards/ThickPaddedCard';
import { useLoginMutation } from '../App/auth/authApiSlice';
import FullWidthBox from '../components/Boxes/FullWidthBox';
import ThemedField from '../components/TextFields/ThemedField';
import CollapsableError from '../components/TextFields/CollapsableError';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../utils/patterns';
import PasswordField from '../components/TextFields/PasswordField';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';
import FlexEC from '../components/placements/FlexEC';
import ThemedLoadingButton from '../components/Buttons/ThemedLoadingButton';
import { ArrowForwardRounded, CheckBox } from '@mui/icons-material';
import FlexSC from '../components/placements/FlexSC';
import StateControlCheckBox from '../components/CheckBox/StateControlCheckBox';
import { Typography } from '@mui/material';
import { colors } from '../brahmwareTheme/theme';
import { BrahmNautIcon } from '../assets/icons';
import ArtisticBrahmCard from '../components/cards/ArtisticBrahmCard';

const helperTextObject = {
	username: {
		required: "Username is Required",
		pattern: "Wrong Username"
	},

	password: {
		required: "Password is Required",
		pattern: "Wrong Password"
	},

};

const LoginFormFields = () => {

	const [login, { isLoading }] = useLoginMutation();

	const {
		reset,
		control,
		register,
		handleSubmit,
		errors
	} = useForm({
		mode: 'onChange'
	});

	const handleLoginPersistance = (event) => {

	};

	const handleFormSubmit = ({ ...formData }) => {
		console.log(formData)
	};

	return (

		<ArtisticBrahmCard
			elevation={5}
			sx={{ padding: '2em', opacity: 0.98 }}
		>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<ColumnFlexCC
					gap='2em'
					sx={{ width: '20em' }}
				>
					<FlexSC gap={'0.5em'}>
						<BrahmNautIcon height={'2em'} width={'2em'} fill={colors.text__color} />
						<Typography variant='h4' fontWeight={'bold'}>Login</Typography>
					</FlexSC>
					<Controller
						control={control}
						name='username'
						defaultValue=''
						rules={{
							required: true,
							pattern: EMAIL_PATTERN
						}}
						render={({ field, fieldState: { error } }) => {
							return (
								<FullWidthBox>
									<ThemedField
										{...field}
										fullWidth={true}
										variant={'filled'}
										ref={null}
										name='username'
										id="username"
										label='Username'
										size='small'
										error={error !== undefined}
									/>
									<CollapsableError growCondition={error !== undefined}>
										{
											error
												? error?.type === 'userError'
													? error?.errorMessage
													: helperTextObject.username[error?.type]
												: ''
										}
									</CollapsableError>
								</FullWidthBox>
							)
						}}
					/>
					<Controller
						control={control}
						name="password"
						defaultValue=''
						rules={{
							required: true,
							pattern: PASSWORD_PATTERN
						}}
						render={({ field, fieldState: { error } }) => {
							return (
								<FullWidthBox>
									<PasswordField
										{...field}
										variant={'filled'}
										ref={null}
										id="user__password"
										label="Password"
										size='small'
										fullWidth
										error={error !== undefined}
									/>
									<CollapsableError growCondition={error !== undefined}>
										{
											error
												? error?.type === 'userError'
													? error?.errorMessage
													: helperTextObject.password[error?.type]
												: ''
										}
									</CollapsableError>
								</FullWidthBox>
							)
						}}
					/>
					<FlexSC gap={'0.5em'}>
						<StateControlCheckBox
							message='gotcha'
							color={colors.primary}
							showChangeState={true}
							onChange={handleLoginPersistance}
						/>
						Remember me
					</FlexSC>
					<FlexEC>
						<ThemedLoadingButton
							variant="contained"
							size="medium"
							fullWidth={true}
							loading={false}
							loadingPosition='end'
							endIcon={<ArrowForwardRounded />}
							disableElevation
							type='submit'
							sx={{ width: '8em' }}
						>
							Submit
						</ThemedLoadingButton>
					</FlexEC>
				</ColumnFlexCC>
			</form>
		</ArtisticBrahmCard>
	)
}

export default LoginFormFields;