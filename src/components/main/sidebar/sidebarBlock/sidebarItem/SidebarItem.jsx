import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../MainSidebar.module.scss';

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
                <a className={styles.link} href="#">
                    <img
                        className={styles.img}
                        src={props.src}
                        alt="day's playlist"
                    ></img>
                </a>
            )}
        </div>
    );
};
