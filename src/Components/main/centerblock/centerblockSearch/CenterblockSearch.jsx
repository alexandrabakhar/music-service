import styles from '../MainCenterblock.module.scss';

export const CenterblockSearch = () => {
    return (
        <div className={`${styles.search} search`}>
            <svg className={styles['search__svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
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
