import styles from './Bar.module.scss';
import { useRef, useState } from 'react';
// import track from '../../assets/music/track.mp3';
import { PlayerProgress } from './player/PlayerProgress';
import { PlayerBlock } from './player/PlayerBlock';
import { useGetTrackByTrackIDQuery } from '../../services/catalog';
import { useSelector } from 'react-redux';
import { selectCurrentTrackId } from '../../store/slices/user';
import { useEffect } from 'react';
import { useAudio } from 'react-use';
import { useDispatch } from 'react-redux';
import spriteSVG from '../../assets/icon/sprite.svg';

import { setCurrentTrackId } from '../../store/slices/user';

export const Bar = ({ tracks }) => {
    const currentTrackId = useSelector(selectCurrentTrackId);

    const dispatch = useDispatch();
    const [isShuffle, setShuffle] = useState(false);
    const [isRepeat, setRepeat] = useState(false);

    let ind = tracks.findIndex((track) => track.id === currentTrackId);
    if (ind < 0) {
        ind = 0;
    }

    useEffect(() => {
        dispatch(setCurrentTrackId({ currentId: tracks[ind].id }));
    }, [currentTrackId, ind, tracks]);

    const playingTrack = tracks[ind];

    const [audio, state, controls] = useAudio({
        src: playingTrack.track_file,
        autoPlay: true,
        onEnded: () => {
            if (!isRepeat) {
                handleNext();
            } else {
                controls.seek(0);
                controls.play();
            }
        },
    });

    const BtnPlay = (
        <div className={styles['btn-play']} onClick={controls.play}>
            <svg
                className={`${styles['btn-play-svg']} ${styles['_btn-icon']}`}
                alt="play"
            >
                <use xlinkHref={`${spriteSVG}#icon-play`}></use>
            </svg>
        </div>
    );

    const BtnStop = (
        <div className={styles['btn-stop']} onClick={controls.pause}>
            <svg
                className={`${styles['btn-stop-svg']} ${styles['_btn-icon']}`}
                alt="play"
            >
                <use xlinkHref={`${spriteSVG}#icon-stop`}></use>
            </svg>
        </div>
    );
    const btnPlayToggle = state.playing ? BtnStop : BtnPlay;
    const getRandom = () => Math.floor(Math.random() * tracks.length);

    const handleNext = () => {
        if (isShuffle) {
            ind = getRandom();
        } else ind++;
        ind = ind > tracks.length - 1 ? null : tracks[ind].id;
        dispatch(setCurrentTrackId({ currentId: ind }));
    };

    const handlePrev = () => {
        if (isShuffle) {
            ind = getRandom();
        } else ind--;

        ind = ind < 0 ? null : tracks[ind].id;
        dispatch(setCurrentTrackId({ currentId: ind }));
    };

    return (
        <div className={styles.bar}>
            <div className={styles.content}>
                {audio}
                <PlayerProgress state={state} controls={controls} />
                <div className={styles.block}>
                    <div className={`${styles.player} player`}>
                        <div className={styles.controls}>
                            <div className={styles['btn-prev']}>
                                <svg
                                    className={`${styles['btn-prev-svg']} ${styles['_btn-icon']}`}
                                    alt="prev"
                                    onClick={handlePrev}
                                >
                                    <use
                                        xlinkHref={`${spriteSVG}#icon-prev`}
                                    ></use>
                                </svg>
                            </div>
                            {btnPlayToggle}
                            <div className={styles['btn-next']}>
                                <svg
                                    className={`${styles['btn-next-svg']} ${styles['_btn-icon']}`}
                                    alt="next"
                                    onClick={handleNext}
                                >
                                    <use
                                        xlinkHref={`${spriteSVG}#icon-next`}
                                    ></use>
                                </svg>
                            </div>

                            <div className={styles['btn-repeat']}>
                                <svg
                                    className={`${styles['btn-repeat-svg']} ${
                                        isRepeat ? styles.active : ''
                                    } ${styles['_btn-icon']}`}
                                    alt="repeat"
                                    onClick={() => setRepeat(!isRepeat)}
                                >
                                    <use
                                        xlinkHref={`${spriteSVG}#icon-repeat`}
                                    ></use>
                                </svg>
                            </div>
                            <div className={styles['btn-shuffle']}>
                                <svg
                                    className={`${styles['btn-shuffle-svg']} ${
                                        styles['_btn-icon']
                                    }
                                    ${isShuffle ? styles.active : ''}`}
                                    alt="shuffle"
                                    onClick={() => setShuffle(!isShuffle)}
                                >
                                    <use
                                        xlinkHref={`${spriteSVG}#icon-shuffle`}
                                    ></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <PlayerBlock track={playingTrack} />

                    <div className={`${styles['volume-block']} volume`}>
                        <div className={styles['volume-content']}>
                            <div className={styles['volume-image']}>
                                <svg
                                    className={styles['volume-svg']}
                                    alt="volume"
                                >
                                    <use
                                        xlinkHref={`${spriteSVG}#icon-volume`}
                                    ></use>
                                </svg>
                            </div>
                            <div
                                className={`${styles['volume-progress']} ${styles['_btn']}`}
                            >
                                <input
                                    className={`${styles['volume-progress-line']} ${styles['_btn']}`}
                                    type="range"
                                    name="range"
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// import styles from './Bar.module.scss';
// import { useRef, useState } from 'react';
// // import track from '../../assets/music/track.mp3';
// import { PlayerProgress } from './player/PlayerProgress';
// import { PlayerBlock } from './player/PlayerBlock';
// import { useGetTrackByTrackIDQuery } from '../../services/catalog';

// export const Bar = () => {
//     const audioRef = useRef(null);
//     const progressBarRef = useRef(null);

//     const [duration, setDuration] = useState(0);
//     //пока id = 8
//     const { data, isLoading } = useGetTrackByTrackIDQuery(8);

//     if (!data) {
//         return <div>Загрузка трека...</div>;
//     }
//     const { track_file } = data;
//     const trackSrc = track_file;
//     const trackData = data;

//     const onLoadedMetadata = () => {
//         const duration_in_seconds = audioRef.current.duration;
//         setDuration(duration_in_seconds);
//         // console.log(duration);
//         progressBarRef.current.max = duration_in_seconds;
//     };

//     console.dir(audioRef.current);
//     if (data ) return (
//         <div className={styles.bar}>
//             {/* <BarContent /> */}
//             <div className={styles.content}>
//                 <audio
//                     ref={audioRef}
//                     src={trackSrc}
//                     onLoadedMetadata={onLoadedMetadata}
//                 ></audio>
//                 <PlayerProgress
//                     audioRef={audioRef}
//                     progressBarRef={progressBarRef}
//                     duration={duration}
//                 />
//                 <PlayerBlock audioRef={audioRef} trackData={trackData}/>
//             </div>
//         </div>
//     );
// };
