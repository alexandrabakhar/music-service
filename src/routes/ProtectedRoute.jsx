import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/slices/user';

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace={true} />;
    }

    return <Outlet />;
};
