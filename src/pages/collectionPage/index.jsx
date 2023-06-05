// import { App } from '../App';
import { useParams } from 'react-router-dom';
import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles  from './collectionPage.module.scss';


export const CollectionPage = () => {
    const params = useParams();
    console.log(params);
    return (
        <div className={styles.container}>
            <Main pageType={'collectionPage'} />
            <Bar />
            <Footer />
        </div>
    );
};
