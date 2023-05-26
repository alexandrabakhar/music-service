import logoDark from '../../../../assets/img/logo.png';
import logoLight from '../../../../assets/img/logoLight.png';
import styles from '../MainNav.module.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import { ThemeContext } from '../../../../providers/ThemeProvider';

export const NavLogo = () => {
    // console.log(document.documentElement.dataset.theme);
    // let logo;
    // const currentTheme = localStorage.getItem('theme');
    // const { theme } = ThemeContext;
    // console.log(currentTheme);

    // useEffect(() => {
    //     localStorage.getItem('theme') === 'light' ? (logo = logoLight) : (logo = logoDark);
    //     console.log('aaaaa');
    // }, [localStorage.getItem('theme')]);
    // // let logo;
    // currentTheme === 'light' ? (logo = logoLight) : (logo = logoDark);

    return (
        <NavLink to="/" className={`${styles.logo} logo`}>
            <div className={styles['logo__image']}  ></div>
        </NavLink>
    );
};
