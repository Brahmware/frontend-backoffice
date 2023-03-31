import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    success: false,
    isError: false,
    message: '',
    error: {
        errorType: null,
        property: null,
        message: '',
        fullError: null
    }
};

const responseStateSlice = createSlice({
    name: 'responseState',
    initialState,
    reducers: {

        setResponseState: (state, action) => {
            const { success, isError, message, error } = action.payload;
            state.success = success;
            state.isError = isError;
            state.message = message;
            if (error) state.error = error;
        },

        setError: (state, action) => {
            const { error, property, message, errorType } = action.payload;
            state.success = false;
            state.error = { property, message, errorType, fullError: error };
        },

        clearError: (state) => state.error = initialState.error,

    }
});

export default responseStateSlice.reducer;
export const {
    setResponseState,
    setError,
    clearError
} = responseStateSlice.actions;

export const selectCurrentResponseState = (state) => state.responseState;
export const selectCurrentResponseSuccess = (state) => state.responseState.success;
export const selectCurrentResponseMessage = (state) => state.responseState.message;
export const selectCurrentError = (state) => state.responseState.error;
export const selectCurrentErrorProperty = (state) => state.responseState.error.property;
export const selectCurrentErrorMessage = (state) => state.responseState.error.message;