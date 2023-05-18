import { SidebarPersonal } from './sidebarPersonal/SidebarPersonal';
import { SidebarBlock } from './sidebarBlock/SidebarBlock';
import styles from './MainSidebar.module.scss';

export const MainSidebar = (props) => {
    return (
        <div className={`${styles["sidebar"]} sidebar`}>
            <SidebarPersonal name="Sergey.Ivanov" />
            <SidebarBlock isLoading={props.pageLoading} />
        </div>
    );
};
