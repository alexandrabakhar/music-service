import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../CenterblockContent.module.scss';
import spriteSVG from '../../../../assets/icon/sprite.svg';
import {
    useSetLikeMutation,
    useSetUnlikeMutation,
} from '../../../../services/catalog';
import { useSelector } from 'react-redux';
import { selectUserID } from '../../../../store/slices/user';

import { useEffect, useState } from 'react';
import { HandlerStatusLike } from '../../../HandlerStatusLike';
import { useDispatch } from 'react-redux';
import { setCurrentTrackId } from '../../../../store/slices/user';

export const PlaylistItem = ({ track, isLoading }) => {
    const durationOnMinutes = (track['duration_in_seconds'] / 60).toFixed(2);

    const dispatch = useDispatch();

    //есть проблема с авторизацией после какого-то количества времени


    const handleChooseTrack = () => {
        dispatch(setCurrentTrackId({ currentId: track.id }));
    };
    return (
        <div className={styles['playlist__item']} onClick={handleChooseTrack}>
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
                            <span className={styles['track__title-link']}>
                                {track.name}

                                <span
                                    className={styles['track__title-span']}
                                ></span>
                            </span>
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
                        <span className={styles['track__author-link']}>
                            {track.author || <Skeleton />}
                        </span>
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
                        <span
                            className={styles['track__album-link']}
                            href="http://"
                        >
                            {track.album}
                        </span>
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
                    // <svg
                    //     className={styles['track__like-svg']}
                    //     alt="like"
                    //     onClick={handleSetLike}
                    // >
                    //     <use
                    //         xlinkHref={
                    //             isFavorite
                    //                 ? `${spriteSVG}#icon-liked`
                    //                 : `${spriteSVG}#icon-disliked`
                    //         }
                    //     ></use>
                    // </svg>
                    <HandlerStatusLike track={track} />
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
