import spriteSVG from '../../assets/icon/sprite.svg';
import styles from './PlayerControl.module.scss';


export const PlayerControl = ({ type, onClick, isActive }) => {
    return (
        <div className={styles[`btn-${type}`]}>
            <svg
                className={`${styles[`btn-${type}-svg`]} ${isActive ? styles.active : ''}`}
                alt={type}
                onClick={onClick}
            >
                <use xlinkHref={`${spriteSVG}#icon-${type}`}></use>
            </svg>
        </div>
    );
};
