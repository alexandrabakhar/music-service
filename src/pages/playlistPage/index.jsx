import { Main } from '../../components/main/Main';
import { Bar } from '../../components/bar/Bar';
import { Footer } from '../../components/footer/Footer';
import styles from './playlistPage.module.scss';
import { useGetAllTracksQuery } from '../../services/catalog';
import { selectUserID } from '../../store/slices/user';
import { useSelector } from 'react-redux';


export const PlaylistPage = () => {
    const { data, isLoading } = useGetAllTracksQuery();
    const userID = useSelector(selectUserID)

    // let tracksData = [];
    const tracksData = data.filter((track) => track.stared_user.some((user) => user.id === userID))
    // if (data) {
    //     tracksData = data;
    // }


    return (
        <div className={styles.container}>
            <Main pageType={'playlist'} tracksData={tracksData} isLoading={isLoading} />
            <Bar />
            <Footer />
        </div>
    );
};
