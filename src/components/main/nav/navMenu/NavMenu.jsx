import styles from '../MainNav.module.scss'
import { NavLink } from "react-router-dom";

export const NavMenu = () => {
    const removeCookie = () => {
        document.cookie = `token=;expires=${new Date(0)}`;
    }
    return (
        <div className={`${styles.menu} menu`}>
            <ul className={styles["menu__list"]}>
                <li className={styles["menu__item"]}>
                    <NavLink to='/' className={styles["menu__link"]}>
                        Главная
                    </NavLink>
                </li>
                <li className={styles["menu__item"]}>
                    <NavLink to='/playlist' className={styles["menu__link"]}>
                        Мой плейлист
                    </NavLink>
                </li>
                <li className={styles["menu__item"]} onClick={removeCookie}>
                    <NavLink to='/login' className={styles["menu__link"]}>
                        Выйти
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}