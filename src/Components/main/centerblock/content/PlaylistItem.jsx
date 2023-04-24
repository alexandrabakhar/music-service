import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PlaylistItem = (props) => {
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
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
                        <div className="track__title-text">
                            <a className="track__title-link" href="http://">
                                {props.title}

                                <span className="track__title-span"></span>
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
                    <div className="track__author">
                        <a className="track__author-link" href="http://">
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
                    <div className="track__album">
                        <a className="track__album-link" href="http://">
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
                    <div className="track__time">
                        <svg className="track__time-svg" alt="time">
                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </svg>
                        <span className="track__time-text">{props.time}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
