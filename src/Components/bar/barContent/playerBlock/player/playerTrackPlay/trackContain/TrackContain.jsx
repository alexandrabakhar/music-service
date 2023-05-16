import styles from '../PlayerTrackPlay.module.scss';

export const TrackContain = (props) => {
    return (
        <div className={styles['contain']}>
            <div className={styles['image']}>
                <svg className={styles['svg']} alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
            </div>
            <div className={styles['author']}>
                <a className={styles['author-link']} href="http://">
                    {props.author}
                </a>
            </div>
            <div className={styles['album']}>
                <a className={styles['album-link']} href="http://">
                    {props.album}
                </a>
            </div>
        </div>
    );
};
