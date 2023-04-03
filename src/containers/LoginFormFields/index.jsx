import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../Application/auth/authApiSlice';
import ColumnFlexCC from '../../components/placements/ColumnFlexCC';
import FlexEC from '../../components/placements/FlexEC';
import ArtisticBrahmCard from '../../components/cards/ArtisticBrahmCard';
import FlexEE from '../../components/placements/FlexEE';
import { useNavigate } from 'react-router-dom';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    selectCurrentResponseState,
    setResponseState,
    initialState as initialResponseState
} from '../../Application/responseState/responseStateSlice';
import UserField from './UserField';
import CommonError from './CommonError';
import RememberMe from './RememberMe';
import PasswordField from './PasswordField';
import FormTitle from './FormTitle';
import Submit from './Submit';


const LoginFormFields = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();
    const {

        control,
        watch,
        handleSubmit

    } = useForm({
        mode: 'onChange'
    });

    const currentResponseState = useSelector(selectCurrentResponseState);

    const handleFormSubmit = async ({ ...formData }) => {
        await login(formData);
    };

    useEffect(() => {
        currentResponseState.success && navigate('/', { replace: false });
    },
        [
            currentResponseState.success
        ]
    );

    useEffect(() => {

        const subscription = watch((value) => {
            value
                && value?.user
                && value?.password
                && dispatch(setResponseState({ ...initialResponseState }));
        });

        return () => subscription.unsubscribe();

    }, [watch]);


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
                    {/* Form Title */}
                    <FormTitle />

                    {/* User */}
                    <UserField control={control} />

                    {/* Password */}
                    <PasswordField control={control} />

                    {/* Common Error */}
                    <CommonError />

                    <FlexEE>
                        {/* Persisting Login */}
                        <RememberMe control={control} />

                        <FlexEC>
                            {/* Submit Button */}
                            <Submit isLoading={isLoading} />
                        </FlexEC>
                    </FlexEE>
                </ColumnFlexCC>
            </form>
        </ArtisticBrahmCard>
    )
}

export default LoginFormFields;