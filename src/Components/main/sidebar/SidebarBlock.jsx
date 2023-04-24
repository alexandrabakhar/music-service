import Skeleton from 'react-loading-skeleton';
import playlist1 from '../../../assets/img/playlist01.png';
import playlist2 from '../../../assets/img/playlist02.png';
import playlist3 from '../../../assets/img/playlist03.png';

import { SidebarItem } from './SidebarItem';


export const SidebarBlock = (props) => {
    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                <SidebarItem src={playlist1} isLoading={props.isLoading}/>
                <SidebarItem src={playlist2} isLoading={props.isLoading}/>
                <SidebarItem src={playlist3} isLoading={props.isLoading}/>

            </div>
        </div>
    );
}