import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../CenterblockContent.module.scss';

export const PlaylistItem = (props) => {
    return (
        <div className={styles['playlist__item']}>
            <div className={`${styles['playlist__track']} track`}>
                <div className={styles['track__title']}>
                    <div className={styles['track__title-image']}>
                        <svg className={styles['track__title-svg']} alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>

                    {props.isLoading ? (
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
                                {props.title}

                                <span
                                    className={styles['track__title-span']}
                                ></span>
                            </a>
                        </div>
                    )}
                </div>
                {props.isLoading ? (
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
                            {props.author || <Skeleton />}
                        </a>
                    </div>
                )}

                {props.isLoading ? (
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
                            {props.album}
                        </a>
                    </div>
                )}

                {props.isLoading ? (
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
                        <svg className={styles['track__time-svg']} alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className={styles['track__time-text']}>
                            {props.time}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
