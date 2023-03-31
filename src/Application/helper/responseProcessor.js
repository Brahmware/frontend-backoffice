import { ALT, FETCH_ERROR } from "../../utils/contants";
import {
    setResponseState,
    initialState as initialResponseState
} from "../responseState/responseStateSlice";


const responseProcessor = async ({ dispatch, targetFunction, queryFulfilled }) => {

    try {
        const response = await queryFulfilled;

        dispatch(setResponseState({
            ...initialResponseState,
            success: true,
        }));

        return dispatch(targetFunction({ ...response.data }));

    } catch (error) {

        if (error.error.status === FETCH_ERROR) return dispatch(
            setResponseState({
                success: false,
                isError: true,
                message: 'Server is temporarily down, please try again in a while.',
                error: {
                    errorType: FETCH_ERROR,
                    message: 'Server is temporarily down, please try again in a while.',
                    fullError: FETCH_ERROR
                }
            })
        )

        const { status, data: { property, errorMessage, errorType } } = error;
        if (property === ALT) return dispatch({
            success: false,
            message: errorMessage,
            error: {
                errorType: errorType,
                property: ALT,
                message: errorMessage,
                fullError: error,
            }
        });

        if (getErrorType(status) === 4) return dispatch(
            setResponseState({
                success: false,
                isError: true,
                message: errorMessage,
                error: {
                    errorType: errorType,
                    property: property,
                    message: errorMessage,
                    fullError: error,
                }
            })
        );

        return dispatch(
            setResponseState({
                success: false,
                isError: true,
                message: 'Something went Wrong. Please Try Again.',
                error: {
                    errorType: errorType,
                    property: property,
                    message: errorMessage,
                    fullError: error,
                }
            })
        );
    }
}

const getErrorType = (errorCode) => Math.floor(errorCode / 100);

export default responseProcessor;