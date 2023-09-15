import { Centerblock } from '../../components/Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import { Footer } from '../../components/footer/Footer';
import styles from './mainPage.module.scss';
import { useGetAllTracksQuery } from '../../redux/services/catalogApi';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../redux/slices/user';
import { Menu } from '../../components/Menu/Menu';
import { CollectionsList } from '../../components/CollectionsList/CollectionsList';
import { HandlerLogout } from '../../components/HandlerLogout/HandlerLogout';

export const MainPage = () => {
    const { data, isLoading } = useGetAllTracksQuery();
    const tracksData = data;
    const currentTrackId = useSelector(selectCurrentTrackId);

    return isLoading ? (
        <div>Loading</div>
    ) : (
        <div className={styles.container}>
            <Menu />
            <CollectionsList />

            <Centerblock pageType={'mainPage'} tracksData={tracksData} />
            {currentTrackId && (
                <Player tracks={tracksData} currentTrackId={currentTrackId} />
            )}
            <HandlerLogout />

            <Footer />
        </div>
    );
};
