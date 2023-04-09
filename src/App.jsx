import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from "./features/auth/RequireAuth";
import { lazy } from "react";
import "./assets/scss/app.scss";
import PersistLogin from './features/auth/PersistLogin';
import { allGroups } from './utils/permissionGroups';
import Dashboard from './pages/Application/Home';
import Tasks from './pages/Application/Tasks';

const Application = lazy(() => import("./pages/Application"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
	return (
		<Routes>
			<Route element={<PersistLogin />} >
				<Route element={<RequireAuth allowedRoles={allGroups} />}>
					<Route path='/*' element={<Application />} >
						<Route index element={<Dashboard />} />
						<Route path='tasks' element={<Tasks />} />
						<Route path='account' element={<>Account</>} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Route>
				</Route>
			</Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default App;