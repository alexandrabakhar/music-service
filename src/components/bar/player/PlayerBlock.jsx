import styles from '../Bar.module.scss';
import spriteSVG from '../../../assets/icon/sprite.svg';
import { PlayerControls } from './PlayerControls';

export const PlayerBlock = ({ audioRef }) => {
    return (
        <div className={styles.block}>
            {/* <Player audioRef={audioRef} /> */}
            <div className={`${styles.player} player`}>
                <PlayerControls audioRef={audioRef} />
                <div className={`${styles['track-play']} track-play`}>
                    {/* <TrackContain author="Ты та..." album="Баста" /> */}
                    <div className={styles['contain']}>
                        <div className={styles['image']}>
                            <svg className={styles['svg']} alt="music">
                                <use xlinkHref={`${spriteSVG}#icon-note`}></use>
                            </svg>
                        </div>
                        <div className={styles['author']}>
                            <a className={styles['author-link']} href="http://">
                                {'Ты та...'}
                            </a>
                        </div>
                        <div className={styles['album']}>
                            <a className={styles['album-link']} href="http://">
                                {'Баста'}
                            </a>
                        </div>
                    </div>

                    <div className={styles['like-dis']}>
                        <div
                            className={`${styles['like']} ${styles['_btn-icon']}`}
                        >
                            <svg className={styles['like-svg']} alt="like">
                                <use xlinkHref={`${spriteSVG}#icon-like`}></use>
                            </svg>
                        </div>
                        <div
                            className={`${styles['dislike']} ${styles['_btn-icon']}`}
                        >
                            <svg
                                className={styles['dislike-svg']}
                                alt="dislike"
                            >
                                <use
                                    xlinkHref={`${spriteSVG}#icon-dislike`}
                                ></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* <VolumeBlock /> */}
            <div className={`${styles['volume-block']} volume`}>
                <div className={styles['volume-content']}>
                    <div className={styles['volume-image']}>
                        <svg className={styles['volume-svg']} alt="volume">
                            <use xlinkHref={`${spriteSVG}#icon-volume`}></use>
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
    );
};
