import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';

import switchSVG from '../../assets/icon/switch.svg';
import S from './HandlerThemeSwitch.module.scss';

export const HandlerThemeSwitch = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <li className={S['menu__item']}>
            <svg
                className={`${S['btn__switch-svg']}`}
                alt="switch"
                data-testid="theme-switcher-svg"
                onClick={changeTheme}
            >
                <use
                    xlinkHref={`${switchSVG}#icon-${
                        theme === 'light' ? 'day' : 'night'
                    }`}
                    data-testid="theme-switcher-use"
                ></use>
            </svg>
        </li>
    );
};
