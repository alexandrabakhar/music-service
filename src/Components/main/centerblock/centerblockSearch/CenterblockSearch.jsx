import styles from '../MainCenterblock.module.scss';
import spriteSVG from '../../../../assets/icon/sprite.svg';


export const CenterblockSearch = () => {
    return (
        <div className={`${styles.search} search`}>
            <svg className={styles['search__svg']}>
                <use xlinkHref={`${spriteSVG}#icon-search`}></use>
            </svg>
            <input
                className={styles['search__text']}
                type="search"
                placeholder="Поиск"
                name="search"
            ></input>
        </div>
    );
};
