import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLoginMutation } from '../Application/auth/authApiSlice';
import FullWidthBox from '../components/Boxes/FullWidthBox';
import ThemedField from '../components/TextFields/ThemedField';
import CollapsableError from '../components/TextFields/CollapsableError';
import {
	PASSWORD_PATTERN,
	USERNAME_OR_EMAIL_PATTERN
} from '../utils/patterns';
import PasswordField from '../components/TextFields/PasswordField';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';
import FlexEC from '../components/placements/FlexEC';
import ThemedLoadingButton from '../components/Buttons/ThemedLoadingButton';
import { ArrowForwardRounded } from '@mui/icons-material';
import FlexSC from '../components/placements/FlexSC';
import StateControlCheckBox from '../components/CheckBox/StateControlCheckBox';
import { FormControlLabel, Typography } from '@mui/material';
import { colors } from '../brahmwareTheme/theme';
import { BrahmNautIcon } from '../assets/icons';
import ArtisticBrahmCard from '../components/cards/ArtisticBrahmCard';
import FlexEE from '../components/placements/FlexEE';
import usePersist from '../hooks/usePersist';
import { useNavigate } from 'react-router-dom';
import {
	ALT,
	FETCH_ERROR,
	SERVER__ERROR
} from '../utils/contants';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import {
	selectCurrentError,
	selectCurrentResponseState,
	setResponseState,
	initialState as initialResponseState
} from '../Application/responseState/responseStateSlice';
import FlexCC from '../components/placements/FlexCC';
import WithToolTip from '../components/TooltipComponent/WithTooltip';

const helperTextObject = {
	user: {
		required: "Username is Required",
		pattern: "Wrong Username or Email"
	},

	password: {
		required: "Password is Required",
		pattern: "Wrong Password"
	},

};

const LoginFormFields = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [login, { isLoading }] = useLoginMutation();
	const [persist, setPersist] = usePersist();

	const {

		control,
		watch,
		handleSubmit

	} = useForm({
		mode: 'onChange'
	});

	const handleLoginPersistance = (event) => setPersist(event.target.checked);
	const currentResponseState = useSelector(selectCurrentResponseState);

	const handleFormSubmit = async ({ ...formData }) => {
		await login(formData);
	};

	useEffect(() => {
		currentResponseState.success && navigate('/', { replace: false });
	}, [currentResponseState.success])

	useEffect(() => {

		const subscription = watch((value) => {
			value
				&& value?.user
				&& value?.password
				&& dispatch(setResponseState({ ...initialResponseState }));
		});

		return () => subscription.unsubscribe();

	}, [watch]);

	const currentResponseError = useSelector(selectCurrentError);

	const commonErrorGrowCondition = () => {
		if (currentResponseError?.errorType === FETCH_ERROR) return true;
		if (currentResponseError?.property === ALT) return true;
		if (currentResponseError?.errorType === SERVER__ERROR) return true;
		if (currentResponseError?.errorType) return true;
		return false;
	};

	return (

		<ArtisticBrahmCard
			elevation={3}
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

					{/* User */}
					<Controller
						control={control}
						name='user'
						defaultValue=''
						rules={{
							required: true,
							pattern: USERNAME_OR_EMAIL_PATTERN
						}}
						render={({ field, fieldState: { error } }) => {
							return (
								<FullWidthBox>
									<ThemedField
										{...field}
										fullWidth={true}
										variant={'filled'}
										ref={null}
										name='user'
										id="user"
										label='User'
										placeholder='Enter username or registered email'
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

					{/* Password */}
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
										variant='filled'
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
					<FlexCC
						position='relative'
						mt='-2em'
						sx={{ transform: 'translateY(0.8em)' }}
					>
						{
							commonErrorGrowCondition() &&
							<CollapsableError
								position='relative'
								growCondition={commonErrorGrowCondition()}
							>
								<FlexCC>
									<Typography fontWeight='medium' color='error' fontSize='0.9em'>
										{currentResponseError.message}
									</Typography>
								</FlexCC>
							</CollapsableError>
						}
					</FlexCC>
					<FlexEE>
						<Controller
							control={control}
							name='persist'
							defaultValue='true'
							render={({ field, fieldState: { error } }) => {
								return (
									<WithToolTip
										message='Persist your Login'
										tooltipVanish={false}
										tooltipPlacement="left"
										color={colors.primary}
										textColor={colors.darker__card}
										showChangeState={true}
									>
										<FormControlLabel
											control={
												<StateControlCheckBox
													{...field}
													initialValue={persist}
													onChange={handleLoginPersistance}
												/>
											}
											label={
												<Typography
													lineHeight='1.125em'
													whiteSpace='nowrap'
												>
													Remember Me
												</Typography>
											}
											sx={{ gap: '0.25em' }}
										/>
									</WithToolTip>
								)
							}}
						/>
						<FlexEC>
							<ThemedLoadingButton
								variant={isLoading ? 'outlined' : 'contained'}
								size="medium"
								fullWidth={true}
								loading={isLoading}
								loadingPosition='end'
								endIcon={<ArrowForwardRounded />}
								disableElevation
								color='primary'
								type='submit'
								sx={{ width: '8em' }}
							>
								Submit
							</ThemedLoadingButton>
						</FlexEC>
					</FlexEE>
				</ColumnFlexCC>
			</form>
		</ArtisticBrahmCard>
	)
}

export default LoginFormFields;