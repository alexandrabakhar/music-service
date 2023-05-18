import { TrackContain } from './trackContain/TrackContain';
import styles from './PlayerTrackPlay.module.scss';
import spriteSVG from '../../../../../../assets/icon/sprite.svg';


export const PlayerTrackPlay = () => {
    return (
        <div className={`${styles['track-play']} track-play`}>
            <TrackContain author="Ты та..." album="Баста" />
            <div className={styles["like-dis"]}>
                <div className={`${styles["like"]} ${styles["_btn-icon"]}`}>
                    <svg className={styles["like-svg"]} alt="like">
                        <use xlinkHref={`${spriteSVG}#icon-like`}></use>
                    </svg>
                </div>
                <div className={`${styles["dislike"]} ${styles["_btn-icon"]}`}>
                    <svg className={styles["dislike-svg"]} alt="dislike">
                        <use xlinkHref={`${spriteSVG}#icon-dislike`}></use>
                    </svg>
                </div>
            </div>
        </div>
    );
};
