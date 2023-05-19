import styles from './VolumeBlock.module.scss';
import spriteSVG from '../../../../../assets/icon/sprite.svg';


export const VolumeBlock = () => {
    return (
        <div className={`${styles['volume-block']} volume`}>
            <div className={styles['content']}>
                <div className={styles['image']}>
                    <svg className={styles['svg']} alt="volume">
                        <use xlinkHref={`${spriteSVG}#icon-volume`}></use>
                    </svg>
                </div>
                <div className={`${styles['progress']} ${styles['_btn']}`}>
                    <input
                        className={`${styles['progress-line']} ${styles['_btn']}`}
                        type="range"
                        name="range"
                    ></input>
                </div>
            </div>
        </div>
    );
};
