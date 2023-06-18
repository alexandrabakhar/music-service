import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './mainPage.module.scss';
import { useGetAllTracksQuery } from '../../services/catalog';

export const MainPage = () => {
    const { data, isLoading } = useGetAllTracksQuery();
    const tracksData = data;
    
    return isLoading ? (
        <div>Loading</div>
    ) : (
        <div className={styles.container}>
            <Main pageType={'mainPage'} tracksData={tracksData} />

            <Bar tracks={tracksData} />

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
