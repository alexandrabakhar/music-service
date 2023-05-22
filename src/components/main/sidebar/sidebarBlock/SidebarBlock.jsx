import playlist1 from '../../../../assets/img/playlist01.png';
import playlist2 from '../../../../assets/img/playlist02.png';
import playlist3 from '../../../../assets/img/playlist03.png';

import { SidebarItem } from './sidebarItem/SidebarItem';
import styles from '../MainSidebar.module.scss';

export const SidebarBlock = (props) => {
    return (
        <div className={styles.block}>
            <div className={styles.list}>
                <SidebarItem src={playlist1} collectionType={1} isLoading={props.isLoading} />
                <SidebarItem src={playlist2} collectionType={2} isLoading={props.isLoading} />
                <SidebarItem src={playlist3} collectionType={3} isLoading={props.isLoading} />
            </div>
        </div>
    );
};
