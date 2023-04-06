import { Outlet } from "react-router-dom";
import { DashboardIcon, LeadsIcon, UsersIcon } from "../../assets/icons";
import ApplicationLayout from "../../layout/ApplicationLayout";
import Tasks from "./Tasks";

const Application = () => {
    
    return (
        <ApplicationLayout>
            <Outlet />
        </ApplicationLayout>
    )
}

export default Application;

export const HomeMap = [
    {
        name: 'Home',
        icon: <DashboardIcon />,
        component: Application,
        path: ''
    },
    {
        name: 'Tasks',
        icon: <DashboardIcon />,
        component: Tasks,
        path: ''
    },
    /* {
        name: 'Leads',
        icon: <LeadsIcon />,
        component: Leads,
        path: '/leads'
    },
    {
        name: 'Brahmnauts',
        icon: <UsersIcon />,
        component: Users,
        path: '/brahmnauts'
    }, */
];