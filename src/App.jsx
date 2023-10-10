import { useDispatch } from 'react-redux';

import { AppRoutes } from './routes/routes';
import { useEffect } from 'react';
import { setAccess } from './redux/slices/user';
import { useGetAccessByRefreshMutation } from './redux/services/usersApi';

export const App = () => {
    const dispatch = useDispatch();

    const [getAccessByRefresh] = useGetAccessByRefreshMutation();

    const accessTokenLifetime = 2500000; //время жизни access token в msec 3000000, 250000 чтобы успеть обновить до истечения срока;

    useEffect(() => {
        const accessTokenLifetimeTimer = setInterval(() => {
            const storageRefresh = localStorage.getItem('refresh');

            if (storageRefresh) updateAccess(storageRefresh);
        }, accessTokenLifetime);
        return () => clearInterval(accessTokenLifetimeTimer);
    }, []);

    const updateAccess = async (refreshToken) => {
        getAccessByRefresh({ refresh: refreshToken })
            .unwrap()
            .then((data) => {
                dispatch(setAccess({ access: data.access }));
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return <AppRoutes />;
};
