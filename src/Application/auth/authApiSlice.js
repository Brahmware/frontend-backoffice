import { apiSlice } from "../api/apiSlice";
import responseProcessor from "../helper/responseProcessor";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            }),
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                await responseProcessor({
                    dispatch: dispatch,
                    queryFulfilled: queryFulfilled,
                    targetFunction: setCredentials
                })
            }
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                dispatch(logOut());
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState());
                    }, 1000);
                } catch (err) {
                    console.error(err);
                }
            }
        }),

        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const { username, roles, accessToken } = data;
                    dispatch(setCredentials({ username, roles, accessToken }));
                } catch (err) {
                    console.log(err)
                }
            }
        }),

    })
});

export const {
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation
} = authApiSlice;