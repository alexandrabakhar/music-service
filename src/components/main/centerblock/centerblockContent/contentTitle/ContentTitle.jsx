import styles from '../CenterblockContent.module.scss';

export const ContentTitle = () => {
    return (
        <div className={`${styles.title} playlist-title`}>
            <div className={`${styles["playlist-title__col"]} ${styles.col01}`}>Трек</div>
            <div className={`${styles["playlist-title__col"]} ${styles.col02}`}>ИСПОЛНИТЕЛЬ</div>
            <div className={`${styles["playlist-title__col"]} ${styles.col03}`}>АЛЬБОМ</div>
            <div className={`${styles["playlist-title__col"]} ${styles.col04}`}>
                <svg className={styles["playlist-title__svg"]} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    );
};
