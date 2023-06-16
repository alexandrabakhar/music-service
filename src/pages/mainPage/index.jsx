import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './mainPage.module.scss';
import { useGetAllTracksQuery } from '../../services/catalog';
import { selectCurrentTrackId } from '../../store/slices/user';
import { useSelector } from 'react-redux';

export const MainPage = () => {
    // return <Container pageType='mainPage'/>;

    const { data, isLoading } = useGetAllTracksQuery();
    const tracksData = data;
console.log(tracksData);
    // console.log(data);

    // if (isLoading) {
    //     return <p>Загрузка</p>
    // }
    if (!isLoading) {
        return (
            <div className={styles.container}>
                <Main pageType={'mainPage'} tracksData={tracksData} />

                <Bar tracks={tracksData} />

                <Footer />
            </div>
        );
    }
};
