import React from 'react';
const { useState } = React;

import { Logo } from '../../Logo/Logo';
import { NavBurger } from './navBurger/NavBurger';
import { NavMenu } from './navMenu/NavMenu';

import styles from './MainNav.module.scss';

export const MainNav = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <nav className={`${styles.nav} nav`}>
            <Logo type="main" />
            <NavBurger onClick={toggleVisibility} />
            {visible && <NavMenu />}
        </nav>
    );
};
