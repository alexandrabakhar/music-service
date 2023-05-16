import styles from '../MainNav.module.scss'

export const NavMenu = () => {
    return (
        <div className={`${styles.menu} menu`}>
            <ul className={styles["menu__list"]}>
                <li className={styles["menu__item"]}>
                    <a href="http://" className={styles["menu__link"]}>
                        Главное
                    </a>
                </li>
                <li className={styles["menu__item"]}>
                    <a href="http://" className={styles["menu__link"]}>
                        Мой плейлист
                    </a>
                </li>
                <li className={styles["menu__item"]}>
                    <a href="http://" className={styles["menu__link"]}>
                        Войти
                    </a>
                </li>
            </ul>
        </div>
    );
}