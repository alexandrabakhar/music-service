import playlist1 from '../../assets/img/playlist01.png';
import playlist2 from '../../assets/img/playlist02.png';
import playlist3 from '../../assets/img/playlist03.png';

export const MainSidebar = () => {
    return (
        <div className="main__sidebar sidebar">
            <SidebarPersonal name="Sergey.Ivanov" />
            <SidebarBlock />
        </div>
    );
};

function SidebarPersonal(props) {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{props.name}</p>
            <div className="sidebar__avatar"></div>
        </div>
    );
}

function SidebarBlock() {
    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                <SidebarItem src={playlist1} />
                <SidebarItem src={playlist2} />
                <SidebarItem src={playlist3} />
            </div>
        </div>
    );
}

function SidebarItem(props) {
    return (
        <div className="sidebar__item">
            <a className="sidebar__link" href="#">
                <img
                    className="sidebar__img"
                    src={props.src}
                    alt="day's playlist"
                ></img>
            </a>
        </div>
    );
}
