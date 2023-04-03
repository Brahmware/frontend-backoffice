import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from "./features/auth/RequireAuth";
import { rolesList } from "./utils/rolesList";
import { lazy } from "react";
import "./assets/scss/app.scss";
import PersistLogin from './features/auth/PersistLogin';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
	return (
		<Routes>
			<Route element={<PersistLogin />} >
				<Route
					element={
						<RequireAuth
							allowedRoles={[
								rolesList.Handler,
								rolesList.Admin,
								rolesList.Blogger
							]}
						/>
					}
				>
					<Route exact path='/' element={<Home />} />
				</Route>
			</Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default App;