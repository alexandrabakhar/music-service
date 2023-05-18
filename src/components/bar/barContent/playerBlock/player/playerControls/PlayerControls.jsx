import styles from '../../../Player.module.scss';
import spriteSVG from '../../../../../../assets/icon/sprite.svg';

export const PlayerControls = () => {
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
            <div className={styles['btn-play']}>
                <svg
                    className={`${styles['btn-play-svg']} ${styles['_btn-icon']}`}
                    alt="play"
                >
                    <use xlinkHref={`${spriteSVG}#icon-play`}></use>
                </svg>
            </div>
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
