import { SidebarPersonal } from './sidebarPersonal/SidebarPersonal';
import { SidebarBlock } from './sidebarBlock/SidebarBlock';
import styles from './MainSidebar.module.scss';

export const MainSidebar = (props) => {
    if (props.pageType === 'mainPage') {
        return (
            <div className={`${styles['sidebar']} sidebar`}>
                <SidebarPersonal name="Sergey.Ivanov" />
                <SidebarBlock />
            </div>
        );
    }
    if (props.pageType === 'playlist') {
        return (
            <div className={`${styles['sidebar']} sidebar`}>
                <SidebarPersonal name="Sergey.Ivanov" />
            </div>
        );
    }
};
