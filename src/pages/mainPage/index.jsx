import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './mainPage.module.scss';
import { useGetAllTracksQuery } from '../../redux/services/catalogApi';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../redux/slices/user';

export const MainPage = () => {
    const { data, isLoading } = useGetAllTracksQuery();
    const tracksData = data;
    const currentTrackId = useSelector(selectCurrentTrackId);

    return isLoading ? (
        <div>Loading</div>
    ) : (
        <div className={styles.container}>
            <Main pageType={'mainPage'} tracksData={tracksData} />
            {currentTrackId !== null && (
                <Bar tracks={tracksData} currentTrackId={currentTrackId} />
            )}

            <Footer />
        </div>
    );
};
