import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import  styles  from './playlistPage.module.scss';


export const PlaylistPage = () => {

    return (
        <div className={styles.container}>
            <Main pageType={'playlist'} />
            <Bar />
            <Footer />
        </div>
    );
};
