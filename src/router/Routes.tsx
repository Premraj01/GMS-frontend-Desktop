import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard';
import BillingPage from '../pages/BillingPage';
import CustomerPage from '../pages/CustomerPage';
import DashboardPage from '../pages/DashboardPage';
import ProductPage from '../pages/ProductPage';

const Routes = () => {
    const routes = useRoutes([

        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="dashboard/landing" /> },
                { path: 'landing', element: <DashboardPage /> },
                {
                    path: 'customer',
                    element: <CustomerPage />

                },
                {
                    path: 'product',
                    element: <ProductPage />

                },
                {
                    path: 'billing',
                    element: <BillingPage />

                },
            ]

        },

        {
            path: '/',
            element: <Navigate to="dashboard/landing" />,
            index: true

        }
    ]);
    return routes
}

export default Routes