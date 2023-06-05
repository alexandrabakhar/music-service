import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import  styles  from './mainPage.module.scss';

export const MainPage = () => {
    // return <Container pageType='mainPage'/>;
    return (
        <div className={styles.container}>
            <Main pageType={'mainPage'} />
            <Bar />
            <Footer />
        </div>
    );
};
