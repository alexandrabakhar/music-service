import { Centerblock } from '../../components/Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import S from './Favorites.module.scss';
import { useGetAllTracksQuery } from '../../redux/services/catalogApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTrackId, selectUserID, setCurrentTrackId } from '../../redux/slices/user';
import { Menu } from '../../components/Menu/Menu';
import { HandlerLogout } from '../../components/HandlerLogout/HandlerLogout';
import { useEffect } from 'react';

export const Favorites = () => {
    const { data, isLoading } = useGetAllTracksQuery();
    const userID = useSelector(selectUserID);

    const dispatch = useDispatch();
    const currentTrackId = useSelector(selectCurrentTrackId);

    const tracksData = data.filter((track) =>
        track.stared_user.some((user) => user.id === userID)
    );

    useEffect(() => {
        dispatch(setCurrentTrackId({ currentTrackId: null }));
    }, []); //удаляем currentTrackId из store и убираем плеер при загрузке страницы

    return (
        <div className={S.container}>
            <Menu />
            <Centerblock
                tracksData={tracksData}
                isLoading={isLoading}
                heading={'Мой плейлист'}
            />

            {currentTrackId && (
                <Player tracks={tracksData} currentTrackId={currentTrackId} />
            )}
            <HandlerLogout />
        </div>
    );
};
