import { Centerblock } from '../../components/Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import { Footer } from '../../components/footer/Footer';
import styles from './playlistPage.module.scss';
import { useGetAllTracksQuery } from '../../redux/services/catalogApi';
import { selectUserID } from '../../redux/slices/user';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../redux/slices/user';
import { Menu } from '../../components/Menu/Menu';
import { HandlerLogout } from '../../components/HandlerLogout/HandlerLogout';

export const PlaylistPage = () => {
    const { data, isLoading } = useGetAllTracksQuery();
    const userID = useSelector(selectUserID);
    const currentTrackId = useSelector(selectCurrentTrackId);

    const tracksData = data.filter((track) =>
        track.stared_user.some((user) => user.id === userID)
    );

    return isLoading ? (
        <div>Loading</div>
    ) : (
        <div className={styles.container}>
            <Menu />
            <Centerblock
                pageType={'playlist'}
                tracksData={tracksData}
                isLoading={isLoading}
            />
            {currentTrackId !== null && (
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
