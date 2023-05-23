import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
    function getCookie(name) {
        let matches = document.cookie.match(
            new RegExp(
                '(?:^|; )' +
                    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
                    '=([^;]*)'
            )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    const isToken = Boolean(getCookie('token'));

    if (!isToken) {
        return <Navigate to={redirectPath} replace={true} />;
    }

    return <Outlet />;
};
