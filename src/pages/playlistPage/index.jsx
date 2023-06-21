import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './playlistPage.module.scss';
import { useGetAllTracksQuery } from '../../services/catalog';
import { selectUserID } from '../../store/slices/user';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../store/slices/user';

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
            <Main
                pageType={'playlist'}
                tracksData={tracksData}
                isLoading={isLoading}
            />
            {currentTrackId !== null && (
                <Bar
                    tracks={tracksData.items}
                    currentTrackId={currentTrackId}
                />
            )}
            <Footer />
        </div>
    );
};
