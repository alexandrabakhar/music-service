import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../store/slices/user';

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    // console.log(isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace={true} />;
    }

    return <Outlet />;
};
