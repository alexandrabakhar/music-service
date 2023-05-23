import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ redirectPath = '/login', isToken }) => {
    if (!isToken) {
        return <Navigate to={redirectPath} replace={true} />;
    }

    return <Outlet />;
};
