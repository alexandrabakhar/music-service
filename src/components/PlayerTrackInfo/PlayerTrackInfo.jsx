import styles from './PlayerTrackInfo.module.scss';
import spriteSVG from '../../assets/icon/sprite.svg';
import { SwitcherStatusLike } from '../SwitcherStatusLike/SwitcherStatusLike';

export const PlayerTrackInfo = ({ track }) => {
    const { name, author } = track;
    return (
        <div className={`${styles['track-play']} track-play`}>
            <div className={styles['contain']}>
                <div className={styles['image']}>
                    <svg className={styles['svg']} alt="music">
                        <use xlinkHref={`${spriteSVG}#icon-note`}></use>
                    </svg>
                </div>
                <div className={styles['author']}>
                    <a className={styles['author-link']} href="http://">
                        {name}
                    </a>
                </div>
                <div className={styles['album']}>
                    <a className={styles['album-link']} href="http://">
                        {author}
                    </a>
                </div>
            </div>

            <div className={`${styles['like']}`}>
                <SwitcherStatusLike track={track} />
            </div>
        </div>
    );
};
