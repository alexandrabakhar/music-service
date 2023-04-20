export const BarContent = () => {
    return (
        <div className="bar__content">
            <PlayerProgress />
            <PlayerBlock />
        </div>
    );
};

function PlayerProgress() {
    return <div className="bar__player-progress"></div>;
}

function PlayerBlock() {
    return (
        <div className="bar__player-block">
            <Player />
            <VolumeBlock />
        </div>
    );
}

function Player() {
    return (
        <div className="bar__player player">
            <PlayerControls />
            <PlayerTrackPlay />
        </div>
    );
}
function PlayerControls() {
    return (
        <div className="player__controls">
            <div className="player__btn-prev">
                <svg className="player__btn-prev-svg" alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </svg>
            </div>
            <div className="player__btn-play _btn">
                <svg className="player__btn-play-svg" alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
            </div>
            <div className="player__btn-next">
                <svg className="player__btn-next-svg" alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </svg>
            </div>
            <div className="player__btn-repeat _btn-icon">
                <svg className="player__btn-repeat-svg" alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
            </div>
            <div className="player__btn-shuffle _btn-icon">
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
            </div>
        </div>
    );
}

function PlayerTrackPlay() {
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
}

function TrackContain(props) {
    return (
        <div className="track-play__contain">
            <div className="track-play__image">
                <svg className="track-play__svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className="track-play__author">
                <a className="track-play__author-link" href="http://">
                    {props.author}
                </a>
            </div>
            <div className="track-play__album">
                <a className="track-play__album-link" href="http://">
                    {props.album}
                </a>
            </div>
        </div>
    );
}

function VolumeBlock() {
    return (
        <div className="bar__volume-block volume">
            <div className="volume__content">
                <div className="volume__image">
                    <svg className="volume__svg" alt="volume">
                        <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </svg>
                </div>
                <div className="volume__progress _btn">
                    <input
                        className="volume__progress-line _btn"
                        type="range"
                        name="range"
                    ></input>
                </div>
            </div>
        </div>
    );
}
