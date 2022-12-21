import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import CustomerPage from '../pages/CustomerPage';
import DashboardPage from '../pages/DashboardPage';

const Routes = () => {
    const routes = useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard" />, index: true },
                { path: 'landing', element: <DashboardPage /> },
                {
                    path: 'customer',
                    element: <CustomerPage />

                }
            ]

        },


    ]);
    return routes
}

export default Routes