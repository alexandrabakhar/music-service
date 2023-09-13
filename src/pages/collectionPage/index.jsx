import { useParams } from 'react-router-dom';
import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './collectionPage.module.scss';
import { useGetPlaylistByUserIDQuery } from '../../redux/services/catalogApi';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../redux/slices/user';

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
            <Main
                pageType={'collection'}
                tracksData={tracksData.items}
                isLoading={isLoading}
                heading={tracksData.name}
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
