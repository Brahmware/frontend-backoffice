import { createSlice } from "@reduxjs/toolkit";

export const drawerInitialState = {
    drawerOpen: false,
    drawerItems: [
        {
            icon: 'http://localhost:7580/backend_controller/get_file/navigationDrawerIcons/dashboard.svg',
            title: 'Home',
            path: '/',
        },
        {
            icon: 'http://localhost:7580/backend_controller/get_file/navigationDrawerIcons/manage-users.svg',
            title: 'Users',
            path: '/users'
        },
        {
            icon: 'http://localhost:7580/backend_controller/get_file/navigationDrawerIcons/prakas_h.jpg',
            title: 'Trade',
            path: '/trade'
        },
        /* {
            icon: 'https://www.svgrepo.com/show/495970/box-2.svg',
            title: 'Leads',
            path: '/leads'
        },
        {
            icon: 'https://www.svgrepo.com/show/495981/brifecase-timer.svg',
            title: 'Tasks',
            path: '/tasks'
        },
        {
            icon: 'https://www.svgrepo.com/show/495991/building-3.svg',
            title: 'Calendar',
            path: '/calendar'
        },
        {
            icon: 'https://www.svgrepo.com/show/496094/cpu.svg',
            title: 'Table',
            path: '/table'
        }, */
    ],
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
export const selectCurrentDrawerOpen = (state) => state.drawerState.drawerOpen;
export const selectCurrentDrawerItems = (state) => state.drawerState.drawerItems;