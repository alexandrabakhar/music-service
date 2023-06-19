import React, { useContext } from 'react';
import { ThemeContext } from '../../../../../providers/ThemeProvider';

import switchSVG from '../../../../../assets/icon/switch.svg';
import styles from '../../MainNav.module.scss';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const getIconType = () => {
        let iconType;
        theme === 'light' ? (iconType = 'icon-day') : (iconType = 'icon-night');

        return iconType;
    };
    return (
        <li className={styles['menu__item']}>
            <svg
                className={`${styles['btn__switch-svg']}`}
                alt="switch"
                data-testid="theme-switcher-svg"
                onClick={changeTheme}
            >
                <use
                    xlinkHref={`${switchSVG}#${getIconType()}`}
                    data-testid="theme-switcher-use"
                ></use>
            </svg>
        </li>
    );
};
