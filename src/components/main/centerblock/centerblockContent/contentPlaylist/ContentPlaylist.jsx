import { PlaylistItem } from './playlistItem/PlaylistItem';
import styles from '../CenterblockContent.module.scss';
import {
    useGetAllTracksQuery,
    useGetPlaylistByUserIDQuery,
} from '../../../../../services/catalog';

export const ContentPlaylist = ({ pageType }) => {
    // if (pageType === 'playlist') {
    //     const { data, error, isLoading } = useGetPlaylistByUserIDQuery();

    // }

    const { data, isLoading } = useGetAllTracksQuery();
    let tracksData = [];
    if (data) {
        tracksData = data;
    }

    return (
        <div className={`${styles.playlist} playlist`}>
            {tracksData.map((track) => (
                <PlaylistItem
                    key={track.id}
                    track={track}
                    isLoading={isLoading}
                />
            ))}
            </div>

        // <div className={`${styles.playlist} playlist`}>
        //     <PlaylistItem
        //         title="Guilt"
        //         author="Nero"
        //         album="Welcome Reality"
        //         time="4:44"
                
        //     />
        //     <PlaylistItem
        //         title="Elektro"
        //         author="Dynoro, Outwork, Mr. Gee"
        //         album="Elektro"
        //         time="2:22"
                
        //     />
        //     <PlaylistItem
        //         title="I’m Fire"
        //         author="Ali Bakgor"
        //         album="I’m Fire"
        //         time="2:22"
                
        //     />
        //     <PlaylistItem
        //         title="Non Stop"
        //         author="Стоункат, Psychopath"
        //         album="Non Stop"
        //         time="4:12"
                
        //     />
        //     <PlaylistItem
        //         title="Run Run"
        //         author="Jaded, Will Clarke, AR/CO"
        //         album="Run Run"
        //         time="2:54"
                
        //     />
        //     <PlaylistItem
        //         title="Eyes on Fire"
        //         author="Blue Foundation, Zeds Dead"
        //         album="Eyes on Fire"
        //         time="5:20"
                
        //     />
        //     <PlaylistItem
        //         title="Mucho Bien"
        //         author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        //         album="Mucho Bien"
        //         time="3:41"
                
        //     />
        //     <PlaylistItem
        //         title="Knives n Cherries"
        //         author="minthaze"
        //         album="Captivating"
        //         time="1:48"
                
        //     />
        //     <PlaylistItem
        //         title="How Deep Is Your Love"
        //         author="Calvin Harris, Disciples"
        //         album="How Deep Is Your Love"
        //         time="3:32"
                
        //     />
        //     <PlaylistItem
        //         title="Morena"
        //         author="Tom Boxer"
        //         album="Soundz Made in Romania"
        //         time="3:36"
                
        //     />
        // </div>
    );
};
