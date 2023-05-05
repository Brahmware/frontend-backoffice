import axios from 'axios';
import { createApi } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../auth/authSlice';

// Create an Axios instance with the specified base URL and credentials
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
});

// Create a base query function for use with createApi
const baseQuery = async (args, api, extraOptions) => {
    // Send the request using the Axios instance
    const { data, status } = await axiosInstance.request({
        url: args.url,
        method: args.method,
        data: args.body,
        params: args.params,
        headers: {
            // Add the authorization header with the current access token
            ...args.headers,
            authorization: `Bearer ${api.getState().auth.token}`,
        },
        ...extraOptions,
    });

    // If the request was unauthorized, attempt to refresh the access token
    if (status === 403) {
        console.log('sending refresh token');

        // Send Refresh token to get new access Token
        const refreshResult = await axiosInstance.get('/auth/refresh');

        // If the refresh was successful, store the new token and retry the original query
        if (refreshResult?.data) {
            const { user, roles } = api.getState().auth;

            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, user, roles }));

            // retry the original query with new access token
            const retryArgs = {
                ...args,
                headers: {
                    ...args.headers,
                    authorization: `Bearer ${api.getState().auth.token}`,
                },
            };

            return baseQuery(retryArgs, api, extraOptions);
        } else {
            // If the refresh failed, log the user out and return an error
            api.dispatch(logOut());
            return { error: { originalStatus: 403 } };
        }
    }

    // If the request was successful, return the data
    return { data };
};

// Create the API slice with the base query function and empty endpoints
export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({})
});
