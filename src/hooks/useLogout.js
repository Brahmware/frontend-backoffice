import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut as logoutAction } from "../Application/auth/authSlice";

const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutAction());
        navigate(0);
    };

    return logout;
}

export default useLogout;