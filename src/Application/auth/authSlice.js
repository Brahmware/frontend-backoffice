import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { deletePersistProperty } from "../../hooks/usePersist";
import { AUTH_COOKIE } from "../../utils/contants";

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null, roles: [] },
    reducers: {

        setCredentials: (state, action) => {
            const { username, roles, accessToken } = action.payload;
            state.user = username;
            state.roles = roles?.map((role) => Number(role));
            state.token = accessToken;
        },

        logOut: (state) => {
            Cookies.remove(AUTH_COOKIE);
            deletePersistProperty();
            state.user = null;
            state.roles = [];
            state.token = null;
        }
    },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRoles = (state) => state.auth.roles;