import { Routes, Route } from 'react-router-dom';
import { CollectionPage } from '../pages/collectionPage';
import { LoginPage } from '../pages/loginPage';
import { MainPage } from '../pages/mainPage';
import { PlaylistPage } from '../pages/playlistPage';
import { RegistrationPage } from '../pages/registrationPage';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />


            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/playlist" element={<PlaylistPage />} />
                <Route path="/collection/:id" element={<CollectionPage />} />
            </Route>

            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};
