import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './mainPage.module.scss';
import { useGetAllTracksQuery } from '../../services/catalog';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../store/slices/user';

export const MainPage = () => {
    const { data, isLoading } = useGetAllTracksQuery();
    const tracksData = data;
    const currentTrackId = useSelector(selectCurrentTrackId);
    console.log(tracksData);
    return isLoading ? (
        <div>Loading</div>
    ) : (
        <div className={styles.container}>
            <Main pageType={'mainPage'} tracksData={tracksData} />
            {currentTrackId !== null && <Bar tracks={tracksData} currentTrackId={currentTrackId}/>}

            <Footer />
        </div>
    );
    // if (!isLoading) {
    //     return (
    //         <div className={styles.container}>
    //             <Main pageType={'mainPage'} tracksData={tracksData} />

    //             <Bar tracks={tracksData} />

    //             <Footer />
    //         </div>
    //     );
    // }
};
