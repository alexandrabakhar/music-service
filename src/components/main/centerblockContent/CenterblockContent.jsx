import { ContentTitle } from './contentTitle/ContentTitle';
import { PlaylistItem } from './playlistItem/PlaylistItem';
import styles from './CenterblockContent.module.scss';

export const CenterblockContent = ({ tracksData, isLoading }) => {

    return (
        <div className={styles.content}>
            <ContentTitle />

            <div className={`${styles.playlist} playlist`}>
                {tracksData.map((track) => (
                    <PlaylistItem
                        key={track.id}
                        track={track}
                        isLoading={isLoading}
                        
                    />
                ))}
            </div>
        </div>
    );
};
