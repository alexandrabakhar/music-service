import styles from '../MainNav.module.scss';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from './themeSwitcher/ThemeSwitcher';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../../../store/slices/user';

export const NavMenu = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(setLogout());
        localStorage.clear();
    };

    return (
        <div className={`${styles.menu} menu`}>
            <ul className={styles['menu__list']}>
                <li className={styles['menu__item']}>
                    <NavLink to="/" className={styles['menu__link']}>
                        Главная
                    </NavLink>
                </li>
                <li className={styles['menu__item']}>
                    <NavLink to="/playlist" className={styles['menu__link']}>
                        Мой плейлист
                    </NavLink>
                </li>
                <li className={styles['menu__item']} onClick={onLogout}>
                    <NavLink to="/login" className={styles['menu__link']}>
                        Выйти
                    </NavLink>
                </li>
                <ThemeSwitcher />
            </ul>
        </div>
    );
};
