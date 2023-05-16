import styles from '../../../Player.module.scss';


export const PlayerControls = () => {
    return (
        <div className={styles.controls}>
            <div className={styles['btn-prev']}>
                <svg
                    className={`${styles['btn-prev-svg']} ${styles['_btn-icon']}`}
                    alt="prev"
                >
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </svg>
            </div>
            <div className={styles['btn-play']}>
                <svg
                    className={`${styles['btn-play-svg']} ${styles['_btn-icon']}`}
                    alt="play"
                >
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
            </div>
            <div className={styles['btn-next']}>
                <svg
                    className={`${styles['btn-next-svg']} ${styles['_btn-icon']}`}
                    alt="next"
                >
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </svg>
            </div>
            <div className={styles['btn-repeat']}>
                <svg
                    className={`${styles['btn-repeat-svg']} ${styles['_btn-icon']}`}
                    alt="repeat"
                >
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
            </div>
            <div className={styles['btn-shuffle']}>
                <svg
                    className={`${styles['btn-shuffle-svg']} ${styles['_btn-icon']}`}
                    alt="shuffle"
                >
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
            </div>
        </div>
    );
};
