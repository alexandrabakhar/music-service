import styles from '../../../Player.module.scss';
import spriteSVG from '../../../../../../assets/icon/sprite.svg';
import { useState } from 'react';

export const PlayerControls = ({ audioRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playingControl = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            return;
        }
        audioRef.current.play();
        setIsPlaying(true);
    };

    const BtnPlay = (
        <div className={styles['btn-play']} onClick={playingControl}>
            <svg
                className={`${styles['btn-play-svg']} ${styles['_btn-icon']}`}
                alt="play"
            >
                <use xlinkHref={`${spriteSVG}#icon-play`}></use>
            </svg>
        </div>
    );

    const BtnStop = (
        <div className={styles['btn-stop']} onClick={playingControl}>
            <svg
                className={`${styles['btn-stop-svg']} ${styles['_btn-icon']}`}
                alt="play"
            >
                <use xlinkHref={`${spriteSVG}#icon-stop`}></use>
            </svg>
        </div>
    );
    const BtnPlaying = isPlaying ? BtnStop : BtnPlay;

    return (
        <div className={styles.controls}>
            <div className={styles['btn-prev']}>
                <svg
                    className={`${styles['btn-prev-svg']} ${styles['_btn-icon']}`}
                    alt="prev"
                >
                    <use xlinkHref={`${spriteSVG}#icon-prev`}></use>
                </svg>
            </div>
            {BtnPlaying}
            <div className={styles['btn-next']}>
                <svg
                    className={`${styles['btn-next-svg']} ${styles['_btn-icon']}`}
                    alt="next"
                >
                    <use xlinkHref={`${spriteSVG}#icon-next`}></use>
                </svg>
            </div>
            <div className={styles['btn-repeat']}>
                <svg
                    className={`${styles['btn-repeat-svg']} ${styles['_btn-icon']}`}
                    alt="repeat"
                >
                    <use xlinkHref={`${spriteSVG}#icon-repeat`}></use>
                </svg>
            </div>
            <div className={styles['btn-shuffle']}>
                <svg
                    className={`${styles['btn-shuffle-svg']} ${styles['_btn-icon']}`}
                    alt="shuffle"
                >
                    <use xlinkHref={`${spriteSVG}#icon-shuffle`}></use>
                </svg>
            </div>
        </div>
    );
};
