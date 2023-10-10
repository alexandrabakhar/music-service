import { Centerblock } from '../../components/Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import S from './Main.module.scss';
import { useGetAllTracksQuery } from '../../redux/services/catalogApi';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../redux/slices/user';
import { Menu } from '../../components/Menu/Menu';
import { CollectionsList } from '../../components/CollectionsList/CollectionsList';
import { HandlerLogout } from '../../components/HandlerLogout/HandlerLogout';

export const Main = () => {
    const { data: tracksData, isLoading } = useGetAllTracksQuery();

    const currentTrackId = useSelector(selectCurrentTrackId);

    return (
        <div className={S.container}>
            <Menu />
            <CollectionsList />

            <Centerblock
                tracksData={tracksData}
                heading={'ТРЕКИ'}
                isLoading={isLoading}
            />

            {currentTrackId && (
                <Player tracks={tracksData} currentTrackId={currentTrackId} />
            )}
            <HandlerLogout />
        </div>
    );
};
