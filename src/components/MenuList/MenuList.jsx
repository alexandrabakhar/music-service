import S from './MenuList.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../redux/slices/user';
import { HandlerThemeSwitch } from '../HandlerThemeSwitch/HandlerThemeSwitch';

export const MenuList = () => {
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(setLogout());
        localStorage.clear();
    };

    return (
        <ul className={S.list}>
            <li className={S.item}>
                <NavLink to="/" className={S.link}>
                    Главная
                </NavLink>
            </li>
            <li className={S.item}>
                <NavLink to="/playlist" className={S.link}>
                    Мой плейлист
                </NavLink>
            </li>
            <li className={S.item} onClick={onLogout}>
                <NavLink to="/login" className={S.link}>
                    Выйти
                </NavLink>
            </li>
            <HandlerThemeSwitch />
        </ul>
    );
};
