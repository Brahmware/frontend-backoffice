import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./auth/authSlice";
import errorReducer from "./errors/errorSlice";
import usersReducer from "./users/usersSlice";
import myReducer from "./me/mySlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        error: errorReducer,
        users: usersReducer,
        me: myReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});