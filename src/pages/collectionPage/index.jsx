// import { App } from '../App';
import { useParams } from 'react-router-dom';
import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './collectionPage.module.scss';
import { useGetPlaylistByUserIDQuery } from '../../services/catalog';

export const CollectionPage = () => {
    const params = useParams();
    const id = Number(params.id);

    const { data, isLoading } = useGetPlaylistByUserIDQuery(id);
    let tracksData = data;

    if (!isLoading) {
        return (
            <div className={styles.container}>
                <Main
                    pageType={'collection'}
                    tracksData={tracksData.items}
                    isLoading={isLoading}
                    heading={tracksData.name}
                />
                <Bar tracks={tracksData.items} />
                <Footer />
            </div>
        );
    }

};
