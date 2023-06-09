import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import  styles  from './mainPage.module.scss';
import { useGetAllTracksQuery } from '../../services/catalog';

export const MainPage = () => {
    // return <Container pageType='mainPage'/>;

    const { data, isLoading } = useGetAllTracksQuery();
    let tracksData = [];
    if (data) {
        tracksData = data;
    }



    return (
        <div className={styles.container}>
            <Main pageType={'mainPage'} tracksData={tracksData}/>
            <Bar />
            <Footer />
        </div>
    );
};
