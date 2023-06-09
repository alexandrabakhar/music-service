// import { App } from '../App';
import { useParams } from 'react-router-dom';
import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles  from './collectionPage.module.scss';
import { useGetPlaylistByUserIDQuery } from '../../services/catalog';


export const CollectionPage = () => {
    const params = useParams()
    const id = Number(params.id)

    const { data, isLoading } = useGetPlaylistByUserIDQuery(id);
    let tracksData = [];
    let heading = '';
    // console.log(data);

    if (data) {
        tracksData = data.items;
        heading = data.name

    }


    return (
        <div className={styles.container}>
            <Main pageType={'collection'} tracksData={tracksData} isLoading={isLoading} heading={heading}/>
            <Bar />
            <Footer />
        </div>
    );
};
