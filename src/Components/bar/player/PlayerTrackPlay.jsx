import { TrackContain } from "../TrackContain";

export const PlayerTrackPlay = () => {
    return (
        <div className="player__track-play track-play">
            <TrackContain author="Ты та..." album="Баста" />
            <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                </div>
                <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                </div>
            </div>
        </div>
    );
};
