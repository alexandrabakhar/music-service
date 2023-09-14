import { useParams } from 'react-router-dom';
import { Centerblock } from '../../components/Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import { Footer } from '../../components/footer/Footer';
import styles from './collectionPage.module.scss';
import { useGetPlaylistByUserIDQuery } from '../../redux/services/catalogApi';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../redux/slices/user';
import { Menu } from '../../components/Menu/Menu';
import { HandlerLogout } from '../../components/HandlerLogout/HandlerLogout';

export const CollectionPage = () => {
    const params = useParams();
    const id = Number(params.id);

    const currentTrackId = useSelector(selectCurrentTrackId);

    const { data, isLoading } = useGetPlaylistByUserIDQuery(id);
    let tracksData = data;

    return isLoading ? (
        <div>Loading</div>
    ) : (
        <div className={styles.container}>
            <Menu />

            <Centerblock
                pageType={'collection'}
                tracksData={tracksData.items}
                isLoading={isLoading}
                heading={tracksData.name}
            />
            {currentTrackId && (
                <Player
                    tracks={tracksData.items}
                    currentTrackId={currentTrackId}
                />
            )}

            <HandlerLogout />

            <Footer />
        </div>
    );
};
