import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from "./features/auth/RequireAuth";
import { lazy } from "react";
import "./assets/scss/app.scss";
import PersistLogin from './features/auth/PersistLogin';
import { allGroups } from './utils/permissionGroups';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
	return (
		<Routes>
			<Route element={<PersistLogin />} >
				<Route element={<RequireAuth allowedRoles={allGroups} />}>
					<Route exact path='/' element={<Home />} />
				</Route>
			</Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default App;