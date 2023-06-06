// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import styles from '../../CenterblockContent.module.scss';
// import spriteSVG from '../../../../../../assets/icon/sprite.svg';

// export const PlaylistItem = (props) => {
//     return (
//         <div className={styles['playlist__item']}>
//             <div className={`${styles['playlist__track']} track`}>
//                 <div className={styles['track__title']}>
//                     <div className={styles['track__title-image']}>
//                         <svg className={styles['track__title-svg']} alt="music">
//                             <use xlinkHref={`${spriteSVG}#icon-note`}></use>
//                         </svg>
//                     </div>

//                     {props.isLoading ? (
//                         <SkeletonTheme
//                             baseColor="#313131"
//                             highlightColor="#313131"
//                         >
//                             <Skeleton
//                                 containerClassName="flex-1"
//                                 borderRadius={0}
//                                 width={150}
//                                 height={17}
//                                 count={1}
//                             />
//                         </SkeletonTheme>
//                     ) : (
//                         <div className={styles['track__title-text']}>
//                             <a
//                                 className={styles['track__title-link']}
//                                 href="http://"
//                             >
//                                 {props.title}

//                                 <span
//                                     className={styles['track__title-span']}
//                                 ></span>
//                             </a>
//                         </div>
//                     )}
//                 </div>
//                 {props.isLoading ? (
//                     <SkeletonTheme baseColor="#313131" highlightColor="#313131">
//                         <Skeleton
//                             containerClassName="flex-1"
//                             borderRadius={0}
//                             width={150}
//                             height={17}
//                             count={1}
//                         />
//                     </SkeletonTheme>
//                 ) : (
//                     <div className={styles['track__author']}>
//                         <a
//                             className={styles['track__author-link']}
//                             href="http://"
//                         >
//                             {props.author || <Skeleton />}
//                         </a>
//                     </div>
//                 )}

//                 {props.isLoading ? (
//                     <SkeletonTheme baseColor="#313131" highlightColor="#313131">
//                         <Skeleton
//                             containerClassName="flex-1"
//                             borderRadius={0}
//                             width={150}
//                             height={17}
//                             count={1}
//                         />
//                     </SkeletonTheme>
//                 ) : (
//                     <div className={styles['track__album']}>
//                         <a
//                             className={styles['track__album-link']}
//                             href="http://"
//                         >
//                             {props.album}
//                         </a>
//                     </div>
//                 )}

//                 {props.isLoading ? (
//                     <SkeletonTheme baseColor="#313131" highlightColor="#313131">
//                         <Skeleton
//                             containerClassName="flex-1"
//                             borderRadius={0}
//                             width={50}
//                             height={17}
//                             count={1}
//                         />
//                     </SkeletonTheme>
//                 ) : (
//                     <div className={styles['track__time']}>
//                         <svg className={styles['track__time-svg']} alt="time">
//                             <use xlinkHref={`${spriteSVG}#icon-like`}></use>
//                         </svg>
//                         <span className={styles['track__time-text']}>
//                             {props.time}
//                         </span>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../CenterblockContent.module.scss';
import spriteSVG from '../../../../../../assets/icon/sprite.svg';
import {
    useSetLikeMutation,
    useSetUnlikeMutation,
} from '../../../../../../services/catalog';
import { useSelector } from 'react-redux';
import { selectUserID } from '../../../../../../store/slices/user';
import { Children } from 'react';
import { useEffect, useState } from 'react';

export const PlaylistItem = ({ track, isLoading }) => {
    const durationOnMinutes = (track['duration_in_seconds'] / 60).toFixed(2);

    const [setLike] = useSetLikeMutation();
    const [setUnlike] = useSetUnlikeMutation();
    const userID = useSelector(selectUserID);
    const staredUsers = track['stared_user'];
    //настроить из кэша!
    const [isFavorite, setFavorite] = useState(null);

    useEffect(() => {
        staredUsers.some((user) => user.id === userID)
            ? setFavorite(true)
            : setFavorite(false);
    }, [isFavorite]);

    const handleSetLike = async () => {
        if (isFavorite) {
          await setUnlike(track.id)
          setFavorite(false)
        } else {
          await setLike(track.id)
          setFavorite(true)
        }
        console.log(isFavorite);
      }

    return (
        <div className={styles['playlist__item']}>
            <div className={`${styles['playlist__track']} track`}>
                <div className={styles['track__title']}>
                    <div className={styles['track__title-image']}>
                        <svg className={styles['track__title-svg']} alt="music">
                            <use xlinkHref={`${spriteSVG}#icon-note`}></use>
                        </svg>
                    </div>

                    {isLoading ? (
                        <SkeletonTheme
                            baseColor="#313131"
                            highlightColor="#313131"
                        >
                            <Skeleton
                                containerClassName="flex-1"
                                borderRadius={0}
                                width={150}
                                height={17}
                                count={1}
                            />
                        </SkeletonTheme>
                    ) : (
                        <div className={styles['track__title-text']}>
                            <a
                                className={styles['track__title-link']}
                                href="http://"
                            >
                                {track.name}

                                <span
                                    className={styles['track__title-span']}
                                ></span>
                            </a>
                        </div>
                    )}
                </div>
                {isLoading ? (
                    <SkeletonTheme baseColor="#313131" highlightColor="#313131">
                        <Skeleton
                            containerClassName="flex-1"
                            borderRadius={0}
                            width={150}
                            height={17}
                            count={1}
                        />
                    </SkeletonTheme>
                ) : (
                    <div className={styles['track__author']}>
                        <a
                            className={styles['track__author-link']}
                            href="http://"
                        >
                            {track.author || <Skeleton />}
                        </a>
                    </div>
                )}

                {isLoading ? (
                    <SkeletonTheme baseColor="#313131" highlightColor="#313131">
                        <Skeleton
                            containerClassName="flex-1"
                            borderRadius={0}
                            width={150}
                            height={17}
                            count={1}
                        />
                    </SkeletonTheme>
                ) : (
                    <div className={styles['track__album']}>
                        <a
                            className={styles['track__album-link']}
                            href="http://"
                        >
                            {track.album}
                        </a>
                    </div>
                )}

                {isLoading ? (
                    <SkeletonTheme baseColor="#313131" highlightColor="#313131">
                        <Skeleton
                            containerClassName="flex-1"
                            borderRadius={0}
                            width={50}
                            height={17}
                            count={1}
                        />
                    </SkeletonTheme>
                ) : (
                    <svg className={styles['track__like-svg']} alt="like" onClick={handleSetLike}>
                        <use xlinkHref={isFavorite ? `${spriteSVG}#icon-liked` : `${spriteSVG}#icon-disliked`}></use>
                    </svg>
                )}

                {isLoading ? (
                    <SkeletonTheme baseColor="#313131" highlightColor="#313131">
                        <Skeleton
                            containerClassName="flex-1"
                            borderRadius={0}
                            width={50}
                            height={17}
                            count={1}
                        />
                    </SkeletonTheme>
                ) : (
                    <div className={styles['track__time']}>
                        <span className={styles['track__time-text']}>
                            {durationOnMinutes}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
// var minutes = Math.floor(timestamp / 60);
