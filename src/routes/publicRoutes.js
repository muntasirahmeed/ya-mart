import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Dashboard from "../pages/dashboard/Dashboard";

export const publicRoutes = [
	{id: 1, path: "/", Page: Login},
	{id: 2, path: "/registration", Page: Registration},
	{id: 3, path: "/dashboard", Page: Dashboard},
];
