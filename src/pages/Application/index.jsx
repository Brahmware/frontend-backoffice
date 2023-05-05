import { Outlet } from "react-router-dom";
import ApplicationLayout from "../../layout/ApplicationLayout";

const Application = () => {
    
    return (
        <ApplicationLayout>
            <Outlet />
        </ApplicationLayout>
    )
}

export default Application;