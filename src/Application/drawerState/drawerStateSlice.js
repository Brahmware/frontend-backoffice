import { createSlice } from "@reduxjs/toolkit";

export const drawerInitialState = {
    drawerOpen: false
}

const drawerStateSlice = createSlice({
    name: 'drawerState',
    initialState: drawerInitialState,
    reducers: {

        setDrawerState: (state, action) => {
            const { drawerOpen } = action.payload;
            state.drawerOpen = drawerOpen;
        },

    }
});

export const { setDrawerState } = drawerStateSlice.actions;
export default drawerStateSlice.reducer;

export const selectCurrentDrawerState = (state) => state.drawerState;