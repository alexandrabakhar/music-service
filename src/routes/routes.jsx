import { Routes, Route } from 'react-router-dom';
import { Collection } from '../pages/Collection';
import { Login } from '../pages/Login';
import { Main } from '../pages/Main/index';
import { Favorites } from '../pages/Favorites';
import { Registration } from '../pages/Registration';
import { ProtectedRoute } from './ProtectedRoute';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />


            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Main />} />
                <Route path="/playlist" element={<Favorites />} />
                <Route path="/collection/:id" element={<Collection />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
