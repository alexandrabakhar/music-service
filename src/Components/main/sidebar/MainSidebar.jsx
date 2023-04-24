import { SidebarPersonal } from './SidebarPersonal';
import { SidebarBlock } from './SidebarBlock';

export const MainSidebar = (props) => {
    return (
        <div className="main__sidebar sidebar">
            <SidebarPersonal name="Sergey.Ivanov" />
            <SidebarBlock isLoading={props.pageLoading} />
        </div>
    );
};
