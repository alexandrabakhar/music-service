import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../MainSidebar.module.scss';
import { NavLink } from 'react-router-dom';

export const SidebarItem = (props) => {
    return (
        <div className="sidebar__item">
            {props.isLoading ? (
                <SkeletonTheme baseColor="#313131" highlightColor="#313131">
                    <Skeleton
                        containerClassName="flex-1"
                        width={250}
                        height={150}
                    />
                </SkeletonTheme>
            ) : (
                <NavLink
                    className={styles.link}
                    to={`/collection/${props.collectionType}`}
                >
                    <img
                        className={styles.img}
                        src={props.src}
                        alt={props.collectionType}
                    ></img>
                </NavLink>
            )}
        </div>
    );
};
