import { ContentTitle } from './contentTitle/ContentTitle';
import { ContentPlaylist } from './contentPlaylist/ContentPlaylist';

import styles from './CenterblockContent.module.scss';

export const CenterblockContent = ( {pageType}) => {
    return (
        <div className={styles.content}>
            <ContentTitle />
            <ContentPlaylist pageType={pageType} />
        </div>
    );
};
