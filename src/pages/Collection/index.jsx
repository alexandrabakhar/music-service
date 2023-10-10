import { useParams } from 'react-router-dom';
import { Centerblock } from '../../components/Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import S from './Collection.module.scss';
import { useGetCollectionByIdQuery } from '../../redux/services/catalogApi';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentTrackId,
    setCurrentTrackId,
} from '../../redux/slices/user';
import { Menu } from '../../components/Menu/Menu';
import { HandlerLogout } from '../../components/HandlerLogout/HandlerLogout';
import { useEffect } from 'react';

export const Collection = () => {
    const params = useParams();
    const id = Number(params.id);
    const dispatch = useDispatch();
    const currentTrackId = useSelector(selectCurrentTrackId);

    const { data, isLoading, isSuccess } = useGetCollectionByIdQuery(id);
    let tracksData = [];
    if (isSuccess) tracksData = data.items;

    useEffect(() => {
        dispatch(setCurrentTrackId({ currentTrackId: null }));
    }, []); //удаляем currentTrackId из store и убираем плеер при загрузке страницы

    return (
        <div className={S.container}>
            <Menu />

            <Centerblock
                tracksData={tracksData}
                isLoading={isLoading}
                heading={data}
            />
            {currentTrackId && (
                <Player tracks={tracksData} currentTrackId={currentTrackId} />
            )}

            <HandlerLogout />
        </div>
    );
};
