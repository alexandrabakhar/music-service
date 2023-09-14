import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../MainSidebar.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    setCurrentTrackId,
    setIsPlaying,
} from '../../../../../redux/slices/user';

export const SidebarItem = ({ isLoading, collectionType, src }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="sidebar__item">
            {isLoading ? (
                <SkeletonTheme baseColor="#313131" highlightColor="#313131">
                    <Skeleton
                        containerClassName="flex-1"
                        width={250}
                        height={150}
                    />
                </SkeletonTheme>
            ) : (
                <img
                    className={styles.img}
                    src={src}
                    alt={collectionType}
                    onClick={() => {
                        dispatch(setCurrentTrackId({ currentTrackId: null }));
                        navigate(`/collection/${collectionType}`);
                    }}
                ></img>
            )}
        </div>
    );
};
