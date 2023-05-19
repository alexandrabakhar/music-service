import styles from '../PlayerTrackPlay.module.scss';
import spriteSVG from '../../../../../../../assets/icon/sprite.svg';


export const TrackContain = (props) => {
    return (
        <div className={styles['contain']}>
            <div className={styles['image']}>
                <svg className={styles['svg']} alt="music">
                    <use xlinkHref={`${spriteSVG}#icon-note`}></use>
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
