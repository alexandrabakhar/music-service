import { ContentTitle } from './contentTitle/ContentTitle';
import { ContentPlaylist } from './contentPlaylist/ContentPlaylist';

import styles from './CenterblockContent.module.scss';

export const CenterblockContent = (props) => {
    return (
        <div className={styles.content}>
            <ContentTitle />
            <ContentPlaylist isLoading={props.isLoading} />
        </div>
    );
};
